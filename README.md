# wtw
Application that suggests outfits based on local weather forecasts.

This app is intended to eventually be used as an Alexa skill via voice commands. The tool will call a weather API for local weather data at fixed times (8:00am, 12:00pm, 6:00pm) and recommend an outfit based on a set of hardcoded rules.

In the future, I would like to store the rules and wardrobe in a separate database. This will be the first step to allowing UI-based personalization.

Tools used:
* Dark Sky API (https://darksky.net/dev/)
* Alexa Skills Kit (https://developer.amazon.com/alexa-skills-kit)
