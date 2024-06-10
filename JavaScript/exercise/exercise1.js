// q1 details
// let name = prompt("name:");
// let age = prompt("age:");
// let city = prompt("city:");
// let college = prompt("college:");
// let profession = prompt("profession:");
let name = "Dave Trans";
let age = "25";
let city = "Australia";
let college = "La Trobe";
let profession = "Biotech engineer";
console.log(`${name} live in ${city}.
He is ${age} years old.
Graduated from ${college}.
He is ${profession}.`);

// q2 sum of digit
// let inputNum = console('Sum of digits in: ');
let inputNum = '88547993';
var accumulator = 0;
for(let i of inputNum){
    accumulator += parseInt(i);
}
console.log(accumulator);

// q3 two digits
// let input = prompt("Two digits:");
let inputDigit = '12';
if(inputDigit.length == 2){
    console.log("two digits");
} else {
    console.log("not two digits");
}

// q4 overtime work
let hours = prompt("Hours: ");
let hourly_pay_rate = prompt("Rate: ");
// let hours = 70;
// let hourly_pay_rate = 7;
let regular_pay = hours * hourly_pay_rate;
let overtime_pay = 0;
if(hours >= 40){
    regular_pay = 40 * hourly_pay_rate;
    overtime_pay = (hours - 40) * hourly_pay_rate * 1.5;
}
let total_pay = regular_pay + overtime_pay;
console.log("Regular pay = " + regular_pay);
console.log("Overtime pay = " + overtime_pay);
console.log("Total pay = " + total_pay);