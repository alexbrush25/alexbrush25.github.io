//Creates request var
let templeRequest = new XMLHttpRequest();

//sets up json save point
let templeURLstring = "https://alexbrush25.github.io/assignments/finaltermsite/scripts/jsons/temple.json";

//sends the link request
templeRequest.open('GET', templeURLstring, true);
templeRequest.send();

//waits for reply, then begins function
templeRequest.onload = function(){
    //parses the json into workable string
    let templeData = JSON.parse(templeRequest.responseText);
    //console.log(templeData);


    for (var t = 0; t < templeData.temples.length; t++){
        var templesList;
        switch (t){
            case 0: 
                templesList = document.querySelector('.closedone');
                break;
            case 1: 
                templesList = document.querySelector('.closedtwo');
                break;
            case 2:
                templesList = document.querySelector('.closedthree');
                break;
            case 3:
                templesList = document.querySelector('.closedfour');
                break;
            default:
                break;
        }

        for (var i = 0; i < templeData.temples[t].closed.length; i++){
            var templeList = document.createElement('li');
            templeList.textContent = templeData.temples[t].closed[i];
            templesList.appendChild(templeList);
        }
        if (templeData.temples[t].closed.length == 0){
            var templeList = document.createElement('li');
            templeList.textContent = "No closures this year.";
            templesList.appendChild(templeList);
        }
    }
}