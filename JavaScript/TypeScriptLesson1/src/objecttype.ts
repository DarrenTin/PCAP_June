// Object type annotations
let person: {name: string; age: number; isStudent: boolean} = {
    name: 'John',
    age: 30,
    isStudent: false,
};
console.log(`Name: ${person.name}, Age: ${person.age}, Is Student: ${person.isStudent}`);

// Optional properties ?
let car: { make: string; model: string; year?: number } = {
    make: 'Toyota',
    model: 'Camry',
}
console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);

// Nested object
let person2: { 
    name: string; 
    age: number; 
    isStudent: boolean; 
    address: { // initialize nested
        street: string;
        city: string;
    };
} = {
    name: 'John',
    age: 30,
    isStudent: false,
    address: { // use nested
        street: '123 Main St',
        city: 'Anytown'
    }
};

console.log(`Name: ${person2.name}, Age: ${person2.age}, Is Student: ${person2.isStudent}`);
console.log(`Address: ${person2.address.street}, ${person2.address.city}`);

// Type aliases
let point: {x: number, y: number} = { x: 10, y: 20 }; // usual way, not reusable
console.log(`x: ${point.x}, y: ${point.y}`);

type Point = {  // type, reusable
    x: number;
    y: number;
}

let point2: Point = { x: 30, y: 40 };  // directly use, no need write long
console.log(`x: ${point2.x}, y: ${point2.y}`);

function calculateDistance(pointA: Point, pointB: Point): number {
    const xDist = pointA.x - pointB.x;
    const yDist = pointA.y - pointB.y;
    return Math.sqrt(xDist ** 2 + yDist ** 2);  // d2 = x2 + y2 
}

interface Point2 {
    x: number;
    y: number;
}

let point3: Point2 = { x: 50, y: 60 };
console.log(`x: ${point3.x}, y: ${point3.y}`);

function printSinger(singer: { firstName: string; lastName: string }) {
    console.log(`Singer: ${singer.firstName} ${singer.lastName}`);
}
printSinger({ firstName: 'John', lastName: 'Doe' });

type Singer = {
    readonly id: number;  // immutable
    firstName: string;
    lastName: string;
};

let singer: Singer = { id: 1, firstName: 'Billie', lastName: 'Irish' };
console.log(`id: ${singer.id} Singer: ${singer.firstName} ${singer.lastName}`);
singer.id = 2;  // error
console.log(`id: ${singer.id} Singer: ${singer.firstName} ${singer.lastName}`);

type Rectangle = {
    width: number;
    height: number;
};

type Color = {
    color: string;
};

type ColoredRectangle = Rectangle & Color;  // merge width, height, color

const myRectangle: ColoredRectangle = {
    width: 10,
    height: 2,
    color: 'red',
};

type newRectangle = Rectangle & Color & {
    area: number;  // direct push, without object initialize
};

const myRectangle2: newRectangle = {
    width: 10,
    height: 2,
    color: 'red',
    area: 200,
};