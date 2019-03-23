//Creates request var
let forecastRequest = new XMLHttpRequest();

//sets up json save point
let apiURLstringForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=c4b5a8eceab72363b7bd99ad33194026";

//sends the link request
forecastRequest.open('GET', apiURLstringForecast, true);
forecastRequest.send();

//waits for reply, then begins function
forecastRequest.onload = function(){
    //parses the json into workable string
    let forecastData = JSON.parse(forecastRequest.responseText);
    //console.log(forecastData);
    
    for (var i = 0, t = 1; i < forecastData.list.length; i++){
        forecastData.list[i].dt_txt.includes("18:00:00");
        if (true){
            var today = new Date();
            var foreDay = today.getDay() + t;
            if (foreDay > 6){
                foreDay = foreDay - 7;
            }
            switch (foreDay){
                case 0: 
                    foreDay = "Sunday";
                    break;
                case 1: 
                    foreDay = "Monday";
                    break;
                case 2: 
                    foreDay = "Tuesday";
                    break;
                case 3: 
                    foreDay = "Wednesday";
                    break;
                case 4: 
                    foreDay = "Thursday";
                    break;
                case 5: 
                    foreDay = "Friday";
                    break;
                case 6: 
                    foreDay = "Saturday";
                    break;
                default:
                    foreDay = "";
                    break;
            }
            document.getElementById('day'+t).innerHTML = foreDay;
            
            let icon = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";            
            document.getElementById('temp' + t).innerHTML = forecastData.list[i].main.temp;
            document.getElementById('img' + t).setAttribute('src', icon);
            document.getElementById('img' + t).setAttribute('alt', forecastData.list[i].weather[0].description);
            t++;
        }
        else{}
        
    }
}
