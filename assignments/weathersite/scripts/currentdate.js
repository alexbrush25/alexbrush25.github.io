
    var today = new Date();

    var dayOfWeek = today.getDay();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();


    switch (dayOfWeek){
        case 0: 
            dayOfWeek = "Sunday,";
            break;
        case 1: 
            dayOfWeek = "Monday,";
            break;
        case 2: 
            dayOfWeek = "Tuesday,";
            break;
        case 3: 
            dayOfWeek = "Wednesday,";
            break;
        case 4: 
            dayOfWeek = "Thursday,";
            break;
        case 5: 
            dayOfWeek = "Friday,";
            break;
        case 6: 
            dayOfWeek = "Saturday,";
            break;
        default:
            dayOfWeek = "";
            break;
    }

    switch (month){
        case 1:
            month = "January";
            break;
        case 2: 
            month = "February";
            break;
        case 3: 
            month = "March";
            break;
        case 4: 
            month = "April";
            break;
        case 5: 
            month = "May";
            break;
        case 6: 
            month = "June";
            break;
        case 7: 
            month = "July";
            break;
        case 8: 
            month = "August";
            break;
        case 9: 
            month = "September";
            break;
        case 10: 
            month = "October";
            break;
        case 11: 
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            break;
    }
    var dateFormated = dayOfWeek + " " + day + " " + month + " " + year;

    document.getElementById("date").innerHTML = dateFormated;
