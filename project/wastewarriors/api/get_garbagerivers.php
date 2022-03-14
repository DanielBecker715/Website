<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/wastewarriors/database/connection.php');

header('Content-Type: application/json');
//SQL queries
$q_getgarbagepatch = "SELECT * FROM garbagerivers";

//Convert the DB return to an array
$sql = mysqli_query($db_connection, $q_getgarbagepatch);

$garbageriver=[];

while ($data=mysqli_fetch_array($sql)) {
	$garbageriver[]=[
		'rivername'=>$data["rivername"],
		'description'=>$data["description"],
		'latitude'=>$data["latitude"],
		'longitude'=>$data["longitude"],
	];
}

echo json_encode($garbageriver);
mysqli_close($db_connection);