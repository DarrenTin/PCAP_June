let name = "John";
var name2 = "Ahmad";
const name3 = "ali";

let isAdult = true;
let is_adult = false;

let on = true;
let off = false;

let mySchool = null;
console.log(mySchool)

let school = "New Era";
let oldSchool = 'New Era';
let $name = "John";
console.log(name + " worked in" + school);
console.log(`${name} worked in ${school} since ${1999 - 1989} years ago`);
console.log('Darren\' car is "blue"');

let newVariable = "This is \
my favorite \
color";
console.log(newVariable.length);
console.log(newVariable.toUpperCase());

const FILE_NAME = "index.js";

let x = 1;
let y = 2;
let f = 1.5;
let g = 2.5;

console.log(typeof x);
console.log(typeof y);
let h =2.23456782211212121;
console.log(h);
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(Infinity);
console.log(-Infinity);
console.log(Infinity + Infinity);
console.log(Infinity - Infinity);

console.log('3' + '2');
console.log('3' - '2');
console.log('3' * '2');
console.log('3' / '2');
console.log('3' + 100);
console.log('3' / 'hello');
console.log(Math.random());
console.log(Math.random() * 100);

let d = "9";
let e = 9;
console.log(d + e);
d = Number(d);
console.log(typeof d);
d = String(d);
console.log(typeof d);

let a = 10;
console.log(a += 5);
console.log(a -= 5);
console.log(a *= 5);
console.log(a /= 2);

let money = 100;
console.log(money++);
console.log(money);
console.log(--money);

let m = 6, n = 3;
console.log(m < 10 && n > 1);
console.log(m == 5 || n == 5);
console.log(!(m == n));

console.log("9" == 9);
console.log("9" === 9);
console.log(true == 1);
console.log(true === 1);

console.log(true != 1);
console.log(true !== 1);

let String1 = "pheumonoultramicroscopicsilicovolvalnoconeoses";

console.log(String1[0]);
console.log(String1[1]);
console.log(String1[2]);
console.log(String1[3]);

for (let i = 0; i < String1.length; i++) {
    console.log(String1[i]);
}

console.log(String1.length);

let fruits  = ["rambutan", "durian", "banana"];
console.log(fruits)

let emptyArray = [];
console.log(emptyArray);

let singleValueArray = [100];
console.log(singleValueArray);

let numbers = [7, 7, 4, 4, 3, 3, 3, 6, 5];
console.log(numbers);

let mixedArray = [50, 'Learn', true];
console.log(mixedArray);
console.log(mixedArray[2]);
console.log(mixedArray[1]);
console.log(mixedArray[0]);

for(let i of [0, 1, 2]){
    console.log(mixedArray[i]);
}

for(let i of mixedArray){
    console.log(i);
}

for(let i = 0; i < mixedArray.length; i++){
    console.log(mixedArray[i]);
}

let alist = ['aa', ['b', 'c'], 'dd'];
let blist = ['0', '1', ['2.0', '2.1', ['2.2.0', '2.2.1']], '3'];
let clist = [[1, 2, 3], [4, 5], [6], 77, 8.8, 'ff'];
let dlist = [alist, blist, clist];
console.log(dlist);

let ticTacToe  = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

ticTacToe[0][1] = "o";
ticTacToe[1][0] = "o";
console.log(ticTacToe);

let matrixA = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
];

let matrixB = [
    [11, 22, 33, 44],
    [11, 22, 33, 44],
    [11, 22, 33, 44],
];

let matrixSum = [];
for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
    }
    matrixSum.push(row);
}

console.log(matrixSum)

let o = [];
o.push(1);
o.push(2);
o.push(3);
console.log(o);
// a.unshift("New");
// console.log(o);
// a.unshift("New2");
// console.log(o);
// a.pop();
// console.log(o);
// a.shift();
// console.log(o);

const myBook = {
    title: "Dragon Raja",
    author: "Jiang Nam",
}

console.log(myBook.title);
console.log(myBook.author);
myBook["price"] = 20;
myBook.title = "Dragon Raja III";
console.log(myBook);

let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    startEngine: function() {
        return `${this.brand + this.model}\'s Engine started`;
    },
    accelerate: function(speed) {
        return `Accelerating to ${speed} mph`;
    }
};
console.log(car.startEngine()); // Output: Engine started
console.log(car.accelerate(60)); // Output: Accelerating to 60 mph
