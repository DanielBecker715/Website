<?php
$json = new stdClass;
$json->error = false;
$json->errormsg = "";
$json->server = [];

$serverip = "DarkvoidStudios.com";

//Server
$mxgate1="192.168.1.2";
$mxgate2="192.168.1.3";
$mxsrv0="192.168.1.10";
$dbsrv0="192.168.2.2";
$websrv0="192.168.3.2";
$monitorsrv0="192.168.4.2";

//Service-Ports
$mxgate1Service=25;
$mxgate2Service=25;
$mxsrv0Service=25;
$dbService=3306;

function get_database_status($html_id, $db_name, $db_connection_file_path) {
	$server = new stdClass;
	$server->name= $html_id;
	
	include($_SERVER["DOCUMENT_ROOT"].$db_connection_file_path);

	if (mysqli_connect_errno()) {
		$server->status = false;
		return $server;
	}
	
	$sql_countDatabase = "SELECT count(*) AS `numberOfDatabases` FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME=?;";

	//Prepare statements
	$stmt = mysqli_stmt_init($db_connection);
	if (!mysqli_stmt_prepare($stmt, $sql_countDatabase)) {
		echo "SQL SELECT statement failed!";
		var_dump(mysqli_stmt_error_list($stmt));
		var_dump($db_connection);
		exit;
	} else {
		//Bind parameter to placeholder
		mysqli_stmt_bind_param($stmt, "s", $db_name);
		mysqli_stmt_execute($stmt);
		$result = mysqli_stmt_get_result($stmt);
		
		$data = mysqli_fetch_array($result);
	}
	
	if ($data['numberOfDatabases'] >= 1) {
		$server->status = true;
	} else {
		$server->status = false;
	}
	$db_connection -> close();
	return $server;
}

//Prüfen des Status des Ark-Server's
function get_server_port_status($serverip, $port, $servername) {
	$exec1 = exec( "nc -v -u -z -w 1 ".$serverip." ".$port, $output1, $return1 );
	$server = new stdClass;
	
	$server->name= $servername;
	if ($return1 == 0) {
		$server->status = true;
	} else {
		$server->status = false;
	}
	echo "<script type='text/javascript'>alert('\n || --->>> ".$return1." ".$serverip." ".$port."  <<<--- ||');</script>";
	return $server;
}

function get_server_status_socket($serverip, $port, $servername) {
	$return1 = @fsockopen($serverip, $port);
	$server = new stdClass;
	$server->name= $servername;
	
	if ($return1) {
		$server->status = true;
	} else {
		$server->status = false;
	}
	return $server;
}

//Prüfen des Status des Server-Bots
function get_server_icmp_status($serverip, $servername) {
	$server = new stdClass;
	$server->name= $servername;

	exec("fping -c1 -t500 ".$serverip, $output, $status);
	if ($status != 0) {
		$server->status = false;
		return $server;
	}
	$server->status = true;
	return $server;
}
//Server
$json->server[] = get_server_icmp_status($mxgate1, "mailgateway1");
$json->server[] = get_server_icmp_status($mxgate2, "mailgateway2");
$json->server[] = get_server_icmp_status($mxsrv0, "mailserver");
$json->server[] = get_server_icmp_status($dbsrv0, "databaseserver");
$json->server[] = get_server_icmp_status($websrv0, "webserver");
$json->server[] = get_server_icmp_status($monitorsrv0, "monitorserver");


//Services
$json->server[] = get_server_status_socket($mxgate1, $mxgate1Service, "mailgateway1-mailservice");
$json->server[] = get_server_status_socket($mxgate2, $mxgate2Service, "mailgateway2-mailservice");
$json->server[] = get_server_status_socket($mxsrv0, $mxsrv0Service, "mailserver-mailservice");
$json->server[] = get_server_status_socket($dbsrv0, $dbService, "database-service");

//Databases
$json->server[] = get_database_status("dbscooteq", "scooteq", "/settings/scooteq/database/connection.php");
$json->server[] = get_database_status("dbitsolutions", "itsolutions", "/settings/itsolutions/database/user_connection.php");
$json->server[] = get_database_status("dbitsolutions-monitoring", "monitoring", "/settings/itsolutions/database/monitor_connection.php");
$json->server[] = get_database_status("dbwastewarriors", "wastewarriors", "/settings/wastewarriors/database/connection.php");
$json->server[] = get_database_status("dbsubnetcalculator", "subnetcalculator", "/settings/subnetcalculator/database/connection.php");
echo json_encode($json);
?>