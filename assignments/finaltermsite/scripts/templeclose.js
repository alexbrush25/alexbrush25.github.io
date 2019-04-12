//Creates request var
let templeRequest = new XMLHttpRequest();

//sets up json save point
let templeURLstring = "scripts/jsons/temple.json";

//sends the link request
templeRequest.open('GET', templeURLstring, true);
templeRequest.send();

//waits for reply, then begins function
templeRequest.onload = function(){
    //parses the json into workable string
    let templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);
/*
    var eventsList = document.querySelector('article');

    for (var i = 0; i < eventData.towns[4].events.length; i++){
        var eventList = document.createElement('li');
        eventList.textContent = eventData.towns[4].events[i];
        eventsList.appendChild(eventList);
    }
    if (eventData.towns[4].events.length == 0){
        var eventList = document.createElement('li');
        eventList.textContent = "No upcoming events announced yet. Check again tomorrow!";
        eventsList.appendChild(eventList);
    }
*/
}