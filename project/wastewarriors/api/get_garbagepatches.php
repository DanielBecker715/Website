<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/wastewarriors/database/connection.php');

header('Content-Type: application/json');
//SQL queries
$q_getmicroplasticpatch = "SELECT * FROM garbagepatches";

//Convert the DB return to an array
$sql = mysqli_query($db_connection, $q_getmicroplasticpatch);

$garbagepatch=[];

while ($data=mysqli_fetch_array($sql)) {
	$garbagepatch[]=[
		'patchname'=>$data["patchname"],
		'description'=>$data["description"],
		'latitude'=>$data["latitude"],
		'longitude'=>$data["longitude"],
		'radiusinmeter'=>$data["radiusinmeter"],
	];
}

echo json_encode($garbagepatch);
mysqli_close($db_connection);