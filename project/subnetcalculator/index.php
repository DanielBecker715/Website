<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/subnetcalculator/general.php');

?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Subnet calculator to calculate customsubnets">
		<title><?=$companyName?></title>
		<link rel="shortcut icon" type="image/x-icon" href="<?=$projectFavicon?>">
		<!-- fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&amp;display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto:500|Open+Sans:600" rel="stylesheet">
		<!-- css files -->
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<!-- javascript files -->
		<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
		<script type="text/javascript" charset="UTF-8" src="js/dynamic.js"></script>
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
		
		<h1>Subnet calculator</h1>
		<section class="subnetcalculator">
			<hr>
			<div class="wrapper">
				<div class="userinput">
					<label>IP-Adresse:</label>
					<input type="text" id="ipaddress" placeholder="IP-Adresse" onchange="main();">
					<label>Subnetmask:</label>
					<input type="text" id="subnetmask" value="255.255.255.0" placeholder="0.0.0.0" onchange="main();">
					<label>Max Hosts:</label>
					<select id="OPhosts" onchange="hostsberechnen(this);"></select>
					<label>Max Subnets:</label>
					<select id="OPsubnets" onchange="subnetzberechnen(this);"></select>
					<p><?="<b>Your Ip-Address:</b> ".$_SERVER["REMOTE_ADDR"]?><p>
				</div>
				<div class="dataoutput">
					<label>IP-Address:</label>
					<input type="text" id="ipaddress_output" placeholder="" readonly>
					<label>Subnetmask:</label>
					<input type="text" id="subnetmask_output" placeholder="" readonly>
					<label>Bits:</label>
					<input type="text" id="bits" placeholder="" readonly>
					<label>Max Hosts:</label>
					<input type="text" id="iphosts" placeholder="" readonly>
					<label>Max Subnets:</label>
					<input type="text" id="maxsubnets" placeholder="" readonly>
					<label>Host Address Range:</label>
					<input type="text" id="iprange" placeholder="" readonly>
					<label>Net-Address:</label>
					<input type="text" id="netaddress" placeholder="" readonly>
					<label>Broadcast-Address</label>
					<input type="text" id="broadcastadress" placeholder="" readonly>
					<label>Network-Class:</label>
					<input type="text" id="ipclass" placeholder="" readonly>
					<p id="errormsg"></p>
				</div>
		</section>
		<div class="footer">
		  <p>
			<span><?=$companyName?> © <?=date("Y")?></span>
			<a class="social" href="<?=$privacypolicylink?>" target="_blank" ><?=$privacypolicy?></a>
		  </p>
		</div>
	</body>
</html>