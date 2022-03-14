<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/wastewarriors/database/connection.php');

//SQL queries
$q_getallpartner= "SELECT * FROM partners";

//Convert the DB return to an array
$sql = mysqli_query($db_connection, $q_getallpartner);

$partner=[];

while ($data=mysqli_fetch_array($sql)) {
	$partner[]=[
		'organisation'=>$data["organisation"],
		'description'=>$data["description"],
		'foundation_date'=>$data["foundation_date"],
	];
}
mysqli_close($db_connection);