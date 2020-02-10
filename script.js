// Going to need the weather API Key
var APIKey = "fea808ff5dc02267acae44912e35ab54";

$("#btn").on("click", function() {
  cityName = $("#inputField").val();

  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    APIKey;

  // var cityName = $("#inputField").on("click").val();
  var cityName = $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $(".card-body").text(response);
    var nameOfCity = $("<h1>").text(response.city.name);
    $(".col-md-8").append(nameOfCity);
    var currentTemp = $("<h2>").text(response.list[0].main.temp);
    $("#currentTemp").append(currentTemp);
    var currentHumidity = $("<p>").text(response.list[0].main.humidity);
    $(".card-text").append(currentHumidity);
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

//     // var iconCode = response.weather[0].icon;
//     // var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
//     // console.log(iconUrl);

//     // $(".icon").attr("src", iconUrl);
//   });
// });

// // UV Index query url
// var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}"
