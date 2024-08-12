// pillars of oop: encapsulation, inheritance, polymorphism, abstraction, composition
// static, classes and instances, interfaces and implementation

// classes and instances
class Person1 {
    name: string; // default public
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`I am ${this.name}, ${this.age} years old`);
    }
}

const alice = new Person1("Alice", 20);
alice.greet();
alice.name = 'Alisa';
alice.age = 1000;
alice.greet();

// public, private, protected
class Coffee {
    public name: string;
    private strength: number;
    protected size: string;
    // constructor(public name: string, public strength: number, public size: string) {  // shortcut
    constructor(name: string, strength: number, size: string) {
        this.name = name;
        this.strength = strength;
        this.size = size;
    }
    public describe(): string {
        return `${this.name} is a ${this.size} coffee with a strength of ${this.getStrength()}.`;
    }
    private getStrength(): string {
        return `${this.strength}/10`;
    }
    protected brew(): string {
        return `Brewing a ${this.size} cup of ${this.name}.`;
    }
}

const myCoffee = new Coffee("Espresso", 8, "small");
console.log(myCoffee.describe()); // Accessible: public method
// console.log(myCoffee.getStrength()); // Error: private method, can't access outside the class
// console.log(myCoffee.brew()); // Error: protected method, can't access outside the class or a subclass

// inheritance
class Animal1 {
    // name: string;
    // age: number;
    constructor(public name: string, public age: number){}  // shortcut, no need initialize properties
    speak(): void{ console.log("Animal makes a sound"); }
    move(distance: number): void { console.log(`${this.name} animal moved ${distance}m.`); }
}

const animal = new Animal1("Dog", 5);
animal.speak();

class Dog extends Animal1 {
    constructor(name: string, age: number, public breed: string){
        super(name, age);
    }
    speak(){ console.log("Dog barks"); }
    move(distance: number){
        super.move(distance);
        console.log(`${this.name} dog moved ${distance}m.`);
    }
}

const dog = new Dog("Buddy", 2, "Golden Retriever");
dog.speak();
dog.move(10);

// encapsulation
class BankAccount {
    private balance: number;
    constructor(private accountNumber: string, initialBalance: number){
        this.balance = initialBalance;
    }
    deposit(amount: number): void{
        this.balance += amount;
        console.log(`Deposited $${amount}`);
    }
    withdraw(amount: number): void {
        if(this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }
    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("123", 1000);
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());
console.log(account.balance); // error: private is not accessible

// static member
class Calculator {
    static PI: number = 3.14;
    static add(a: number, b: number): number{ return a + b; }
    static subtract(a: number, b: number): number{ return a - b; }
}
console.log(Calculator.PI);
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));

// interfaces with classes
interface Drivable{
    drive(): void;
}

class Car1 implements Drivable {
    constructor(public make: string, public model: string, public year: number){};
    drive(): void {
        console.log(`${this.make} ${this.model} ${this.year} car is driven`);
    }
}

const toyota = new Car1("Toyota", "Camry", 2020);
toyota.drive();

class Truck implements Drivable {
    constructor(public make: string, public model: string, public year: number){};
    drive(): void {
        console.log(`${this.make} ${this.model} ${this.year} truck is driven`);
    }
}
const truck = new Truck("Ford", "F-150", 2021);
truck.drive();

// abstraction
abstract class Rocket {
    constructor(public watt: number){}
    abstract mode1(): number;
    abstract mode2(): number;
    describe(): void { console.log(`Rocket modes: mode1 = ${this.mode1()}, mode2 = ${this.mode2()}`); }
}

class ModelZero extends Rocket {
    constructor(public watt: number, public volt: number){ super(watt); }
    mode1(): number { return 2 * this.volt; }
    mode2(): number { return 3 * this.volt; }
}

class ModelOne extends Rocket {
    constructor(public watt: number, public ampere: number){ super(watt); }
    mode1(): number { return 4 * this.ampere; }
    mode2(): number { return 5 * this.ampere; }
}

const rockets: Rocket[] = [
    new ModelZero(1000, 500),
    new ModelOne(2000, 5000),
];

rockets.forEach(r => {
    console.log(r.mode1());
    console.log(r.mode2());
    r.describe();
});