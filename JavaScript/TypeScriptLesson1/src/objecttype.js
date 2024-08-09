// Object type annotations
var person = {
    name: 'John',
    age: 30,
    isStudent: false,
};
console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Is Student: ").concat(person.isStudent));
// Optional properties
var car = {
    make: 'Toyota',
    model: 'Camry',
};
console.log("Make: ".concat(car.make, ", Model: ").concat(car.model, ", Year: ").concat(car.year));
var person2 = {
    name: 'John',
    age: 30,
    isStudent: false,
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};
console.log("Name: ".concat(person2.name, ", Age: ").concat(person2.age, ", Is Student: ").concat(person2.isStudent));
console.log("Address: ".concat(person2.address.street, ", ").concat(person2.address.city));
// Type aliases
var point = { x: 10, y: 20 };
console.log("x: ".concat(point.x, ", y: ").concat(point.y));
var point2 = { x: 30, y: 40 };
console.log("x: ".concat(point2.x, ", y: ").concat(point2.y));
function calculateDistance(pointA, pointB) {
    var xDist = pointA.x - pointB.x;
    var yDist = pointA.y - pointB.y;
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
var point3 = { x: 50, y: 60 };
console.log("x: ".concat(point3.x, ", y: ").concat(point3.y));
function printSinger(singer) {
    console.log("Singer: ".concat(singer.firstName, " ").concat(singer.lastName));
}
printSinger({ firstName: 'John', lastName: 'Doe' });
var singer = { id: 1, firstName: 'Billie', lastName: 'Irish' };
console.log("id: ".concat(singer.id, " Singer: ").concat(singer.firstName, " ").concat(singer.lastName));
singer.id = 2;
console.log("id: ".concat(singer.id, " Singer: ").concat(singer.firstName, " ").concat(singer.lastName));
var myRectangle = {
    width: 10,
    height: 2,
    color: 'red',
};
var myRectangle2 = {
    width: 10,
    height: 2,
    color: 'red',
    area: 200,
};
