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