<?php
session_start();
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/general.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/getScooter.php'); //Imports the scooters from database

?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$companyName." - Models"?></title>
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
		<section class="models">
			<div class="wrapper">
				<h2>Our Scooter models</h2>
				<aside id="updated"><?="Calculated with ".$defaulttime." minutes"?></aside>
				<hr>
				<div class="box2">
					<?php
						include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/costcalculation.php');
						//Output of the imported calculated data
						for ($i=1; $i<=count($scooter); $i++) {
							$result = calculate($scooter[$i]['kmh'], $scooter[$i]['watt'], $scooter[$i]['amper'], $scooter[$i]['voltage'], $defaulttime);
							?>
							<!-- Scooter Models -->
							<div class="vehiclemodel">
								<h1><?=$scooter[$i]['model']?></h1>
								<img class="imgview" src="img/Scooter<?=$i?>.jpg">
								<h3><?=$scooter[$i]['type']?> vehicle</h3>
								<h4 class="headline">Speed</h4>
								<aside class="technicaldata"><?=$scooter[$i]['kmh']?> km/h</aside>
								<h4 class="headline">Driving costs</h4>
								<aside class="technicaldata"><?=$result[2].$currency?></aside>
								<h4 class="headline">Charge runtime</h4>
								<aside class="technicaldata"><?=$result[0]."min"?></aside>
								<h4 class="headline">Power</h4>
								<aside class="technicaldata"><?=$scooter[$i]['watt']."W"?></aside>
								<h4 class="headline">Full recharge costs</h4>
								<aside class="technicaldata"><?=$result[1].$currency?></aside>
							</div>
					<?php 
						}
					?>
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