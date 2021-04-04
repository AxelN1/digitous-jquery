$(document).ready(function () {

    $("button").click(function () {

        $("input").val(('https://restcountries.eu/rest/v2/name/') + (name))

        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/',
            success: function (data, statuts, response) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }

        });

    });

});