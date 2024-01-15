function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(10, 20));

const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(10, 20));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d", "e"]);
