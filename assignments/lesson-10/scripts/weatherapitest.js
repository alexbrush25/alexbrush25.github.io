//Creates request var
let weatherRequest = new XMLHttpRequest();

//sets up json save point
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c4b5a8eceab72363b7bd99ad33194026";

//sends the link request
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

//waits for reply, then begins function
weatherRequest.onload = function(){
    //parses the json into workable string
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
    
    //takes temp reading from its location and applies it to the id
    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;

    //collectes imag from site by reading array
    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    //collects description for image alt
    let desc = weatherData.weather[0].description;

    //sets image attributes that were collected above.
    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);
}