<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/wastewarriors/general.php');
include($_SERVER["DOCUMENT_ROOT"].'/project/wastewarriors/api/get_allpartners.php');
?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$companyName?> - Partners</title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$projectFavicon?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
		<!-- css files -->
		<link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
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
		<section class="partners">
			<div id="caption">
				<h2>Our Collaboration</h2>
				<hr>
			</div>
			<div class="wrapper">
					<?php
						//Create all partners
						for ($i=0; $i<=count($partner)-1; $i++) {
					?>
							<!-- Scooter Models -->
							<div class="boxborder">
								<img class="imgview" src="<?=$projectPath?>/img/<?=$partner[$i]['organisation']?>.jpg">
								<h3><?=$partner[$i]['organisation']?></h3>
								<h4 class="headline">Description</h4>
								<aside class="technicaldata"><?=$partner[$i]['description']?></aside>
								<h4 class="headline">Since</h4>
								<aside class="technicaldata"><?=$partner[$i]['foundation_date']?></aside>
							</div>
					<?php 
						}
					?>
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