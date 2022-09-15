<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/general.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/database/connection.php');

$tbl_name = "users";

//Check if user is already logged in / based on session id
if (strlen($_SESSION['scooteq_userid']!=0)) {
	header("Location: ".$projectPath);
	exit;
}

if(isset($_POST['commitLogin'])) {
	$username = $_POST['username'];
	$unhashed_password = $_POST['password'];
	loginUser($username, $unhashed_password);
}

function loginUser($username, $unhashed_password) {
	$sql_getUser = "SELECT * FROM `".$GLOBALS['tbl_name']."` WHERE username=?;";
	
	//Prepare statements
	$stmt = mysqli_stmt_init($GLOBALS['db_connection']);
	if (!mysqli_stmt_prepare($stmt, $sql_getUser)) {
		echo "SQL statement failed!";
		var_dump(mysqli_stmt_error_list($stmt));
		exit;
	} else {
		//Bind parameter to placeholder
		mysqli_stmt_bind_param($stmt, "s", $username);
		mysqli_stmt_execute($stmt);
		$result = mysqli_stmt_get_result($stmt);
		
		$data = mysqli_fetch_array($result);
	}

	$isPasswordCorrect = password_verify($unhashed_password, $data['hash_password']);
	
	if(isset($data['userid'])) {
		//If user was found
		if ($isPasswordCorrect) {
			$_SESSION['scooteq_firstname']=$data['firstname'];
			$_SESSION['scooteq_lastname']=$data['lastname'];
			$_SESSION['scooteq_username']=$data['username'];
			$_SESSION['scooteq_userid']=$data['userid'];
			header("Location: ".$GLOBALS['projectPath']);
			exit;
		} else {
			$_SESSION['register_err']="Wrong password or username";
		}
	} else {
		//If user wasn't found
		$_SESSION['register_err']="Wrong password or username";
	}
}
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?=$companyName." - Login"?></title>
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
			<a class="logo" href="<?=$projectPath;?>" target="_self"><?=$companyName?></a>
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
		<form method="post" action="" id="form">
			<h1>Login</h1>
			<input type="text" name="username" placeholder="Username" required>
			<input type="password" name="password" placeholder="Password" required>
			<input type="submit" name="commitLogin" value="Submit">
			<?php
			//Prints errors if the entered data isn't correct
			if (isset($_SESSION['register_err'])) {
				echo "<p id='errormsg'>" . $_SESSION['register_err'] . "</p>";
				$_SESSION['register_err']=NULL;
			}
			?>
		</form>
	<div id="footer">
	  <p>
		<span><?=$companyName?> © <?=date("Y")?></span>
		<a class="social" href="<?=$privacypolicylink?>" target="_blank" ><?=$privacypolicy?></a>
	  </p>
	</div>
	</body>
</html>