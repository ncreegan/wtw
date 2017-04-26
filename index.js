// hardcode expected temperatures and rain
var morning = 66;
var morningRain = false;
var afternoon = 70;
var afternoonRain = false;
var evening = 84;
var eveningRain = false;

// require request package for http calls
var request = require('request');


request("https://api.darksky.net/forecast/97e29242ad32d4fb278063ed32204618/37.8267,-122.4233?exclude=['currently','minutely','daily','alerts','flags']",
function(error, response, data) {
  var response = JSON.parse(data);

  var MORNING_HOUR = 9;
  var AFTERNOON_HOUR = 12;
  var EVENING_HOUR = 15;

  var curHour = new Date().getHours();
  console.log(curHour);

  var morningData = response.hourly.data[MORNING_HOUR - Math.ceil(curHour)];
  var afternoonData = response.hourly.data[AFTERNOON_HOUR - Math.ceil(curHour)];
  var eveningData = response.hourly.data[EVENING_HOUR - Math.ceil(curHour)];


  var result = checkTemperature(morningData, afternoonData, eveningData);

  var precip = checkPrecipitation(morningData, ...);

  console.log(result);
});




function checkTemperature(morning, afternoon, evening) {

  // establish rules
  if (morning.temperature <= 35 || afternoon <= 35 || evening <= 35) {
    return "Wear a parka.";
  }
  else if(morning.precipProbability >= 0.5 || afternoon.precipProbability >= 0.5 || evening.precipProbability >= 0.5) {
  //else if (morningRain == true || afternoonRain == true || eveningRain == true) {
    console.log("Wear a rain jacket.");
  }
  else {
    if (morning <= 50 || afternoon <= 50 || evening <= 50) {
      console.log("Wear a bomber jacket.");
    }
    else if (morning >= 85 || afternoon >= 85 || evening >= 85) {
      console.log("Wear a light shirt");
    }
    else if (morning <= 65 || afternoon <= 65 || evening <= 65) {
      console.log("Wear a light jacket");
    }
    else {
      console.log("Just wear a nothing");
    }
  }
}
