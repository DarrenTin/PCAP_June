export {};

interface Drivable{
    startEngine(): void;
    drive(): void;
    stopEngine(): void;
}

class Car2 implements Drivable {
    constructor(public make: string, public model: string){};
    startEngine(): void {
        console.log(`${this.make} ${this.model} car is started`);
    }
    drive(): void {
        console.log(`${this.make} ${this.model} car is driven`);
    }
    stopEngine(): void {
        console.log(`${this.make} ${this.model} car is stopped`);
    }
}

class Truck1 implements Drivable {
    constructor(public make: string, public year: number){};
    startEngine(): void {
        console.log(`${this.make} ${this.year} truck is started`);
    }
    drive(): void {
        console.log(`${this.make} ${this.year} truck is driven`);
    }
    stopEngine(): void {
        console.log(`${this.make} ${this.year} truck is stopped`);
    }
}

const myCar = new Car2("Nissan", "Cefiro");
const myTruck = new Truck1("Ford", 5);
const vehicles: Drivable[] = [myCar, myTruck];

vehicles.forEach(v => {
    console.log(v.constructor.name);
    v.startEngine();
    v.drive();
    v.stopEngine();
});