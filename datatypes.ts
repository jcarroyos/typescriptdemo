let lname: string = "Juan";
let newname = lname.toUpperCase();
console.log(newname);
let age = "30";
let result = parseInt(age);
console.log(result);
let isValid: boolean = false;
console.log(isValid);
let emptyList: string[] = [];
emptyList = ["one", "two", "three"];
let numList: number[] = [1, 2, 3, 4];
//let results = numList.filter((num) => num > 2);
let results = numList.find((num) => num > 2);
console.log(results);
const enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
console.log(c);

let swapNumbs: [number, number];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
console.log(swapNumbs[0]);

let department: any = "Software";
