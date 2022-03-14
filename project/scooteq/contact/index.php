<?php
session_start();
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/general.php');

if(isset($_POST['submit'])) {
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$message = $_POST['text'];
	
	//Setup Email
	$empfaenger = 'Support@ScooTeq.com';
	$betreff = 'Website question';
	$nachricht = $message;
	$header = 'From: '.$email;
	
	mail($empfaenger, $betreff, $nachricht, $header);
}
?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$companyName." - Contact"?></title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$projectFavicon?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
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
			<?php
			//Check if user is already logged in / based on session id
			if (strlen($_SESSION['scooteq_userid']==0)) {
				session_destroy();
				//show login and register
				echo"<nav class='account'>
						<a class='nav-link' href='".$projectPath."/login"."' target='_self'>Login</a>
						<aside id='account_placeholder'>/</aside>
						<a class='nav-link' href='".$projectPath."/register"."' target='_self'>Register</a>
					</nav>";
			} else {
				//show logout
				echo"<nav class='account'>
						<a id='accountpopup'>".$_SESSION['scooteq_username']."</a>
						<a id='accountpopup' href='".$projectPath."/logout"."' target='_self'>Logout</a>
					</nav>";
			}?>
		</div>
		<section class="contact">
			<div class="wrapper">
				<h2>Contact</h2>
				<hr>
				<div id="box2">
					<div id="box3">
						<form method="post" action="" id="form">
							<h1>Send us an Email</h1>
							<input type="text" name="firstname" placeholder="Firstname">
							<input type="text" name="lastname" placeholder="Lastname">
							<input type="text" name="email" placeholder="E-Mail"><br/>
							<textarea name="text" placeholder="Message to support"></textarea>
							<input type="submit" name="submit" value="Submit">		
						</form>
					</div>
					<div id="box4">
						<div class="mapouter">
						   <div class="gmap_canvas">
							  <iframe width="520" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=K%C3%BCchgarten%2010,%2021073%20Hamburg&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br>
							  <style>.mapouter{position:relative;text-align:right;height:400px;width:520px;}</style>
							  <a href="https://www.embedgooglemap.net">custom google map generator</a>
							  <style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:520px;}</style>
						   </div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div id="footer">
		  <p>
			<span><?=$companyName?> © <?=date("Y")?></span>
			<a class="social" href="<?=$privacypolicylink?>" target="_blank" ><?=$privacypolicy?></a>
		  </p>
		</div>
	</body>
</html>
