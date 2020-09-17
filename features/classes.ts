class Vehicle {
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }

  //shorthand
  constructor(public color: string) {}

  //modfifires in action
  //   drive(): void {
  //     console.log('chugga chugga');
  //   }
  //   honk(): void {
  //     console.log('beep');
  //   }
  protected honk(): void {
    console.log('beep');
  }
}

/*
class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();

// vehicle.drive();
// vehicle.honk();

const car = new Car();
// car.drive();
// car.honk();

car.startDrivingProcess();
*/

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();

// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'red');
car.startDrivingProcess();
