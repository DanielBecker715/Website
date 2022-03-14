var map = L.map('map', {
    // Set latitude and longitude of the map center (required)
    center: [-5, 13],
    // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
    zoom: 2
});

L.control.scale().addTo(map);

// Create a Tile Layer and add it to the map
//var tiles = new L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

function addGarbagePatch(patchname, description, latitude, longitude, radiusinmeter) {
	var garbagePatch = L.circle([latitude, longitude], radiusinmeter, {
		color: 'black',
		fillColor: '#f03',
		fillOpacity: 0.3
	}).addTo(map);
	garbagePatch.bindPopup("<b>" + patchname + "</b><br/>" + description + "<br/><b>Located in</b><br/> lat: " + latitude + " lon: " + longitude + "<br/><b>Diameter</b><br/> " + radiusinmeter*2/1000 + " km / " + radiusinmeter*2 + " meter");
}

function addMicroPlasticPatch(patchname, description, latitude, longitude, radiusinmeter) {
	var microPlasticPatch = L.circle([latitude, longitude], radiusinmeter, {
		color: 'black',
		fillColor: 'yellow',
		fillOpacity: 0.3
	}).addTo(map);
	microPlasticPatch.bindPopup("<b>" + patchname + "</b><br/>" + description + "<br/><b>Located in</b><br/> lat: " + latitude + " lon: " + longitude + "<br/><b>Diameter</b><br/> " + radiusinmeter*2/1000 + " km / " + radiusinmeter*2 + " meter");
}

function addGarbageRiver(rivername, description, latitude, longitude) {
	var garbageRiver = L.marker([latitude, longitude]).addTo(map);
	garbageRiver.bindPopup("<b>" + rivername + "</b><br/>" + description + "<br/><b>Located in</b><br/> lat: " + latitude + " lon: " + longitude);
}

//LOAD RIVERS
$.ajax({
	url: "/project/wastewarriors/api/get_garbagerivers.php",
	success: function (garbagerivers) {
		var arrayLength = garbagerivers.length;
		for (var i = 0; i < arrayLength; i++) {
			addGarbageRiver(garbagerivers[i]["rivername"], garbagerivers[i]["description"], garbagerivers[i]["latitude"], garbagerivers[i]["longitude"]);
		}
	},
	error: function (request, status, error) {
		alert(request.responseText);
	}
});

//LOAD MICROPLASTICPATCHES
$.ajax({
	url: "/project/wastewarriors/api/get_microplasticpatches.php",
	success: function (microplasticpatches) {
		var arrayLength = microplasticpatches.length;
		for (var i = 0; i < arrayLength; i++) {
			addMicroPlasticPatch(microplasticpatches[i]["patchname"], microplasticpatches[i]["description"], microplasticpatches[i]["latitude"], microplasticpatches[i]["longitude"], parseInt(microplasticpatches[i]["radiusinmeter"]));
		}
	},
	error: function (request, status, error) {
		alert(request.responseText);
	}
});

//LOAD PLASTICPATCHES
$.ajax({
	url: "/project/wastewarriors/api/get_garbagepatches.php",
	success: function (garbagepatches) {
		var arrayLength = garbagepatches.length;
		for (var i = 0; i < arrayLength; i++) {
			addGarbagePatch(garbagepatches[i]["patchname"], garbagepatches[i]["description"], garbagepatches[i]["latitude"], garbagepatches[i]["longitude"], parseInt(garbagepatches[i]["radiusinmeter"]));
		}
	},
	error: function (request, status, error) {
		alert(request.responseText);
	}
});