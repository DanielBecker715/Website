function main() {
	let inputip = document.getElementById("ipaddress").value;
	let inputsubnet = document.getElementById("subnetmask").value;
	
	//XMLHttpRequest
	$.ajax({
		url: 'calculate.php',
		type: 'POST',
		data: {
			//Send input values to php
			ipaddress: inputip,
			subnetmask: inputsubnet,
		},
		dataType: 'json',
		complete: function(data) {
			if (data.status===200) {
				let json = JSON.parse(data.responseText);
				if (json.error == true) {
					$('#errormsg').text(json.errormsg);
				} else {
					document.getElementById("ipaddress_output").value = json.ipaddress;
					document.getElementById("subnetmask_output").value = json.subnetmask;
					document.getElementById("netaddress").value = json.netaddress;
					document.getElementById("broadcastadress").value = json.broadcastadress;
					document.getElementById("ipclass").value = json.ipclass;
					document.getElementById("iprange").value = json.iprange;
					document.getElementById("bits").value = json.bits;
					document.getElementById("iphosts").value = json.iphosts;
					document.getElementById("maxsubnets").value = json.maxsubnets;
					//Refresh Drop-Downs
					selectElement(json.iphosts);
					selectElement2(json.maxsubnets);
				}
			} else {
				//'calculate.php' nicht erreichbar
				alert("Fehler bei der Abfrage");
			}
		}
	});
}
//Will be triggered when site loaded completely
$( document ).ready(function() {
	//Hinzufügen der Optionen der Select's
	function Add(wert, id) {
	   //Wird zum Wert aller Hosts und Subnetze ergebnisse der Potenz
	   var ddl = document.getElementById(id);
	   //Wir erstellen ein Variable und setzen diese gleich mit einem neu erstellten Element 
	   var option = document.createElement("OPTION");
	   option.innerHTML = wert;
	   option.value = wert;
	   ddl.options.add(option);
	}

	//24 Aktionen und immer Hoch 2 (Für's Select)
	for (let i = 2; i <= 24; i++) {
		//Wir berechnen die Potenz von 2^i
		Add(Math.pow(2,i)-2, "OPhosts") //Exakte NR von verfügbaren Hosts
	}
	selectElement(254); //Standard ausgewählter Wert der Hosts

	for (let i = 0; i < 24; i++) {
		//Wir berechnen die Potenz von 2^i
		Add(Math.pow(2,i), "OPsubnets") //Exakte NR von verfügbaren Subnetzen
	}
	selectElement2(65536); //Standard ausgewählter Wert
});

//Wähl die Standartwert der Hosts im Select fest
function selectElement(valueToSelect) {    
    let element = document.getElementById("OPhosts");
    element.value = valueToSelect;
}
//Wähl die Standartwert der Subnetze im Select fest
function selectElement2(valueToSelect) {    
    let element = document.getElementById("OPsubnets");
    element.value = valueToSelect;
}
// Zahl des selects(html) wird übergeben (ausgewaehlezahl)
function subnetzberechnen(ausgewaehlezahl) {
	let subnetze = 
	{
	"1": "255.0.0.0",
	"2": "255.128.0.0",
	"4": "255.192.0.0",
	"8": "255.224.0.0",
	"16": "255.240.0.0",
	"32": "255.248.0.0",
	"64": "255.252.0.0",
	"128": "255.254.0.0",
	"256": "255.255.0.0",
	"512": "255.255.128.0",
	"1024": "255.255.192.0",
	"2048": "255.255.224.0",
	"4096": "255.255.240.0",
	"8192": "255.255.248.0",
	"16384": "255.255.252.0",
	"32768": "255.255.254.0",
	"65536": "255.255.255.0",
	"131072": "255.255.255.128",
	"262144": "255.255.255.192",
	"524288": "255.255.255.224",
	"1048576": "255.255.255.240",
	"2097152": "255.255.255.248",
	"4194304": "255.255.255.252",
	"8388608": "255.255.255.254"
	}
	//Wir erstellen eine Variable "value" und setzen diese auf die Subnetzmaske der Subnetze
	let value = ausgewaehlezahl.value;
	//Wir ändern die Subnetzmaske auf die ausgewählten Subnetze
	document.getElementById("subnetmask").value = subnetze[value];
	main(); //Funktion Main wird aufgerufen (Alles aktualisieren)
}

// Wir erstellen eine Variable (objekt) und übergeben von HTML das this als Wert weiter
function hostsberechnen(hostzahl) {
	let hosts = 
	{
	"2": "255.255.255.252",
	"6": "255.255.255.248",
	"14": "255.255.255.240",
	"30": "255.255.255.224",
	"62": "255.255.255.192",
	"126": "255.255.255.128",
	"254": "255.255.255.0",
	"510": "255.255.254.0",
	"1022": "255.255.252.0",
	"2046": "255.255.248.0",
	"4094": "255.255.240.0",
	"8190": "255.255.224.0",
	"16382": "255.255.192.0",
	"32766": "255.255.128.0",
	"65534": "255.255.0.0",
	"131070": "255.254.0.0",
	"262142": "255.252.0.0",
	"524286": "255.248.0.0",
	"1048574": "255.240.0.0",
	"2097150": "255.224.0.0",
	"4194302": "255.192.0.0",
	"8388606": "255.128.0.0",
	"16777214": "255.0.0.0"
	}
	//Wir erstellen eine Variable "value" und setzen diese auf die Subnetzmaske der Hosts
	let value = hostzahl.value;
	//Wir ändern die Subnetzmaske auf die ausgewählten Hosts
	document.getElementById("subnetmask").value = hosts[value];
	main(); //Funktion Main wird aufgerufen (Alles aktualisieren)
}