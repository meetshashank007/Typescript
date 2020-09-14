const carMakers: string[] = ['ford', 'toyata', 'chevy'];
// const carMakers: string[] = [];
const dates = [new Date(), new Date()];

// const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake: string[][] = [];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatable values
carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  // return car;
  //has access to string property methods due to type inference
  return car.toUpperCase();
});
