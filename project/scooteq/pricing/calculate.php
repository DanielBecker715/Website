<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/general.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/costcalculation.php'); //Import the calculation of the costs

$tbl_name = "models";

$json = new stdClass;

if(isset($_POST['serialno']) AND isset($_POST['traveledroute'])) {
	$traveledroute = $_POST['traveledroute'];
	$serialno = $_POST['serialno'];
	
	//XMLHttpRequest
	//Passing the variables to Javascript
	$json->traveledroute = $traveledroute; 
	$json->serialno = $serialno;			
	
	include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/database/connection.php');
	$q_getserialno = "SELECT * FROM ".$tbl_name." Where serialno=".$serialno;
	$sql = mysqli_query($db_connection, $q_getserialno);
	$data=mysqli_fetch_array($sql);
	mysqli_close($db_connection);
	
	//Add database data to the class
	$json->kmh = $data['kmh'];
	$json->power = $data['watt'];
	$json->currency = $currency;
	
	$result = calculate($data['kmh'], $data['watt'], $data['amper'], $data['voltage'], $traveledroute);
	
	$json->runtime = $result[0];
	$json->chargecosts = $result[1];
	$json->tripprice = $result[2];
	echo json_encode($json);
}
?>