$(document).ready(function () {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
<<<<<<< HEAD
  });;

 
});
$('button#dumpster-heaven').on('click', function (lat, long) {
  console.log("dumpster button works")
} )
// $(function addMarkerToMap() {
//   $('button.add').on('click', function (lat, long) {
//     // Proof that button works, will show in console
//     console.log('will try to add point');

//     console.log(addMarker);
//     // Adds marker when button is clicked
//     addMarker(searchLocation[0], searchLocation[1]);
//   })
// })
=======
  });
});

// DATA VARIABLES 


// STRUCTURE OF YOUR MAPS SECTION 

const $yourMaps    = $("<section>").attr("id", "your-maps");
const $orderedList = $("<ol>").appendTo($yourMaps);
const $list = $("<li>").appendTo($orderedList);
const $map = $("<button>").addClass("btn btn-primary mx-auto").appendTo($list);
const $lineBreak = $("<br>").appendTo($yourMaps);
>>>>>>> frontend_styles
