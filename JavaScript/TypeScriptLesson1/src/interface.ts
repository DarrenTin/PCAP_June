interface Identity {
    name: string;
    age: number;
}

let john: Identity = {
    name: "John",
    age: 30
};

console.log(john);

// interface as a contract
// Employee = Identity & { employeeId: number }
interface Employee extends Identity {
    employeeId: number;
}

let encik: Employee = {
    name: "Encik",
    age: 25,
    employeeId: 1001
};

console.log(encik);

// to upper
interface StringFormatter {
    (str: string): string;
}

let toUpperCase: StringFormatter = function (str: string): string {
    return str.toUpperCase();
}

console.log(toUpperCase("Hello, World"));

// interface merging
interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {name: "John", age: 30};

// type merging
// type User2 {
//     name: string;
// }

// type User2 { // error
//     age: number;
// }

// const user2: User2 = {name: "John", age: 30};

// interface extending
interface Animal2 { name: string; }
interface Bear extends Animal2 {  honey: boolean; }
let bear: Bear = { name: "Pooh", honey: true };

// type extending
type Car = { make: string; };
type Car2 = Car & { model: string; };
let toyota_camry: Car2 = { make: "Toyota", model: "Camry" };