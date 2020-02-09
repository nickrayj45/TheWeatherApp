// Going to need the weather API Key
var APIKey = "fea808ff5dc02267acae44912e35ab54";

$("#btn").on("click", function() {
  cityName = $("#inputField").val();

  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    APIKey;

  // var cityName = $("#inputField").on("click").val();
  var cityName = $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#cityInfo").text(response);
    var nameOfCity = $("<h1>").text(response.name);
    $(".col-md-8").append(nameOfCity);
    var currentTemp = $("<h2>").text(response.main[0]);
    $(".col-md-2").append(currentTemp);
    var currentHumidity = $("<h2>").text(response.main[5]);
    $(".col-md-2").append(currentHumidity);
  });
});

// Start to append the weather content to the main card
