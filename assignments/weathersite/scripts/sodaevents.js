//Creates request var
let eventsRequest = new XMLHttpRequest();

//sets up json save point
let eventURLstring = "https://byui-cit230.github.io/weather/data/towndata.json";

//sends the link request
eventsRequest.open('GET', eventURLstring, true);
eventsRequest.send();

//waits for reply, then begins function
eventsRequest.onload = function(){
    //parses the json into workable string
    let eventData = JSON.parse(eventsRequest.responseText);
    console.log(eventData);

    var eventsList = document.querySelector('article');

    for (var i = 0; i < eventData.towns[5].events.length; i++){
        var eventList = document.createElement('li');
        eventList.textContent = eventData.towns[5].events[i];
        eventsList.appendChild(eventList);
    }
    if (eventData.towns[5].events.length == 0){
        var eventList = document.createElement('li');
        eventList.textContent = "No upcoming events announced yet. Check again tomorrow!";
        eventsList.appendChild(eventList);
    }

}