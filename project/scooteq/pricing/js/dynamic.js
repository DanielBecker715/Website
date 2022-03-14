function main() {
	//User input
	let route = document.getElementById("traveledroute").value;
	let model = document.getElementById("models").value;
	//We create an XMLHttpRequest that we can use to transfer data over the HTTP protocol.
	$.ajax({
		url: 'calculate.php',
		type: 'POST',
		data: {
			//This goes to PHP (to the server)
			traveledroute: route,
			serialno: model,
		},
		complete: function(data) {
			//Check if page loaded successfully (HTTP status code 200)
			if (data.status===200) {
				//Convert from string to array
				let json = JSON.parse(data.responseText);
				
				if (json.error == true) {
					$('#errormsg').text(json.errormsg);
				} else {
					//Writes the variable from PHP to the text field
					document.getElementById("kmh").value = json.kmh;
					document.getElementById("tripprice").value = json.tripprice+json.currency;
					document.getElementById("runtime").value = json.runtime+"min";
					document.getElementById("power").value = json.power+"W";
					document.getElementById("chargecosts").value = json.chargecosts+json.currency;
				}
			} else {
				//If 'calculate.php' not reachable
				alert("Error during query");
			}
		}
	});
}