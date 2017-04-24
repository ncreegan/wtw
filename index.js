// hardcode expected temperatures and rain
var morning = 28;
var morningRain = false;
var afternoon = 34;
var afternoonRain = false;
var evening = 30;
var eveningRain = true;

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
  else if (morning <= 65 || afternoon <= 65 || evening <= 65) {
    console.log("Wear a light jacket");
  }
  else {
    console.log("Just wear a button-up");
  }
};
