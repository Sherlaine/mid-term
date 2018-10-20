// Global Variables. May need to refactor this code (refer to Spencer's explanation)
let searchLocation;
let map;
let allMyMarkers = [];

// Initialize and add the map
function initMap() {
  const vancouver = {
    lat: 49.246292,
    lng: -123.116226
  };
  map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 11,
      center: vancouver
    }
  );

  // Search box and input
  let input = document.getElementById('pac-input');
  let searchBox = new google.maps.places.SearchBox(input);

  // Event listener that saves coordinates to searchLocation upon selecting a destination
  searchBox.addListener('places_changed', function () {
    console.log('new search!!!!');
    var places = searchBox.getPlaces();
    var location = places[0].geometry.location;
    console.log(location)

    // Proof of latitude of longitude in console
    console.log('location lat', location.lat());
    console.log('location lng', location.lng());

    // Search coordinates stored in this variable
    searchLocation = [location.lat(), location.lng()];
  });
}



// Function that posts marker to map when button is clicked
$(function addMarkerToMap() {
  //   $('button#add').on('click', function (lat, long) {
  //     // Proof that button works, will show in console
  //     console.log('will try to add point');

  //     console.log(addMarker);
  //     // Adds marker when button is clicked
  //     addMarker(searchLocation[0], searchLocation[1]);
  //   })

  $('button#dumpster-heaven').on('click', function () {
    addDumpster()
  })
})


const doorIsOpen = {
  lat: 49.282622,
  lng: -123.095606
};

function addDumpster() {
  console.log("dumpster button works")
  console.log(doorIsOpen.lat, doorIsOpen.lng)
  addMarker(doorIsOpen.lat, doorIsOpen.lng)
}


lololololo
function addMarker(lat, lng) {
  console.log("adding a marker at ", lat, lng);
  var marker = new google.maps.Marker({
    position: {
      lat,
      lng
    },
    map: map,
  });
  allMyMarkers.push(marker);
}
aaaahhHHhhh!
function clearMarkers() {
  for(var i = 0; i < allMyMarkers.length; i++) {
    allMyMarkers[i].setMap(null);
  }
}

// SOMEWHERE HERE WE NEED TO ADD FUNCTIONALITY WHERE WE CAN REMOVE A SELECTED MARKER