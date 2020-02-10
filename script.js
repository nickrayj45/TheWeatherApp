// Going to need the weather API Key
var lat; var lon;

var APIKey = "fea808ff5dc02267acae44912e35ab54";

$("#btn").on("click", function () {
  cityName = $("#inputField").val();

  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    APIKey + "&units=imperial";

  // var cityName = $("#inputField").on("click").val();
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

    $(".card-body").text(response);
    var nameOfCity = $("<h1>").text(response.city.name);
    $(".col-md-8").append(nameOfCity);
    var currentTemp = $("<h2>").text(response.list[0].main.temp);
    $("#currentTemp").append(currentTemp);
    var currentHumidity = $("<p>").text(response.list[0].main.humidity);
    $(".card-text").append(currentHumidity);

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
    }

    var uvIndex = $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
      // console.log(response.value)
      $("#uvIndex").text(response.value)
    })
  });
});

// Start to append the weather content to the main card

// // Going to need the weather API Key
// var APIKey = "fea808ff5dc02267acae44912e35ab54";
// // var currentDay = moment().format("MMM Do YY");
// var iconImg = $("#btn").on("click", function() {
//   cityName = $("#inputField").val();

//   // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

//   var queryURL =
//     "https://api.openweathermap.org/data/2.5/forecast?q=" +
//     cityName +
//     "&appid=" +
//     APIKey;

//   // var cityName = $("#inputField").on("click").val();
//   var cityName = $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {

//     $(".card-body").text(response);
//     var nameOfCity = $("<h1>").text(response.city.name);
//     $(".col-md-8").append(nameOfCity);
//     var currentTemp = $("<p>").text(response.list[0].main.temp);

//     $("#card-w-75").append(currentTemp);
//     var currentHumidity = $("<p>").text(response.list[0].main.humidity);
//     $(".row4").append(currentHumidity);
//     var windSpeed = $("<h5>").text(response.wind.speed);
//     $("#windspeed").append(windSpeed);

//    
//   });
// });

// // UV Index query url
// var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}"
