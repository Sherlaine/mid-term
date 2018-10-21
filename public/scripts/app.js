$(document).ready(function () {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});
$('button#dumpster-heaven').on('click', function (lat, long) {
  console.log("dumpster button works")
} )

// $("#add").on("click", function(event) {
//   event.preventDefault()
//   console.log("HEY YO!!!")
// })

// $(function addMarkerToMap() {
//   $('button.add').on('click', function (lat, long) {
//     // Proof that button works, will show in console
//     console.log('will try to add point');

//     console.log(addMarker);
//     // Adds marker when button is clicked
//     addMarker(searchLocation[0], searchLocation[1]);
//   })
// })