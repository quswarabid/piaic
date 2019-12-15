var cityName = "Hyderabad";
console.log(cityName);

var replacer = "Islam";
var replacee = "Hyder";

document.write("City: " + cityName);
document.write("<br>");

cityName = cityName.replace(replacee, replacer);
console.log(cityName);

document.write("After replacement: " + cityName);
document.write("<br>");

/*
var a = "To be or not to be";
console.log(a);
console.log(a.length);
var b = a.indexOf(" not");
console.log(b);
var c = a.replace(/be/g, "hello");
console.log(c);
var d = a.replace("be", "hello");
console.log(d);
var e = a.replace(/to/ig, "hello");
console.log(e);
*/

