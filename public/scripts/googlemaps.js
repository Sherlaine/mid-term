let searchLocation;
let map;
let allMyMarkers = []; // used in clearMarkers

// Initialize map and focus on Vancouver
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
  // creates the search box and links to the UI element
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

    // Search COORDINATES STORED in this variable
    searchLocation = [location.lat(), location.lng()];
  });
}

// Function that posts marker to map when button is clicked
// This Function works on the CLICKING OF "ADD BUTTON ----"
$(function addMarkerToMap() {
    $('button#add').on('click', function (event, lat, long) {
      event.preventDefault();

      // Proof that button works, will show in console
      //console.log('This is a test button will try to add point');

      //console.log(addMarker);
      // Adds marker when button is clicked
      //IT ACTUALY PLACES THE MARKER ON THE MAP
      addMarker(searchLocation[0], searchLocation[1]);
    })
  $('button#vegan-janet').on('click', function () {
    janetDumpster()
  })
  $('button#east-van').on('click', function () {
    eastVanDumpster()
  })
})

// provides lat and long to add marker to addMarkerToMap function
function addMarker(lat, lng) {
  console.log("clicked add button");
  console.log("adding a marker at ", lat, lng);
  // from Hafiz, test for the getserver function
  sendMarkerToServer({
    lat,
    lng,
    map_id: 1,
    description: 'this is not real description'
  });
  var marker = new google.maps.Marker({
    position: {
      lat,
      lng
    },
    map: map,
  });
  // allMyMarkers.push(marker);
  marker.setMap(map)
}

function sendMarkerToServer(markerData) {
  $.post('http://localhost:8080/api/markers', markerData)
    .then(function (response) {
    console.log(response)
  })
}

//clears marker on current map
function clearMarkers() {
  for(var i = 0; i < allMyMarkers.length; i++) {
    allMyMarkers[i].setMap(null);
  }
  console.log("is this working", clearMarkers)
}

//hard coded databases 
const doorIsOpen = {
  lat: 49.282622,
  lng: -123.095606
}

const metrotown = {
  lat:49.2276257,
  lng: -123.00757570000002
}

const kerrisdale = {
  lat: 49.2331436,
  lng: -123.15672689999997
}

const pne ={
  lat: 49.28251499999999, 
  lng: -123.0429992
}

const ubc ={
  lat: 49.26060520000001,  
  lng:-123.24599380000001
}

const marpole = {
  lat: 49.21072400000001,
  lng: -123.13018699999998
}

// to add marker when vegan janet button is clicked
function janetDumpster() {
  console.log(doorIsOpen.lat, doorIsOpen.lng)
  addMarker(doorIsOpen.lat, doorIsOpen.lng);
  addMarker(metrotown.lat, metrotown.lng);
  addMarker(kerrisdale.lat, kerrisdale.lng)
}

function eastVanDumpster(){
  addMarker(pne.lat, pne.lng);
  addMarker(ubc.lat, ubc.lng);
  addMarker(marpole.lat, marpole.lng);
}



