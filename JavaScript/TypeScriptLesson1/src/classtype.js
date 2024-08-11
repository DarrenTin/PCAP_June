// pillars of oop: encapsulation, inheritance, polymorphism, abstraction, composition
// static, classes and instances, interfaces and implementation
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
