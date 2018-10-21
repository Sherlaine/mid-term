$(document).ready(function () {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});

// DATA VARIABLES 


// STRUCTURE OF YOUR MAPS SECTION 

const $yourMaps    = $("<section>").attr("id", "your-maps");
const $orderedList = $("<ol>").appendTo($yourMaps);
const $list = $("<li>").appendTo($orderedList);
const $map = $("<button>").addClass("btn btn-primary mx-auto").appendTo($list);
const $lineBreak = $("<br>").appendTo($yourMaps);
