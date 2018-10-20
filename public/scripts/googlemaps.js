
// Global Variables. May need to refactor this code (refer to Spencer's explanation)
let searchLocation;
let map;
              // Initialize and add the map
                    function initMap() {
                      // The location of Uluru
                      const vancouver = {lat: 49.246292, lng: -123.116226};
                      // The map, centered at Uluru
                      map = new google.maps.Map(
                          document.getElementById('map'), {zoom: 11, center: vancouver});
                      // The marker, positioned at Uluru
                      var marker = new google.maps.Marker({position: vancouver, map: map});
                      const doorIsOpen = {lat: 49.282622, lng: -123.095606};
                    // Hard coded marker, positioned at The Door is Open
                    const marker1 = new google.maps.Marker({position: doorIsOpen, map: map});

        // Search box and input
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);

              // Event listener that saves coordinates to searchLocation upon selecting a destination
              searchBox.addListener('places_changed', function() {
            console.log('new search!!!!');
            var places   = searchBox.getPlaces();
            var location = places[0].geometry.location;
            console.log(location)

            // Proof of latitude of longitude in console
            console.log('location lat', location.lat());
            console.log('location lng', location.lng());

            // Search coordinates stored in this variable
            searchLocation = [location.lat(), location.lng()];
        });
                    }
                    // Marker adding functionality, but does not add marker to map
                    
      function addMarker(lat, lng){
         myLatlng = new google.maps.LatLng(lat, lng);
         console.log(myLatlng)
         // Will be able to add more details about marker (ex.'Hello PLUTO!'). Research documentation
         marker = new google.maps.Marker({position: myLatlng, map: map, title: 'Hello PLUTO!'});
         console.log(marker, map)
      }

      // Function that posts marker to map when button is clicked
      $(function addMarkerToMap() {
        $('button.add').on('click', function(lat, long) {
          // Proof that button works, will show in console
          console.log('will try to add point');

          console.log(addMarker);
          // Adds marker when button is clicked
          addMarker(searchLocation[0], searchLocation[1]);
        })
      })

      // SOMEWHERE HERE WE NEED TO ADD FUNCTIONALITY WHERE WE CAN REMOVE A SELECTED MARKER
          
