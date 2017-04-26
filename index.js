// require request package for http calls
var request = require('request');


request("https://api.darksky.net/forecast/97e29242ad32d4fb278063ed32204618/40.7360,-73.9904?exclude=['currently','minutely','daily','alerts','flags']",
function(error, response, data) {
  var answer = JSON.parse(data);

  var morningHour = 8;
  var afternoonHour = 12;
  var eveningHour = 18;
  var currentHour = new Date().getHours();

  var morningData = answer.hourly.data[morningHour - Math.ceil(currentHour)];
  var afternoonData = answer.hourly.data[afternoonHour - Math.ceil(currentHour)];
  var eveningData = answer.hourly.data[eveningHour - Math.ceil(currentHour)];

  var result = weatherCheck(morningData, afternoonData, eveningData);

  console.log(result);
});

function weatherCheck(morning, afternoon, evening){
  // establish rules
  console.log(morning);
  if (morning.temperature <= 35 || afternoon.temperature <= 35 || evening.temperature <= 35) {
    return "Wear a parka.";
  }
  else if (morning.precipProbability >= .5 || afternoon.precipProbability >= .5 || evening.percipProbability >= .5) {
    return "Wear a rain jacket.";
  }
  else {
    if (morning.temperature <= 50 || afternoon.temperature <= 50 || evening.temperature <= 50) {
      return "Wear a bomber jacket.";
    }
    else if (morning.temperature >= 85 || afternoon.temperature >= 85 || evening.temperature >= 85) {
      return "Wear a light shirt";
    }
    else if (morning.temperature <= 65 || afternoon.temperature <= 65 || evening.temperature <= 65) {
      return "Wear a light jacket";
    }
    else {
      return "Just wear a button-up";
    }
  }
}
