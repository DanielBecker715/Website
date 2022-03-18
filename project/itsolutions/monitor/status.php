<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/itsolutions/database/monitor_connection.php');

$json = new stdClass;

$numberOfRows = 10;
$sql_getMonitorData = "SELECT * FROM log_today ORDER BY logid DESC LIMIT ".$numberOfRows;

$response = mysqli_query($db_connection, $sql_getMonitorData);

while($row = mysqli_fetch_array($response)) {
	$server = new stdClass;
	$server->logid[]= $row['logid'];
	$server->cpu_usage[]= $row['cpu_usage'];
	$server->memory_usage[]= $row['memory_usage'];
	$server->drive_usage[]= $row['drive_usage'];
	$server->logtime[]= $row['logtime'];
	$json->data[] = $server;
}

echo json_encode($json);
mysqli_close($db_connection);
?>