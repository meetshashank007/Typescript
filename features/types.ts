const today = new Date();

today.getMonth();

const person = {
  age: 20,
};
//ts auto detect the type of age as number here //type inference

class Color {}

//ts auto detects the type of red as Color
//means red has accesss to property and method of Color //type inference
const red = new Color();
