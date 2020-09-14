//case problem

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

/*
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};
*/

//solution

interface IVehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle = (vehicle: IVehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);
