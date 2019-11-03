//decalre and initialize
var temperature_celcius = 25;
var temperature_farenheit = 70;

//convert into each other
var temperature_f2c = (temperature_farenheit - 32) * (5/9);
var temperature_c2f = (temperature_celcius * (9/5)) + 32;

//display
document.write(temperature_celcius + "&#176C is " + temperature_c2f + "&#176F.<br>");
document.write(temperature_farenheit + "&#176F is " + temperature_f2c + "&#176C.<br>");

document.write("<br>");