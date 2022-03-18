function addZero(num) {
   return +num < 10 ? `0${num}` : num;
}
function main() {
	$.ajax({
		url: 'status.php',
		type: 'POST',
		data: {
		},
		complete: function(data) {
			if (data.status===200) {
				let json = JSON.parse(data.responseText);
				if (json.error == true) {
					$('#errormsg').text(json.errormsg);
				} else {
					for (i=0; i<json.server.length; i++){
						let server = json.server[i];
						let span = document.getElementById(server.name);
						if (span) {
							if (server.status === true) {
								//Readding classes
								if (span.classList.contains("failed")) {
									span.classList.remove("failed");
								}
								if (!span.classList.contains("success")) {
									span.classList.add("success");
								}
							} else {
								//Readding classes
								if (!span.classList.contains("failed")) {
									span.classList.add("failed");
								}
								if (span.classList.contains("success")) {
									span.classList.remove("success");
								}
							}
						}
						if (server.status === true) {
							//Readding classes
							if (span.classList.contains("failed")) {
								span.classList.remove("failed");
							}
							if (!span.classList.contains("success")) {
								span.classList.add("success");
							}
						} else {
							//Readding classes
							if (!span.classList.contains("failed")) {
								span.classList.add("failed");
							}
							if (span.classList.contains("success")) {
								span.classList.remove("success");
							}
						}
					}
				}
			} else {
				//'status.php' not available
				alert("Error during query");
			}
		let currentdate = new Date(); 
		let datetime = "Updated on " + currentdate.getDate() + ". "
                + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][currentdate.getMonth()] + " " 
                + currentdate.getFullYear() + " "
                + addZero(currentdate.getHours()) + ":"
                + addZero(currentdate.getMinutes()) + ":" 
                + addZero(currentdate.getSeconds())
				+ " MESZ";
		document.getElementById("updated").innerHTML = datetime;
		$(".loader-wrapper").fadeOut("slow");
		}
	});
}
//Will be executed when the web page has finished loading
$( document ).ready(function() {
	main();
	setInterval(main, 10000);
});