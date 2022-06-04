<?php
session_start();
include($_SERVER["DOCUMENT_ROOT"].'/settings/itsolutions/general.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/itsolutions/database/user_connection.php');

$tbl_name = "users";

//Check if user is already logged in
if (strlen($_SESSION['itsolutions_userid']!=0)) {
	header("Location:".$projectPath);
}

if(isset($_POST['commitLogin'])) {
	$firstname = mysqli_real_escape_string($db_connection, $_POST['firstname']);
	$lastname = mysqli_real_escape_string($db_connection, $_POST['lastname']);
	$username = mysqli_real_escape_string($db_connection, $_POST['username']);
	$unhashed_password = mysqli_real_escape_string($db_connection, $_POST['password']);
	
	if (checkGuidelines($firstname, $lastname, $username, $unhashed_password)) {
		encryptPassword($unhashed_password);
		checkUserExists($username);
		createUser($firstname, $lastname, $username, $hashed_password);
		loginUser($username, $hashed_password);
		header("Location:".$projectPath);
	}
}

function checkGuidelines($firstname, $lastname, $username, $unhashed_password) {
	//Firstname
	if(strlen($firstname) < 3) {
		$_SESSION['register_err']="Firstname too short";
		return false;
	}
	if(strlen($firstname) > 15) {
		$_SESSION['register_err']="Firstname too long";
		return false;
	}
	//Lastname
	if(strlen($lastname) < 3) {
		$_SESSION['register_err']="Lastname too short";
		return false;
	}
	if(strlen($lastname) > 15) {
		$_SESSION['register_err']="Lastname too long";
		return false;
	}
	//Username
	if(strlen($username) < 3) {
		$_SESSION['register_err']="Username too short";
		return false;
	}
	if(strlen($username) > 25) {
		$_SESSION['register_err']="Username too long";
		return false;
	}
	//Password
	if(strlen($unhashed_password) < 5) {
		$_SESSION['register_err']="Password too short";
		return false;
	}
	if(strlen($unhashed_password) > 50) {
		$_SESSION['register_err']="Password too long";
		return false;
	}
	return true;
}

function encryptPassword($unhashed_password) {
	$options = [
		'cost' => 12,
	];
	
	$GLOBALS['hashed_password'] = password_hash($unhashed_password, PASSWORD_BCRYPT, $options);
}

function checkUserExists($username) {
	$sql_getUserAmount = "SELECT count(id) AS 'id' FROM `".$GLOBALS['tbl_name']."` WHERE username=?;";
	
	//Prepare statements
	$stmt = mysqli_stmt_init($GLOBALS['db_connection']);
	if (!mysqli_stmt_prepare($stmt, $sql_getUserAmount)) {
		echo "SQL statement failed!";
	} else {
		//Bind parameter to placeholder
		mysqli_stmt_bind_param($stmt, "s", $username);
		mysqli_stmt_execute($stmt);
		$result = mysqli_stmt_get_result($stmt);
		
		$data = mysqli_fetch_array($result);
	}
	
	if($data['id'] != 0) {
		$_SESSION['register_err']="Username already exists";
		header("Location:".$GLOBALS['projectPath']."/register");
		exit();
	}
}

function createUser($firstname, $lastname, $username, $hashed_password) {
	$sql_createUser = "INSERT INTO ".$GLOBALS['tbl_name']." (firstname, lastname, username, password)
	VALUES (?, ?, ?, ?);";
	
	//Prepare statements
	$stmt = mysqli_stmt_init($GLOBALS['db_connection']);
	if (!mysqli_stmt_prepare($stmt, $sql_createUser)) {
		echo "Input SQL statement failed!";
	} else {
		//Bind parameter to placeholder
		mysqli_stmt_bind_param($stmt, "ssss", $firstname, $lastname, $username, $hashed_password);
		mysqli_stmt_execute($stmt);
	}
}

function loginUser($username, $hashed_password) {
	$sql_getUser = "SELECT * FROM `".$GLOBALS['tbl_name']."` WHERE username=?;";
	
	//Prepare statements
	$stmt = mysqli_stmt_init($GLOBALS['db_connection']);
	if (!mysqli_stmt_prepare($stmt, $sql_getUser)) {
		echo "SQL statement failed!";
	} else {
		//Bind parameter to placeholder
		mysqli_stmt_bind_param($stmt, "s", $username);
		mysqli_stmt_execute($stmt);
		$result = mysqli_stmt_get_result($stmt);
		
		$data = mysqli_fetch_array($result);
	}
	
	if($data>0) {
		//If user was found
		$_SESSION['itsolutions_firstname']=$data['firstname'];
		$_SESSION['itsolutions_lastname']=$data['lastname'];
		$_SESSION['itsolutions_username']=$data['username'];
		$_SESSION['itsolutions_userid']=$data['id'];
		header("Location:".$projectPath);
	} else {
		$_SESSION['register_err']="Username already exists";
		exit();
	}
}
?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$companyName." - Register"?></title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$projectFavicon;?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
		<!-- css files -->
		<link rel="stylesheet" id="parent-style-css" href="css/style.css" type="text/css" media="all" />
	</head>
	<body>
		<div class="header">
			<nav class="navigation">
				<a class="logo" href="<?=$projectPath;?>" target="_self"><?=$companyName;?></a>
				<ul class="nav">
					<?php
						//Setting up navigation from imported settings
						for ($i=0; $i<=count($navigation)-1; $i++) {
							echo "
								<li class='nav-item'><a href='".$navigation[$i]['path']."' class='nav-link'>".$navigation[$i]['name']."</a></li>
								";
						}
					?>
				</ul>
			</nav>
		</div>
			<?php
				
				if(isset($_SESSION['addsuccessmsg'])) {
					echo "<p id='success'>" . $_SESSION['addsuccessmsg'] . "</p>";
					$_SESSION['addsuccessmsg']=NULL;
				}
			?>
			<form method="post" action="" id="form">
				<h1>Create an account</h1>
				<input type="text" id="firstname" name="firstname" placeholder="First name" required>
				<input type="text" id="lastname" name="lastname" placeholder="Last name" required>
				<input type="text" id="username" name="username" placeholder="Username" required>
				<input type="password" id="password" name="password" placeholder="Password" required>
				<input type="submit" name="commitLogin" value="Submit">
				<?php
				if (isset($_SESSION['register_err'])) {
					echo "<p id='errormsg'>" . $_SESSION['register_err'] . "</p>";
					$_SESSION['register_err']=NULL;
				}
				?>
				<aside class="note" id="faside">First name between 3-15 characters</aside>
				<aside class="note">Last name between 3-15 characters</aside>
				<aside class="note">Username between 3-25 characters</aside>
				<aside class="note">Password between 5-50 characters</aside>
			</form>
		<div id="footer">
		  <p>
			<span><?=$companyName?> © <?=date("Y")?></span>
			<a class="social" href="<?=$privacypolicylink?>" target="_blank" ><?=$privacypolicy?></a>
		  </p>
		</div>
	</body>
</html>