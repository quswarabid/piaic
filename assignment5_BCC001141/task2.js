var width = prompt("Please enter the width of rectangle:");
var height = prompt("Please enter the height of rectangle:");

var area = calculateAreaByValue(width, height);

var area2 = {area: "", width: "", height:""};
area2.width = width;
area2.height = height;
area2.area = calculateAreaByVariable(area2);


alert("1. The area of rectangle is: " + area);

alert("2. The area of rectangle is: " + area2.area);


function calculateAreaByValue(width, height){
    return width*height;
}

function calculateAreaByVariable(someObj){
    return someObj.width*someObj.height;
}

console.log("User entered the width = " + width);
console.log("User entered the height = " + height);
console.log("Pass by value returned = " + area);
console.log("Pass by Variable returned = " + area2.area);
// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("");
