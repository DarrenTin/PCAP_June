let id: number | string = 101; // number
id = "202";  // altered to string

type Circle = {
    radius: number;
}

// 'Rectangle' has been declared in global, ts data are global
type Rectangle1 = {
    width: number;
    height: number;
}

let shape: Circle | Rectangle1 = { radius: 10 };  // Circle
shape = { width: 10, height: 20 };  // altered to Rectangle1

// Union in function
function printId(id: number | string){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
printId(101);
printId("202"); // (=== string) -> log(toUpperCase)
printId("Happy");  // HAPPY

function calculateArea(shape: Circle | Rectangle1): number {
    if ("radius" in shape) {  // contain radius is 'Circle'
        return Math.PI * shape.radius * shape.radius;
    } else {  // Rectangle1
        return shape.width * shape.height;
    }
}
const circle: Circle = { radius: 5 };
const rectangle: Rectangle1 = { width: 10, height: 20 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));

function calculateDiscount(price: number | string, discount: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price - (price * discount) / 100;
}
console.log(calculateDiscount(100, 10));
console.log(calculateDiscount("$100", 10));

type Animal = {
    name: string;
    species: string;
}

type Plant = {
    name: string;
    type: string;
}

// Array union
// type animalPlant = Animal & Plant;
const livingThing: (Animal | Plant)[] = [];
livingThing.push({ name: "Dog", species: "Canine" });
livingThing.push({ name: "Daisy", type: "Flower" });
console.log(livingThing);

// Boolean array union
let isComplete: true | false = false;
isComplete = true;

// Restriction union
type TrafficLight = "red" | "yellow" | "green";
let light: TrafficLight = "red";
light = "green";