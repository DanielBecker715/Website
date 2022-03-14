<?php
session_start();
include($_SERVER["DOCUMENT_ROOT"].'/settings/general.php');

?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$companyName?></title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$fav?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
		<!-- css files -->
		<link rel="stylesheet" id="parent-style-css" href="css/style.css" type="text/css" media="all" />
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
		</div>
		<img class="svg_spike" src="/img/spike.svg"/>
		<section class="webprojects">
			<h1>Web Project Overview</h1>
			<aside id="updated"></aside>
			<hr class="projects-hr-header">
			<div class="main">
				<?php
					include($_SERVER["DOCUMENT_ROOT"].'/settings/projectInfo.php');
					
					//Setting up project boxes from imported settings
					for ($i=0; $i<=count($websiteProjects)-1; $i++) {
						echo "
							<div class='boxborder'>
								<article class='textbox'>
									<span class='projects-h1'>".$websiteProjects[$i]['name']."</span>
									<hr class='projects-hr'>
									<p class='projects-text-topic'>".$websiteProjects[$i]['topic']."</p>
									<p class='projects-text-description'>Description:</p>
									<p class='projects-text'>".$websiteProjects[$i]['description']."</p>
									<hr class='projects-hr'>
									<a class='button button-primary' href='".$websiteProjects[$i]['path']."'>Visit now</a>
								</article>
							</div>
							";
					}
				?>
			</div>
		</section>
		<section class="gameprojects">
			<h1>Game Project Overview</h1>
			<aside id="updated"></aside>
			<hr class="projects-hr-header">
			<div class="main">
				<?php
					//Setting up project boxes from imported settings
					for ($i=0; $i<=count($gameProjects)-1; $i++) {
						echo "
							<div class='boxborder'>
								<article class='textbox'>
									<span class='projects-h1'>".$gameProjects[$i]['name']."</span>
									<hr class='projects-hr'>
									<p class='projects-text-description'>Ver: ".$gameProjects[$i]['ver']."</p>
									<p class='projects-text-description'>Description:</p>
									<p class='projects-text'>".$gameProjects[$i]['description']."</p>
									<hr class='projects-hr'>
									<a class='button button-primary' href='".$gameProjects[$i]['path']."'>Download</a>
								</article>
							</div>
							";
					}
				?>
			</div>
		</section>
		<div id="footer">
		  <p>
			<span><?=$companyName?> © <?=date("Y")?></span>
			<a class="social" href="<?=$privacypolicylink?>" target="_blank" ><?=$privacypolicy?></a>
			<a class="social" href="<?=$moodlelink?>" target="_blank" ><?=$moodle?></a>
		  </p>
		</div>
	</body>
</html>
