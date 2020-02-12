// Variables for latitude and longitude
var lat; var lon;

var FAHRENHEIT = "&#8457";

// API Key
var APIKey = "fea808ff5dc02267acae44912e35ab54";

$("#btn").on("click", function () {
  cityName = $("#inputField").val();

  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    APIKey + "&units=imperial";

  //  AJAX Call to get the weather 
  var cityName = $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    lat = response.city.coord.lat;
    lon = response.city.coord.lon;
    console.log("lat:", lat, "lon:", lon)
    var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid=" +

      APIKey + "&lat=" + lat + "&lon=" + lon;
    // Appending weather info to the page
    $("#city").text(response);
    var nameOfCity = $("<h1>").text(response.city.name);
    $(".col-md-8").append(nameOfCity);
    localStorage.setItem(".col-md-8", nameOfCity)
    var currentTemp = $("<p>" + FAHRENHEIT).text(response.list[0].main.temp);
    $("#currentTemp").append(currentTemp);
    var windSpeed = $("<p>").text(response.list[0].wind.speed);
    $("#windSpeed").append(windSpeed);
    var currentHumidity = $("<p>").text(response.list[0].main.humidity);
    $("#card-text").append(currentHumidity);

    var iconCode = response.list[0].weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    // console.log(iconUrl);


    $(".icon").attr("src", iconUrl);
    // For loop/if statement for 5 day forecast
    for (i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.includes("06:00:00")) {
        var fiveDayTemp = response.list[i].main.temp
        var fiveDayHumidity = response.list[i].main.humidity


      }
      // appending here for 5 day forecast
      $("#fiveDayTemp").text(response.list[i].main.temp);
      var fiveDayTemp = $("<p>").append(fiveDayTemp)
      $("#fiveDayHumidity").text(response.list[i].main.humidity)
      var fiveDayHumidity = response.list[i].main.humidity;
    }
    // UV Index AJAX Call
    var uvIndex = $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
      // console.log(response.value)
      $("#uvIndex").text(response.value)
    })
  });
});

