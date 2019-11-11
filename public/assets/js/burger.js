
$(".create-burger-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Send the POST request.
    createNewBurger();
});
$(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");

    var burgerChanged = {
        devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/devour/" + id, {
        type: "PUT",
        data: burgerChanged
    }).then(
        function () {
            console.log("changed to devoured ", burgerChanged);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

createNewBurger = function () {
    var newBurger = {
        burger_name: $("#new-burger-input").val().trim(),
        devoured: 0
    };
    $.post("/api/newburger", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Created New Burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
}