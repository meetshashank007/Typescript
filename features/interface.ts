//case problem

const oldCivic = {
  name: 'civic',
  make: 2000,
  year: new Date(),
  broken: true,
  summary() {
    return `Name ${this.name}`;
  },
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
  make: number;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: IVehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
