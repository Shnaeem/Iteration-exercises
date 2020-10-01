//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings

let numbers = [1, 2, 3, 4, 5];
function convertToString(arr) {
let fred = arr.map(String);
return fred;
}
console.log(convertToString(numbers))


//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

let numbers = [1,2,3,4];
function doublevalues(arr){
    let newarray = [];
    arr.forEach( function(value){ newarray.push(value*2);});
  	return newarray;
}

console.log(doublevalues([1,2,3,4]));


function acceptArrayDouble (num){
    let google = num.forEach(element => console.log(element * 2))
    return google;
}

acceptArrayDouble(numbers);



//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

let array1 = ['winning', 'tomato'];
let result=[];
array1.forEach(function(currentString) {
    result.push(currentString.charAt(0) + currentString.charAt(currentString.length - 1)); //First + Last character
});
console.log(result);


for (let i = 1 ; i < 5 ; i++){
    for (let p = 0; p < 3 ; p++){
        console.log(i);
    }
}