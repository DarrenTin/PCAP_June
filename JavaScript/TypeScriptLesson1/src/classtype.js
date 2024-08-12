// pillars of oop: encapsulation, inheritance, polymorphism, abstraction, composition
// static, classes and instances, interfaces and implementation
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes and instances
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.greet = function () {
        console.log("I am ".concat(this.name, ", ").concat(this.age, " years old"));
    };
    return Person1;
}());
var alice = new Person1("Alice", 20);
alice.greet();
alice.name = 'Alisa';
alice.age = 1000;
alice.greet();
// public, private, protected
var Coffee = /** @class */ (function () {
    // constructor(public name: string, public strength: number, public size: string) {  // shortcut
    function Coffee(name, strength, size) {
        this.name = name;
        this.strength = strength;
        this.size = size;
    }
    Coffee.prototype.describe = function () {
        return "".concat(this.name, " is a ").concat(this.size, " coffee with a strength of ").concat(this.getStrength(), ".");
    };
    Coffee.prototype.getStrength = function () {
        return "".concat(this.strength, "/10");
    };
    Coffee.prototype.brew = function () {
        return "Brewing a ".concat(this.size, " cup of ").concat(this.name, ".");
    };
    return Coffee;
}());
var myCoffee = new Coffee("Espresso", 8, "small");
console.log(myCoffee.describe()); // Accessible: public method
// console.log(myCoffee.getStrength()); // Error: private method, can't access outside the class
// console.log(myCoffee.brew()); // Error: protected method, can't access outside the class or a subclass
// inheritance
var Animal1 = /** @class */ (function () {
    // name: string;
    // age: number;
    function Animal1(name, age) {
        this.name = name;
        this.age = age;
    } // shortcut, no need initialize properties
    Animal1.prototype.speak = function () { console.log("Animal makes a sound"); };
    Animal1.prototype.move = function (distance) { console.log("".concat(this.name, " animal moved ").concat(distance, "m.")); };
    return Animal1;
}());
var animal = new Animal1("Dog", 5);
animal.speak();
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.speak = function () { console.log("Dog barks"); };
    Dog.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
        console.log("".concat(this.name, " dog moved ").concat(distance, "m."));
    };
    return Dog;
}(Animal1));
var dog = new Dog("Buddy", 2, "Golden Retriever");
dog.speak();
dog.move(10);
// encapsulation
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited $".concat(amount));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdrew $".concat(amount));
        }
        else {
            console.log("Insufficient balance");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount("123", 1000);
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());
console.log(account.balance); // error: private is not accessible
// static member
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) { return a + b; };
    Calculator.subtract = function (a, b) { return a - b; };
    Calculator.PI = 3.14;
    return Calculator;
}());
console.log(Calculator.PI);
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));
var Car1 = /** @class */ (function () {
    function Car1(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    ;
    Car1.prototype.drive = function () {
        console.log("".concat(this.make, " ").concat(this.model, " ").concat(this.year, " car is driven"));
    };
    return Car1;
}());
var toyota = new Car1("Toyota", "Camry", 2020);
toyota.drive();
var Truck = /** @class */ (function () {
    function Truck(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    ;
    Truck.prototype.drive = function () {
        console.log("".concat(this.make, " ").concat(this.model, " ").concat(this.year, " truck is driven"));
    };
    return Truck;
}());
var truck = new Truck("Ford", "F-150", 2021);
truck.drive();
// abstraction
var Rocket = /** @class */ (function () {
    function Rocket(watt) {
        this.watt = watt;
    }
    Rocket.prototype.describe = function () { console.log("Rocket modes: mode1 = ".concat(this.mode1(), ", mode2 = ").concat(this.mode2())); };
    return Rocket;
}());
var ModelZero = /** @class */ (function (_super) {
    __extends(ModelZero, _super);
    function ModelZero(watt, volt) {
        var _this = _super.call(this, watt) || this;
        _this.watt = watt;
        _this.volt = volt;
        return _this;
    }
    ModelZero.prototype.mode1 = function () { return 2 * this.volt; };
    ModelZero.prototype.mode2 = function () { return 3 * this.volt; };
    return ModelZero;
}(Rocket));
var ModelOne = /** @class */ (function (_super) {
    __extends(ModelOne, _super);
    function ModelOne(watt, ampere) {
        var _this = _super.call(this, watt) || this;
        _this.watt = watt;
        _this.ampere = ampere;
        return _this;
    }
    ModelOne.prototype.mode1 = function () { return 4 * this.ampere; };
    ModelOne.prototype.mode2 = function () { return 5 * this.ampere; };
    return ModelOne;
}(Rocket));
var rockets = [
    new ModelZero(1000, 500),
    new ModelOne(2000, 5000),
];
rockets.forEach(function (r) {
    console.log(r.mode1());
    console.log(r.mode2());
    r.describe();
});
