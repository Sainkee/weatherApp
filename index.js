var cityName = $("#inputText");
var subBtn = $("#submitbtn");
var cityOutput = $("#cityOutput");
var description = $("#description");
var wind = $("#wind");
var temp = $("#temp");

const apiKey = "496e5a8b10b1886fc66b1a0064adcb63";

subBtn.click(function() {
  var city = cityName.val();
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Update the DOM with weather data
      
      cityOutput.text(data.name);
      description.text(data.weather[0].description);
      var windSpeedMetersPerSecond = data.wind.speed;
      var windSpeedKilometersPerHour = (windSpeedMetersPerSecond * 3.6).toFixed(2);
      wind.text(`Wind Speed: ${windSpeedKilometersPerHour} km/h`);
      var degree = (data.main.temp -276.15).toFixed(2);
      temp.text(`Temperature: ${degree} C`);
    })
    .catch((error) => {
      console.log(error);
    });
});
