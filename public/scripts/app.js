$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});
// STRUCTURE OF YOUR MAPS SECTION 

$(document).ready(function () {

  function createMapList() {
    const $yourMaps = $("<section>").attr("id", "your-maps");
    const $orderedList = $("<ol>").appendTo($yourMaps);
    const $list = $("<li>").appendTo($orderedList);
    const $map = $("<button>").addClass("btn btn-primary mx-auto").appendTo($list);
    const $lineBreak = $("<br>").appendTo($yourMaps);

    return $;
  }

  // add new map you created

  function renderlist(tweets) {
    tweets.forEach(function (element) {
      var result = createMapList(element);
      $('#your-maps').prepend(result)

    })
  }
});