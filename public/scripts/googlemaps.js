



// Global Variables. May need to refactor this code (refer to Spencer's explanation)
let searchLocation;
let map;
let allMyMarkers = []; // used in clearMarkers

// Initialize and add the map
function initMap() {
  const vancouver = {
    lat: 49.246292,
    lng: -123.116226
  };
  map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 9,
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



// a location called Door Is Open to use to test marker functions below
// replace with dynamic code
const doorIsOpen = {
  lat: 49.282622,
  lng: -123.095606
};

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
  $('button#dumpster-heaven').on('click', function () {



    })
})

$('#dumpster-heaven').on('click', (event) => {
  let mapId = 1;
  console.log('hi');
  $.ajax('/maps/dumpsterHeaven/show', {
    method: "GET",
    data: {
      map_id: mapId
    },
    success: (val) => {
      let markers = val.markers;
      markers.forEach((marker) => {
        showMarker(marker.lat,marker.lng);
      });
    }

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
  allMyMarkers.push(marker);

  marker.setMap(map)
}

function showMarker(lat,lng) {
  var marker = new google.maps.Marker({
    position: {
      lat,
      lng
    },
    map: map,
  });
  allMyMarkers.push(marker);

  marker.setMap(map)
}

// to add marker when Dumpster Haven button is clicked
// function addDumpster() {
//   console.log("dumpster button works")
//   console.log(doorIsOpen.lat, doorIsOpen.lng)
//   addMarker(doorIsOpen.lat, doorIsOpen.lng)
// }

function sendMarkerToServer(markerData) {
  $.post('http://localhost:8080/api/markers', markerData)
    .then(function (response) {
    console.log(response)
  })
}

function clearMarkers() {
  for(var i = 0; i < allMyMarkers.length; i++) {
    allMyMarkers[i].setMap(null);
  }
}
