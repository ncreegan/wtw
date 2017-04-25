// require request package for http calls
var request = require('request');

// hardcode expected temperatures and rain
var morning = 66;
var morningRain = false;
var afternoon =70;
var afternoonRain = false;
var evening = 84;
var eveningRain = false;

// establish rules
if (morning <= 35 || afternoon <= 35 || evening <= 35) {
  console.log("Wear a parka.");
}
else if (morningRain == true || afternoonRain == true || eveningRain == true) {
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
    console.log("Just wear a button-up");
  }
};
