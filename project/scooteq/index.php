<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/general.php');

//Print logout message if user recently logged out
if (isset($_SESSION['logoutmsg'])) {
	echo "<p id='abmelden'>" . $_SESSION['logoutmsg'] . "</p>";
	$_SESSION['logoutmsg']=NULL;
}

?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$companyName?></title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$projectFavicon?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
		<!-- css files -->
		<link rel="stylesheet" id="parent-style-css" href="css/style.css" type="text/css" media="all" />
	</head>
	<body>
		<section class="introduction">
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
			<h1>Scooting with no limits</h1>
			<div id="box2">
				<div id="box3">
					<h4 class="headline">Scooting with no limits</h4>
					<p class="Info">Luckily we have a suitable scooter for any terrain, for example, we have the long-distance scooters, which have a particularly long range. However, these are not the only scooters we can offer you, because we also have an off-road scooter that can drive through any landscape with its extra powerful performance. In addition, our road scooters are perfect for the way to work.</p>
				</div>
				<div id="box4">
					<h4 class="headline">Sustainability</h4>
					<p class="Info">Our scooters are durable and have an average life of 1.5 years. What makes e-scooters special are the mostly short trips without air pollution. In addition, our scooters have low recharge costs. The special thing is that our scooters are distributed all over Los Angeles.</p>
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
