let high = parseInt(document.getElementById('high').innerHTML);
let windSpeed = parseInt(document.getElementById('windspeed').innerHTML);

let windChill = 35.74 + (0.6215 * high) - (35.74 * (Math.pow(windSpeed, 0.16))) + (0.4275 * high) * (Math.pow(windSpeed, 0.16));

document.getElementById('windchill').innerHTML = windChill.toFixed(0);