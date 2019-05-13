var database = firebase.database();

$("#submint").on("click", function (event) {
    event.preventDefault();

    var firstName = $("#first").val().trim();
    var lastName = $("#last").val().trim();
    var email = $("#exampleFormControlInput1").val().trim();
    var message = $("#exampleFormControlTextarea1").val().trim();

    database.ref().push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
    });

    $("#first").val("");
    $("#last").val("");
    $("#exampleFormControlInput1").val("");
    $("#exampleFormControlTextarea1").val("");
});

