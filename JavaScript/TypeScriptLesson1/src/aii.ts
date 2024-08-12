// abstract cannot have instance
// abstract parent can have abstract and concrete properties

// interface can have instance
// interface define blueprint
// interface allow a child to have many parents (flexible)

export {};
// Abstract Class
abstract class Vehicle {
    // Concrete property
    public fuel: number;

    constructor(fuel: number) {
        this.fuel = fuel;
    }

    // Abstract methods - must be implemented by derived classes
    abstract startEngine(): void;
    abstract stopEngine(): void;

    // Concrete method
    refuel(amount: number): void {
        this.fuel += amount;
        console.log(`Refueled with ${amount} liters. Total fuel: ${this.fuel} liters.`);
    }
}

// Interface for electric-powered vehicles
interface ElectricVehicle {
    chargeBattery(percentage: number): void;
    checkBatteryLevel(): number;
}

// Interface for hybrid vehicles
interface HybridVehicle extends ElectricVehicle {
    switchToElectricMode(): void;
    switchToFuelMode(): void;
}

// Concrete class that extends the abstract class and implements the interface
class Tesla extends Vehicle implements ElectricVehicle {
    private batteryLevel: number;

    constructor(fuel: number, batteryLevel: number) {
        super(fuel);
        this.batteryLevel = batteryLevel;
    }

    startEngine(): void {
        console.log("Tesla engine started.");
    }

    stopEngine(): void {
        console.log("Tesla engine stopped.");
    }

    chargeBattery(percentage: number): void {
        this.batteryLevel += percentage;
        console.log(`Battery charged by ${percentage}%. Current level: ${this.batteryLevel}%.`);
    }

    checkBatteryLevel(): number {
        console.log(`Battery level: ${this.batteryLevel}%`);
        return this.batteryLevel;
    }
}

// Concrete class that extends the abstract class and implements the hybrid interface
class Prius extends Vehicle implements HybridVehicle {
    private batteryLevel: number;
    private isElectricMode: boolean;

    constructor(fuel: number, batteryLevel: number) {
        super(fuel);
        this.batteryLevel = batteryLevel;
        this.isElectricMode = false;
    }

    startEngine(): void {
        console.log("Prius engine started.");
    }

    stopEngine(): void {
        console.log("Prius engine stopped.");
    }

    chargeBattery(percentage: number): void {
        this.batteryLevel += percentage;
        console.log(`Battery charged by ${percentage}%. Current level: ${this.batteryLevel}%.`);
    }

    checkBatteryLevel(): number {
        console.log(`Battery level: ${this.batteryLevel}%`);
        return this.batteryLevel;
    }

    switchToElectricMode(): void {
        this.isElectricMode = true;
        console.log("Switched to electric mode.");
    }

    switchToFuelMode(): void {
        this.isElectricMode = false;
        console.log("Switched to fuel mode.");
    }
}

// Usage examples
const myTesla = new Tesla(50, 80);
myTesla.startEngine();
myTesla.chargeBattery(10);
myTesla.refuel(20);
myTesla.checkBatteryLevel();
myTesla.stopEngine();

const myPrius = new Prius(40, 60);
myPrius.startEngine();
myPrius.switchToElectricMode();
myPrius.chargeBattery(15);
myPrius.switchToFuelMode();
myPrius.refuel(10);
myPrius.checkBatteryLevel();
myPrius.stopEngine();
