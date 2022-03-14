<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/itsolutions/database/monitor_connection.php');

function get_monitor_data() {
	$numberOfRows = 10;
	$sql_getMonitorData = "SELECT * FROM log_today ORDER BY logid DESC LIMIT ".$numberOfRows;

	$response = mysqli_query($GLOBALS['db_connection'], $sql_getMonitorData);

	$server = new stdClass;
	while($row = mysqli_fetch_array($response)) {
		$server->logid[]['logid']= $row['logid'];
		$server->cpu_usage[]['cpu_usage']= $row['cpu_usage'];
		$server->memory_usage[]['memory_usage']= $row['memory_usage'];
		$server->drive_usage[]['drive_usage']= $row['drive_usage'];
		$server->logtime[]['logtime']= $row['logtime'];
	}
	return $server;
}
//var_dump(get_monitor_data());
json_encode(get_monitor_data());
?>