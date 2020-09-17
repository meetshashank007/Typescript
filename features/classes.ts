class Vehicle {
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
