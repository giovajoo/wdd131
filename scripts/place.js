var currentyear = new Date().getFullYear();

var lastModifiedDate = document.lastModified;

document.getElementById('currentyear').textContent = currentyear;
document.getElementById('lastModified').textContent = 'Last Modification: ' + lastModifiedDate;



const temperatureCelsius = 18; 
const windSpeedKmph = 15;


function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}


function updateWindChill() {
    const windChillCelsius = calculateWindChill(temperatureCelsius, windSpeedKmph);
    const windChillElement = document.querySelector('.weather-content .value:nth-child(8)');
    windChillElement.textContent = `${windChillCelsius.toFixed(1)}°C`; 
}


window.onload = function() {
    updateWindChill();
};