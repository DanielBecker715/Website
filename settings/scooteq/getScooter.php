<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/database/connection.php');

$tbl_name = "models";

//SQL queries
$q_getserialno = "SELECT * FROM ".$tbl_name;

$sql = mysqli_query($db_connection, $q_getserialno);
$scooter=[];
$nr = 0;
while ($data=mysqli_fetch_array($sql)) {
	$nr++;
	$scooter[$nr] = $data;
}
mysqli_close($db_connection);
?>