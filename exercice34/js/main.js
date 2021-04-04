$(document).ready(function () {
    
    $("button").click(function () {
        
        var country = $("input").val();

        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/' + country,
            success: function (data, statuts, response) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }

        });

    });
    
});