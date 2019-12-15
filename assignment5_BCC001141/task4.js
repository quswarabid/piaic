var radius = 4;
console.log("radius = " + radius);
console.log("Circumference of a circle of radius " + radius + " is " + calcCircumference(radius));
console.log("Area of a circle of radius " + radius + " is " + calcArea(radius));

console.log("");
console.log("");
console.log("");



var newRad = prompt("Please enter a radius:");

calcCircumference(newRad);
calcArea(newRad);

function calcCircumference(rad){
    var circumference = 2 * 3.14159 * rad;
    console.log("The circumference is " + circumference);
    return circumference;
}

function calcArea(rad){
    var area = 3.14159 * Math.pow(rad,2);
    console.log("The area is " + area);
    return area;
}