<?php
//Cost calculation for scooter
function calculate($kmh, $watt, $amper, $voltage, $minutes) {
	global $minprice;
	global $energycosts;
	$temp_kmh = $kmh;
	$temp_watt = $watt;
	$temp_amper = $amper;
	$temp_voltage = $voltage;
	$runtime = floor(($temp_voltage*$temp_amper/$temp_watt)*60);
	$chargecosts = round($energycosts*($temp_amper*$temp_voltage/1000), 2);
	$finalcosts = $minutes*60*floatval("0.00".$temp_kmh)+$minprice;
	return array($runtime, $chargecosts, $finalcosts);
}
?>