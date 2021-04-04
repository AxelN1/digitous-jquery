$(document).ready(function() {

    // $.ajax({
    //     url : "https://restcountries.eu/rest/v2/name/france",
    //     type : "GET"
    // })

    $("button").click(function() {

        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function(data, statuts, response) {
                console.log(data[0].name);
                console.log(data[0].capital);

            }

        });

    });

});