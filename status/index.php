<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/general.php');

?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
		<title><?=$companyName." - Status"?></title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$fav?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:600" rel="stylesheet">
		<!-- css files -->
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<!-- javascript files -->
		<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
		<script type="text/javascript" charset="UTF-8" src="js/js.js"></script>
	</head>
	<body>
		<div class="loader-wrapper">
			<span class="loader"><span class="loader-inner"></span></span>
		</div>
		<div class="header">
			<nav class="navigation">
				<a class="logo" href="/" target="_self"><?=$companyName?></a>
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
		<section class="serverstatus">
			<div id="main">
				<h2>Service-Status</h2>
				<aside id="updated"></aside>
				<hr>
				<!---->
				<div class="boxborder">
					<div class="boxview">
						<img class="imgview" src="img/server.png">
						<article class="textbox">
							<h3>Server</h3>
							<p class="textview"><span id="mailgateway1" class='failed'>&#8226;</span> Mailgateway 1</p>
							<p class="textview"><span id="mailgateway2" class='failed'>&#8226;</span> Mailgateway 2</p>
							<p class="textview"><span id="mailserver" class='failed'>&#8226;</span> Mail Server</p>
							<p class="textview"><span id="databaseserver" class='failed'>&#8226;</span> Database Server</p>
							<p class="textview"><span id="webserver" class='failed'>&#8226;</span> Web Server</p>
							<p class="textview"><span id="monitorserver" class='failed'>&#8226;</span> Monitor Server</p>
						</article>
					</div>
				</div>
				<!---->
				<div class="boxborder">
					<div class="boxview">
						<img class="imgview" src="img/services.png">
						<article class="textbox">
							<h3>Services</h3>
							<p class="textview"><span id="mailgateway1-mailservice" class='failed'>&#8226;</span> Mailgateway1 - SMTP</p>
							<p class="textview"><span id="mailgateway2-mailservice" class='failed'>&#8226;</span> Mailgateway2 - SMTP</p>
							<p class="textview"><span id="mailserver-mailservice" class='failed'>&#8226;</span> Mail Server - SMTP</p>
							<p class="textview"><span id="database-service" class='failed'>&#8226;</span> Database Service</p>
						</article>
					</div>
				</div>
				<!---->
				<div class="boxborder">
					<div class="boxview">
						<img class="imgview" src="img/database.jpg">
						<article class="textbox">
							<h3>Databases-Availability</h3>
							<p class="textview"><span id="dbscooteq" class='failed'>&#8226;</span> ScooTeq</p>
							<p class="textview"><span id="dbitsolutions" class='failed'>&#8226;</span> IT-Solutions</p>
							<p class="textview"><span id="dbitsolutions-monitoring" class='failed'>&#8226;</span> IT-Solutions / Monitoring</p>
							<p class="textview"><span id="dbwastewarriors" class='failed'>&#8226;</span> WasteWarriors</p>
							<p class="textview"><span id="dbsubnetcalculator" class='failed'>&#8226;</span> SubnetCalculator</p>
						</article>
					</div>
				</div>

			</div>
			<div id="legende">
				<aside><a class='success'>&#8226;</a> Online</aside>
				<aside><a class='failed'>&#8226;</a> Offline</aside>
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