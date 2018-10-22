$(document).ready(function () {
  
  function getContent(users) {
    $.ajax('/api/users')
      .then((users) => {
        console.log(users, "users")
        for (user of users) {
          $("<section>").text(user.name).appendTo($("body"));
          console.log('user', user)
        }
      });
  };


  $('button#create-map').on("click", function (e) {
    e.preventDefault();
    let input = $('#new-map').val()
    createMapList(input)
  });

  function createMapList(data) {
    const $numberItem = $("<li>")
    const $listItem = $("<button>").addClass("btn btn-primary mx-auto").text(data);
    $('.customList').append($numberItem, $listItem)

  }
});
