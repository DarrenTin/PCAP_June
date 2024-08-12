"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car2 = /** @class */ (function () {
    function Car2(make, model) {
        this.make = make;
        this.model = model;
    }
    ;
    Car2.prototype.startEngine = function () {
        console.log("".concat(this.make, " ").concat(this.model, " car is started"));
    };
    Car2.prototype.drive = function () {
        console.log("".concat(this.make, " ").concat(this.model, " car is driven"));
    };
    Car2.prototype.stopEngine = function () {
        console.log("".concat(this.make, " ").concat(this.model, " car is stopped"));
    };
    return Car2;
}());
var Truck1 = /** @class */ (function () {
    function Truck1(make, year) {
        this.make = make;
        this.year = year;
    }
    ;
    Truck1.prototype.startEngine = function () {
        console.log("".concat(this.make, " ").concat(this.year, " truck is started"));
    };
    Truck1.prototype.drive = function () {
        console.log("".concat(this.make, " ").concat(this.year, " truck is driven"));
    };
    Truck1.prototype.stopEngine = function () {
        console.log("".concat(this.make, " ").concat(this.year, " truck is stopped"));
    };
    return Truck1;
}());
var myCar = new Car2("Nissan", "Cefiro");
var myTruck = new Truck1("Ford", 5);
var vehicles = [myCar, myTruck];
vehicles.forEach(function (v) {
    console.log(v.constructor.name);
    v.startEngine();
    v.drive();
    v.stopEngine();
});
