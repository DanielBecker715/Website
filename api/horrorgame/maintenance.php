<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/horrorgame/database/connection.php');

header('Content-Type: application/json');
//SQL queries
$q_getmicroplasticpatch = "SELECT * FROM maintenance WHERE maintenance_completed = 0";

//Convert the DB return to an array
$sql = mysqli_query($db_connection, $q_getmicroplasticpatch);

$requests=[];

while ($data=mysqli_fetch_array($sql)) {
	if ($data["maintenance_completed"] == 0) {
		$data["maintenance_completed"] = false;
	} else {
		$data["maintenance_completed"] = true;
	}
	$requests[]=[
		'maintenance_id'=>$data["maintenance_id"],
		'start_time'=>$data["start_time"],
		'estimated_end_time'=>$data["estimated_end_time"],
		'topic_section'=>$data["topic_section"],
		'reason'=>$data["reason"],
		'maintenance_completed'=>$data["maintenance_completed"],
	];
}

echo json_encode($requests);
mysqli_close($db_connection);