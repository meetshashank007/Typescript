const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//normal array where order can be swapwed
// const pepsi = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown';

//TUPLES
const pepsi: [string, boolean, number] = ['brown', true, 40];

//annotation preserve the structure
pepsi[0] = 40;
pepsi[2] = 'brown';

//Type alias
type Drink = [string, boolean, number];

const maza: Drink = ['yellow', false, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 30];

//Drawback of tuples
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
