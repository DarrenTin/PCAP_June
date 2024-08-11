var id = 101; // number
id = "202"; // altered to string
var shape = { radius: 10 }; // Circle
shape = { width: 10, height: 20 }; // altered to Rectangle1
// Union in function
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(101);
printId("202"); // (=== string) -> log(toUpperCase)
printId("Happy"); // HAPPY
function calculateArea(shape) {
    if ("radius" in shape) { // contain radius is 'Circle'
        return Math.PI * shape.radius * shape.radius;
    }
    else { // Rectangle1
        return shape.width * shape.height;
    }
}
var circle = { radius: 5 };
var rectangle = { width: 10, height: 20 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));
function calculateDiscount(price, discount) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price - (price * discount) / 100;
}
console.log(calculateDiscount(100, 10));
console.log(calculateDiscount("$100", 10));
// Array union
// type animalPlant = Animal & Plant;
var livingThing = [];
livingThing.push({ name: "Dog", species: "Canine" });
livingThing.push({ name: "Daisy", type: "Flower" });
console.log(livingThing);
// Boolean array union
var isComplete = false;
isComplete = true;
var light = "red";
light = "green";
