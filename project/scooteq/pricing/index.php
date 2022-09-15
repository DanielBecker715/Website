<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/general.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/getScooter.php'); //Imports the scooters from database

?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$companyName." - Pricing"?></title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$projectFavicon?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
		<!-- css files -->
		<link rel="stylesheet" id="parent-style-css" href="css/style.css" type="text/css" media="all" />
		<!-- javascript files -->
		<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
		<script type="text/javascript" charset="UTF-8" src="js/dynamic.js"></script>
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
		<section class="costcalculations">
			<div class="wrapper">
				<h2>Costs calculation</h2>
				<hr>
				<div id="calculation">
					<div class="userinputs">
						<label>Scooter model</label>
						<select id="models">
							<?php
								//Adding the scooters from database
								for ($i=1; $i<=count($scooter); $i++) {
									?><option value="<?=$scooter[$i]['serialno']?>"><?=$scooter[$i]['model']?></option><?php 
								}
							?>
						</select>
						<label>Route traveled: (in minutes)</label>
						<input type="text" id="traveledroute" placeholder="Minutes" onchange="main();">
					</div>
					<div class="output">
						<label>Km/h</label>
						<input type="text" id="kmh" placeholder="Output" readonly>
						<label>Route price:</label>
						<input type="text" id="tripprice" placeholder="Output" readonly>
						<label>Charge runtime:</label>
						<input type="text" id="runtime" placeholder="Output" readonly>
						<label>Power:</label>
						<input type="text" id="power" placeholder="Output" readonly>
						<label>Full recharge costs:</label>
						<input type="text" id="chargecosts" placeholder="Output" readonly>
						<p id="errormsg"></p>
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