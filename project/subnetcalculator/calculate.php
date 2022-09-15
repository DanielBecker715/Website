<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/subnetcalculator/database/connection.php');

//Erstellen einer Funktion mit den Funktionsparameter $part
function ippart2bit($part) {
	$part = decbin($part);
	//Überprüfen ob die länge der Oktette unidentisch 8 sind
	while (strlen($part)!==8) {
		//Hinzufügen von Nullen bis $part 8 Zeichen lang ist
		$part = "0".$part;
	}
	return $part;
}

$json = new stdClass;
$json->error = false;
$json->errormsg = "";

if(isset($_POST['ipaddress']) AND isset($_POST['subnetmask'])) {
	$ipaddress = $_POST['ipaddress'];
	$subnetmask = $_POST['subnetmask'];
	
	//Check valid ip
	if (filter_var($ipaddress, FILTER_VALIDATE_IP)) {
		if (filter_var($subnetmask, FILTER_VALIDATE_IP)) {
			//Division of the octets of the addresses
			$ipsplit = explode(".", $ipaddress);
			$subsplit = explode(".", $subnetmask);
			
			//Calculation of the network classes
			//Check ip class A
			if ($ipsplit[0] >= 0 AND $ipsplit[0] <= 127) {
				$ipclass = "A";
			//Check ip class B
			} elseif ($ipsplit[0] >= 128 AND $ipsplit[0] <= 191) {
				$ipclass = "B";
			//Check ip class C
			} else {
				$ipclass = "C";
			}
			
			//Calculate wildcardmask
			$wildcardmask=long2ip( ~ip2long($subnetmask));
			
			//Calculate broadcast address
			$broadcastadress=long2ip( ip2long($ipaddress) | ip2long($wildcardmask)); // | bedeutet oder
			
			//Calculate Network address
			$nmask = (ip2long($broadcastadress) & ip2long($subnetmask));
			$netaddress = long2ip($nmask);
			
			//Calculate Host Address Range:
			//Division of octets from the network address
			$FRNGE = explode(".", $netaddress);
			//Division of octets from the broadcast address
			$SRNGE = explode(".", $broadcastadress);
			$iprange = $FRNGE[0].".".$FRNGE[1].".".$FRNGE[2].".".($FRNGE[3]+1)." to ".$SRNGE[0].".".$SRNGE[1].".".$SRNGE[2].".".($SRNGE[3]-1);
			
			//Calculation of the bits
			/* We check if there are 8 numbers in each octet of the subnet mask, 
			if not they are filled with zeros from the beginning.*/
			$bits = ippart2bit($subsplit[0]).ippart2bit($subsplit[1]).ippart2bit($subsplit[2]).ippart2bit($subsplit[3]);
			//We only count the ones to get the number of bits
			$endbits = (substr_count($bits, '1'));

			//Calculation of the hosts
			//We count only the zeros, then count the number of zeros and take 2^n
			$iphosts = 2**(strlen(strstr("$bits", "0")))-2;
			//We count only the zeros and then take this minus with 24 bits.
			$maxsubnets = 2**(24 - substr_count($bits, '0'));
			
			$json->ipaddress = $ipaddress;
			$json->subnetmask = $subnetmask;
			$json->bits = $endbits;
			$json->iprange = $iprange;
			$json->iphosts = $iphosts;
			$json->maxsubnets = $maxsubnets;
			$json->netaddress = $netaddress;
			$json->broadcastadress = $broadcastadress;
			$json->ipclass = $ipclass;
			
			//Save user all data in database to save user results
			$sql = mysqli_query($db_connection,"INSERT INTO customsubnets 
			(`ipaddress`, `subnetmask`, `bits`, `maxhosts`, `maxsubnets`, `hostaddressrange`, `netaddress`, `broadcastaddress`, `ipclass`) 
			VALUES ('$ipaddress', '$subnetmask', '$endbits', '$iphosts', '$maxsubnets', '$iprange', '$netaddress', '$broadcastadress', '$ipclass')");

		} else {
			$json->error = true;
			$json->errormsg = "Enter a valid subnet mask";
		}
	} else {
		$json->error = true;
		$json->errormsg = "Enter a valid IP address";
	}	
	echo json_encode($json);
	mysqli_close($db_connection);
}
?>