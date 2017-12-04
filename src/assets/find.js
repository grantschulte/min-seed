let map;
let infowindow;
let service;

function initMap() {
  const nyc = new google.maps.LatLng(40.7831, -73.9712);

  map = new google.maps.Map(document.getElementById("map"), {
    center: nyc,
    zoom: 15
  });

  initService(nyc);
}

function initService(location) {
  const params = {
    location,
    radius: 500,
    type: ["restaurant"]
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(params, processPlaces);
}

function processPlaces(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  const infowindow = new google.maps.InfoWindow();
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
