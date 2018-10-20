// Global Variables. May need to refactor this code (refer to Spencer's explanation)
let searchLocation;
let map;
let allMyMarkers = []; // used in clearMarkers


var cheating_marker_data = {
  3: [
    { lat: 49.240292, lng: -123.146226 },
    { lat: 49.200292, lng: -123.186226 },
  ],
  4: [
    { lat: 49.282622, lng: -123.095606 },
  ]
}


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
  let input = document.getElementById('pac-input'); // creates the search box and links to the UI element
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

<<<<<<< HEAD
=======
// a location called Door Is Open to use to test marker functions below
// replace with dynamic code
const doorIsOpen = {
  lat: 49.282622,
  lng: -123.095606
};

>>>>>>> maps_bug
// Function that posts marker to map when button is clicked
// This Function works on the CLICKING OF "ADD BUTTON ----"
$(function addMarkerToMap() {
<<<<<<< HEAD
    $('button#add').on('click', function (lat, long) {
      // Proof that button works, will show in console
      console.log('will try to add point');

      console.log(addMarker);
      // Adds marker when button is clicked
      addMarker(searchLocation[0], searchLocation[1]);
    })

    $('button#dumpster-heaven').on('click', function () {
      loadMapById(3);
    })
    $('button#bakery').on('click', function () {
      loadMapById(4);
    })
    $('button#restaurants').on('click', function () {
      loadMapById(5);
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

=======
    $('button#add').on('click', function (event, lat, long) {
      event.preventDefault();

      // Proof that button works, will show in console
      //console.log('This is a test button will try to add point');

      //console.log(addMarker);
      // Adds marker when button is clicked
      //IT ACTUALY PLACES THE MARKER ON THE MAP
      addMarker(searchLocation[0], searchLocation[1]);
    })
  $('button#dumpster-heaven').on('click', function () {
    addDumpster()
  })
})


// provides lat and long to add marker to addMarkerToMap function
>>>>>>> maps_bug
function addMarker(lat, lng) {
  console.log("clicked add button");
  console.log("adding a marker at ", lat, lng);
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

// to add marker when Dumpster Haven button is clicked
function addDumpster() {
  console.log("dumpster button works")
  console.log(doorIsOpen.lat, doorIsOpen.lng)
  addMarker(doorIsOpen.lat, doorIsOpen.lng)
}

<<<<<<< HEAD

<<<<<<< HEAD
=======
// REMOVE A SELECTED MARKER
>>>>>>> frontend_styles
=======

>>>>>>> maps_bug
function clearMarkers() {
  for(var i = 0; i < allMyMarkers.length; i++) {
    allMyMarkers[i].setMap(null);
  }
}

<<<<<<< HEAD
function getMarkersByMapId(id, callback) {
  //// TOOOOOOTALLY hardcoded cheating bullshit
  if (cheating_marker_data[id]) {
    callback(null, cheating_marker_data[id]);
  } else {
    callback("is no datas");
  }
}

function loadMapById(id) {
  clearMarkers();
  getMarkersByMapId(id, (err, data) => {
    if (err) {
      console.log("ha ha ha, not loading that shit, u r dum", err);
      return;
    }
    // data is an array of marker objects
    for (var i = 0; i < data.length; i++) {
      var marker = data[i];
      addMarker(marker.lat, marker.lng);
    }
  })
}
=======




>>>>>>> maps_bug
