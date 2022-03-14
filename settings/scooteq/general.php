<?php
//Project settings
	$projectPath = "/project/scooteq";
	
	$projectFavicon = $projectPath."/img/fav.ico";
	$companyName = "ScooTeq";
	
//General settings
	$currency = "€";
	$energycosts = 0.32; //Energy costs per kw/h
	$minprice = 1; //Min price
	$defaulttime = 15; //15 Minutes
	
//Navigation settings
$navigation = array(
	//Pricing
	array(
		"path" => $projectPath."/pricing",
		"name" => "Pricing"),
		
	//Models
	array(
		"path" => $projectPath."/models",
		"name" => "Models"),

	//Models
	array(
		"path" => $projectPath."/contact",
		"name" => "Contact")
);

//Footer settings
	$privacypolicy = "Privacy Policy";
	$privacypolicylink = "/privacy";
?>