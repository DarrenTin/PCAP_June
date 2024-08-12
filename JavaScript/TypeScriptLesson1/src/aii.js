"use strict";
// abstract cannot have instance
// abstract parent can have abstract and concrete properties
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
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract Class
var Vehicle = /** @class */ (function () {
    function Vehicle(fuel) {
        this.fuel = fuel;
    }
    // Concrete method
    Vehicle.prototype.refuel = function (amount) {
        this.fuel += amount;
        console.log("Refueled with ".concat(amount, " liters. Total fuel: ").concat(this.fuel, " liters."));
    };
    return Vehicle;
}());
// Concrete class that extends the abstract class and implements the interface
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(fuel, batteryLevel) {
        var _this = _super.call(this, fuel) || this;
        _this.batteryLevel = batteryLevel;
        return _this;
    }
    Tesla.prototype.startEngine = function () {
        console.log("Tesla engine started.");
    };
    Tesla.prototype.stopEngine = function () {
        console.log("Tesla engine stopped.");
    };
    Tesla.prototype.chargeBattery = function (percentage) {
        this.batteryLevel += percentage;
        console.log("Battery charged by ".concat(percentage, "%. Current level: ").concat(this.batteryLevel, "%."));
    };
    Tesla.prototype.checkBatteryLevel = function () {
        console.log("Battery level: ".concat(this.batteryLevel, "%"));
        return this.batteryLevel;
    };
    return Tesla;
}(Vehicle));
// Concrete class that extends the abstract class and implements the hybrid interface
var Prius = /** @class */ (function (_super) {
    __extends(Prius, _super);
    function Prius(fuel, batteryLevel) {
        var _this = _super.call(this, fuel) || this;
        _this.batteryLevel = batteryLevel;
        _this.isElectricMode = false;
        return _this;
    }
    Prius.prototype.startEngine = function () {
        console.log("Prius engine started.");
    };
    Prius.prototype.stopEngine = function () {
        console.log("Prius engine stopped.");
    };
    Prius.prototype.chargeBattery = function (percentage) {
        this.batteryLevel += percentage;
        console.log("Battery charged by ".concat(percentage, "%. Current level: ").concat(this.batteryLevel, "%."));
    };
    Prius.prototype.checkBatteryLevel = function () {
        console.log("Battery level: ".concat(this.batteryLevel, "%"));
        return this.batteryLevel;
    };
    Prius.prototype.switchToElectricMode = function () {
        this.isElectricMode = true;
        console.log("Switched to electric mode.");
    };
    Prius.prototype.switchToFuelMode = function () {
        this.isElectricMode = false;
        console.log("Switched to fuel mode.");
    };
    return Prius;
}(Vehicle));
// Usage examples
var myTesla = new Tesla(50, 80);
myTesla.startEngine();
myTesla.chargeBattery(10);
myTesla.refuel(20);
myTesla.checkBatteryLevel();
myTesla.stopEngine();
var myPrius = new Prius(40, 60);
myPrius.startEngine();
myPrius.switchToElectricMode();
myPrius.chargeBattery(15);
myPrius.switchToFuelMode();
myPrius.refuel(10);
myPrius.checkBatteryLevel();
myPrius.stopEngine();
