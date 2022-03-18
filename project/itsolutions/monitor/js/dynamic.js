function main() {
	$.ajax({
		url: 'status.php',
		type: 'POST',
		data: {
		},
		complete: function(data) {
			//Check if page loaded successfully (HTTP status code 200)
			if (data.status===200) {
				//Convert from string to array
				let json = JSON.parse(data.responseText);
				
				//Create element
				let newElement = document.createElement("p");
				newElement.classList.add("logtext");
				
				//Add text to element
				let textnode = document.createTextNode("Logtime: "+json.data[0].logtime+" CpuUsage: "+json.data[0].cpu_usage+" MemoryUsage: "+json.data[0].memory_usage+" DriveUsage: "+json.data[0].drive_usage);
				newElement.appendChild(textnode);
				
				//Add new element to existing element
				let old = document.getElementById('logbox').appendChild(newElement);
				
				//Scroll to new element
				var elem = document.getElementById('logbox');
				elem.scrollTop = elem.scrollHeight;
			} else {
				//If 'calculate.php' not reachable
				alert("Error during query");
			}
		}
	});
}
//Will be executed when the web page has finished loading 
$( document ).ready(function() {
	main();
	setInterval(main, 2000);
});