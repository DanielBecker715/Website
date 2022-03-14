<?php
session_start();
include($_SERVER["DOCUMENT_ROOT"].'/settings/wastewarriors/general.php');

?>
<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?=$companyName?></title>
	<link rel="shortcut icon" type="image/x-icon" href="<?=$projectFavicon;?>">
	<!-- fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
	<!-- css files -->
	<link rel="stylesheet" href="css/style.css" type="text/css"/>
	<link rel="stylesheet" href="css/burger.css" type="text/css" />
	<!-- map integration -->
	<link rel="stylesheet" type="text/css" href="css/map.css" />
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"
		integrity="sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ=="
		crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"
		integrity="sha512-A7vV8IFfih/D732iSSKi20u/ooOfj/AGehOKq0f4vLT1Zr2Y+RX7C+w8A1gaSasGtRUZpF/NZgzSAu4/Gc41Lg=="
		crossorigin=""></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
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
		<form action="https://teamseas.org/" target="_blank">
			<div class="donate-button">
				<button type="submit" id="button">Donate to #TeamSeas</button><br>
			</div>
		</form>
		<div class="menu-button">
			<div class="burger">
			</div>
		</div>
	</div>
	<div class="menu" id="menu">
		<ul class="menu-nav">
			<div id="topmenu" onclick="location.href='<?=$navlink1?>';"><li class="menu-nav-item"><a class="menu-nav-link" href="<?=$navlink1?>"><?=$navitem1?></a></li></div>
			<div onclick="location.href='<?=$navlink2?>';"><li class="menu-nav-item"><a class="menu-nav-link" href="<?=$navlink2?>"><?=$navitem2?></a></li></div>
		</ul>
		<form action="https://teamseas.org/">
			<div class="menu-donate-button">
				<button type="submit" id="button">Donate to #TeamSeas</button><br>
			</div>
		</form>
	</div>
	<div class="legend">
		<ul>
			<li><div class="dot" id="dot1"></div>Microplastic</li>
			<li><div class="dot" id="dot2"></div>Plastic</li>
		</ul>
	</div>
	<div id="map" style="position:fixed;"></div>
	<div id="footer">
	  <p>
		<span><?=$companyName?> © <?=date("Y")?></span>
		<a class="social" href="<?=$privacypolicylink?>" target="_blank" ><?=$privacypolicy?></a>
	  </p>
	</div>
    <script type='text/javascript' src='js/map.js'></script>
	<script type="text/javascript" src="js/burger-button.js"></script>
</body>
</html>
