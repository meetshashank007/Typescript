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

//wher to use annotations
// 1) Function that returns the 'any; type
const json = '{"x": 10, "y": 20}';

//issue
// const coordinates = JSON.parse(json);

//solution
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); // {x: 10, y: 20};

//Inference will through error in case of annotation
//coordinates.somePropertyThatDoesNotExist;

// 2) When we declare variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
// let foundWord;
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctely
let numbers = [-10, -1, -12];
// let numberAboveZero = false; //case infer the value for the below expression
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
