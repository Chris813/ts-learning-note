class Vehicle {
    constructor(public color: string) {}
  
    protected honk(): void {
      console.log('beep');
    }
    private beep(): void {
        console.log('beep');
      }
  }
  
  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);
  
  class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
      super(color);
    }
  
    private drive(): void {
      console.log('vroom');
    }
  
    startDrivingProcess(): void {
      this.drive();
      this.honk();
    }
  }

const newcar:Car = new Car(4, 'red');
newcar.startDrivingProcess();
