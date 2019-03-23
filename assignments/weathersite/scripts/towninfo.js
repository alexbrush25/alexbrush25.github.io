        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var request = new XMLHttpRequest();

        var sectionFish = document.querySelector('sectionfish');
        var sectionPreston = document.querySelector('sectionpreston');
        var sectionSoda = document.querySelector('sectionsoda');

        request.open('GET' , requestURL);
        
        request.responseType = 'json';
        request.send();
        
        request.onload = function(){
            var townList = request.response;
            townFill(townList);
        }

        function townFill(jsonObj){
            var towns = jsonObj['towns'];
            //loop through towns
            for(var i = 0; i < towns.length; i++){
                //find towns I need
                if (towns[i].name == "Fish Haven" || "Preston" || "Soda Springs"){
                    //take info from towns I need
                    var myH2 = document.createElement('h2');
                    var myPara1 = document.createElement('p');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');
                    var myPara4 = document.createElement('p');

                    myH2.textContent = towns[i].name;
                    myPara1.textContent = towns[i].motto;
                    myPara2.textContent = "Year Founded: " + towns[i].yearFounded;
                    myPara3.textContent = "Population: " + towns[i].currentPopulation;
                    myPara4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall + '"';
                    
                    if(towns[i].name == "Fish Haven"){
                        sectionFish.appendChild(myH2);
                        sectionFish.appendChild(myPara1);
                        sectionFish.appendChild(myPara2);
                        sectionFish.appendChild(myPara3);
                        sectionFish.appendChild(myPara4);
                    }
                    else if(towns[i].name == "Preston"){
                        sectionPreston.appendChild(myH2);
                        sectionPreston.appendChild(myPara1);
                        sectionPreston.appendChild(myPara2);
                        sectionPreston.appendChild(myPara3);
                        sectionPreston.appendChild(myPara4);
                    }
                    else if(towns[i].name == "Soda Springs"){
                        sectionSoda.appendChild(myH2);
                        sectionSoda.appendChild(myPara1);
                        sectionSoda.appendChild(myPara2);
                        sectionSoda.appendChild(myPara3);
                        sectionSoda.appendChild(myPara4);
                    }
                    else{}
                }
                //ignore rest
                else{}
            }
            
        }