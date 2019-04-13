//looped
for (var i=0, j=1, k=""; i < 4; i++){

    switch (i){
        case 0:
            k = "5780993";
            break;
        case 1:
            k = "4317656";
            break;
        case 2:
            k = "2925192";
            break;
        case 3:
            k = "2128295";
            break;
        default:
            k = "5780993";
            break;
    }

    let weatherRequest = new XMLHttpRequest();

    let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=" + k + "&units=imperial&APPID=c4b5a8eceab72363b7bd99ad33194026";

//sends the link request
    weatherRequest.open('GET', apiURLstring, true);
    weatherRequest.send();

//waits for reply, then begins function
    weatherRequest.onload = function(){
    //parses the json into workable string
        let weatherData = JSON.parse(weatherRequest.responseText);
        //console.log(weatherData);
    
    //takes temp reading from its location and applies it to the id
        document.getElementById('high' + j).innerHTML = weatherData.main.temp_max;
        document.getElementById('low' + j).innerHTML = weatherData.main.temp_min;

        let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
        document.getElementById('img' + j).setAttribute('src', icon);
        document.getElementById('img' + j).setAttribute('alt', weatherData.weather[0].description);
        
        j++;
    
    }
}