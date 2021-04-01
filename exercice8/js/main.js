$(document).ready(function() {

    $(".btn btn-success").click(function(displaySecretText) {
        $("#text").css("display", "inherit")
    })

    displaySecretText();

})