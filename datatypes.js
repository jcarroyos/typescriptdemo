"use strict";
let lname = "Juan";
let newname = lname.toUpperCase();
console.log(newname);
let age = "30";
let result = parseInt(age);
console.log(result);
let isValid = false;
console.log(isValid);
let emptyList = [];
emptyList = ["one", "two", "three"];
let numList = [1, 2, 3, 4];
//let results = numList.filter((num) => num > 2);
let results = numList.find((num) => num > 2);
console.log(results);
let c = 2 /* Color.Blue */;
console.log(c);
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
console.log(swapNumbs[0]);
let department = "Software";
