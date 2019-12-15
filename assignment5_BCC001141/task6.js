// var array = [1, 2, 3, 4, 5];
// console.log(array + " ---> " + getMirror(array));

var size = prompt("Enter the size of array you want mirrored:");
var array = new Array(size);
for (var i=0; i<size; i++){
    array[i] = prompt("Please enter the member#" + parseInt(i+1) + " of the array: ");
}

console.log(array + " ---> " + getMirror(array));

function getMirror(array){
    var lengthOfArray = array.length;
    var newArray = new Array(2*lengthOfArray);
    var lengthOfNewArray = newArray.length;

    // console.log(lengthOfArray);
    // console.log(lengthOfNewArray);
    

    for (var i=0; i<lengthOfArray; i++){
        newArray[i] = array[i];
    }
    // console.log(newArray);

    
    for (var i=0; i<lengthOfArray; i++){
        newArray[lengthOfArray+i] = array[lengthOfArray-i-1];
    }
    // console.log(newArray);
    
    // for (var i=lengthOfNewArray; i>lengthOfArray; i--){
    //     newArray[i] = array[i];
    // }
    
    return newArray;
}