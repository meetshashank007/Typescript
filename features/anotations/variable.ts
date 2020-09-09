let apples: number = 5;
apples = 10;

//apples = '10'; throws error here bcz of anotations

let spped: string = 'fast';
//speed = 10; throws error

let hasName: boolean = true;

let nothingMuch: null = null; //value has name as type
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truts: boolean[] = [true, false, true];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// point = { z: 20, y: '10' }; shows the error as this value to object does not conside with the annotation

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
