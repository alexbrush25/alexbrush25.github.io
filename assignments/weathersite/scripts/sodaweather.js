//Creates request var
let weatherRequest = new XMLHttpRequest();

//sets up json save point
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=c4b5a8eceab72363b7bd99ad33194026";

//sends the link request
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

//waits for reply, then begins function
weatherRequest.onload = function(){
    //parses the json into workable string
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
    
    //takes temp reading from its location and applies it to the id
    document.getElementById('status').innerHTML = weatherData.weather[0].main;
    document.getElementById('high').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed;

    let high = parseInt(document.getElementById('high').innerHTML);
    let windSpeed = parseInt(document.getElementById('windspeed').innerHTML);
    let windChill = 35.74 + (0.6215 * high) - (35.74 * (Math.pow(windSpeed, 0.16))) + (0.4275 * high) * (Math.pow(windSpeed, 0.16));
    document.getElementById('windchill').innerHTML = windChill.toFixed(0);
}