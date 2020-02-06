$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newBurgerName")
        .val()
        .trim(),
      devoured: 0
      //   $("#newBurgerName").attr("devoured")
      //   $("#newBurgerName").data("devoured")
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(function() {
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("burgerid");
      console.log("burgerId", id);
      var newDevoured = $(this).data("devoured");

      var newDevouredState = {
        devoured: newDevoured
      };

      // Send the PUT request.
      console.log("/api/burgers/" + id);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
});
