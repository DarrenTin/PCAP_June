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

function greet(){
    console.log("Hello");
}
greet()

function greet2(name){
    console.log(`Hello ${name}`);
}
greet2("Ali")

function greet3(name = "Ali"){
    console.log(`Hello ${name}`);
}
greet3();
greet3("Baba");

function greet4(name = "Ali", age = 30){
    console.log(`${name} is ${age} years old`);
}
greet4();
greet4("Dad", 75);

const greet5 = () => console.log("Hello");
greet5();

const greet6 = (name, age) => console.log(`${name} is ${age} years old`);
greet6("Alice", 3);

const CURRENCYRATE = 3.61;
function convertCurrency(amount){
    return amount * CURRENCYRATE;
}
console.log(convertCurrency(100));

let convertCurrency2 = function(amount) {
    return amount * CURRENCYRATE;
}
console.log(convertCurrency2(100));

let convertCurrency3 = (amount) => {
    return amount * CURRENCYRATE;
}
console.log(convertCurrency3(100));

let convertCurrency4 = amount => amount * CURRENCYRATE;
console.log(convertCurrency4(100));

// stack
let p = 10;
let q = p;
p = 20;
console.log(p); // 20
console.log(q); // 10

// heap
let r = {value: 10};
let s = r;
r.value = 20;
console.log(r); // 20
console.log(s); // 20

// stack
let number = 10;
let increase = (n) => console.log(++n); 
increase(10);

// heap
let obj = {value: 10}
let increase2 = (n) => console.log(++n.value);
increase2(obj);

// function vs object
function exampleFunction() {
    console.log("Hello, I am an example function");
}

const exampleObject = {
    name: "exampleObject",
    exampleFunction: exampleFunction
}

exampleObject.exampleFunction();
exampleObject["exampleFunction"]();

const exampleArray = [1, 2, 3, 4, 5];
console.log(typeof exampleFunction); //function
console.log(typeof exampleObject); //object
console.log(typeof exampleArray); //object

exampleFunction.someProperty = "I am property";
console.log(exampleFunction.someProperty);
console.log(exampleFunction.name);
console.log(exampleFunction.length);
console.log(exampleFunction.toString());

greet.someProperty2 = "teoh";
console.log(greet.someProperty2);

// Function declaration vs Function expression
const greet7 = function(name) {
    return "Ciao, " + name;
};
console.log(greet("James"));

// Function as a  value
function quack(num){
    for(let i = 0; i < num; i++){
        console.log("Quack!");
    }
}

function fly(num){
    for(let i = 0; i < num; i++){
        console.log("Flying!");
    }
}

let superFly = fly;
superFly(3);

let superQuack = quack;
superQuack(2);

// Function composition
// function add(a, b){
//     return a + b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function addAndMultiply(a, b, c){
//     return multiply(add(a, b), c);
// }

// function compose(f, g){
//     return function(a) {
//         return f(g(a));
//     };
// }

// console.log(addAndMultiply(2, 3, 4));

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const addAndMultiply = (a, b, c) => multiply(add(a, b), c);
console.log(addAndMultiply(2, 3, 4));

const compose = (f, g) => (x) => f(g(x));
const addAndMultiply2 = compose(multiply, add);
console.log(addAndMultiply2(2, 3, 4));

const compose2 = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const add2 = x => x + 2;
const multiply3 = x => x * 3;
const subtract4 = x => x - 4;
const divide5 = x => x / 5;
const addMultiplySubtractDivide = compose2(divide5, subtract4, multiply3, add2);
console.log(addMultiplySubtractDivide(10));

const greet8 = name => `Hello, ${name}!`;
const exclaim = statement => `${statement.toUpperCase()}`;
const welcome = compose2(greet8, exclaim);
console.log(welcome("Brooke James"));

// Function currying
function multiply2(a){
    return function(b){
        return a * b;
    }
}
console.log(multiply(2, 3)); // normal
console.log(multiply2(2)(3)); // curry

function curryThreeParameters(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}
var firstFunction = curryThreeParameters(1);
var secondFunction = firstFunction(2);
var result = secondFunction(3);
console.log(result);
console.log(curryThreeParameters(1)(2)(3));

// reducer
let arr = [1, 3, 5, 7];
let summation = arr.reduce(function arraySum(sum, number){
    return sum + number;
});
console.log('summation = ' + summation);
console.log(arr);

let summation2 = arr.reduce(function arraySum(sum, number, index){
    if(index === 0){
        return sum; // still 0, don't plus
    } else {
        return sum + number;
    }
}, 1000); // initial value is set to 1000
console.log('summation2 = ' + summation2);
console.log(arr);

let evenNumbers = [2, 4, 6, 8, 10];
let avg = evenNumbers.reduce((sum, number, currentIndex, array)=>{
    sum += number;
    if(currentIndex == array.length - 1){ // last element
        return sum / array.length;
    } else {
        return sum;
    }
});
console.log(avg);
console.log(arr);

// let evenNumbers = [2, 4, 6, 8, 10];
// let avg = evenNumbers.reduce((sum, number, currentIndex)=>{
//     sum += number;
//     if(currentIndex == evenNumbers.length - 1){
//         return sum / evenNumbers.length;
//     } else {
//         return sum;
//     }
// });
// console.log(avg);
// console.log(arr);

let oddNumbers = [1, 3, 5, 7];
let summation3 = oddNumbers.reduce(function arraySum(sum, number){
    return sum + number;
}, 4); // accumulator start from 4 instead of 0

let numbers2 = [1, 4, 7];
let division = numbers2.reduceRight((num1, num2) => {
    return num1 / num2;
});
console.log(division);

// recursion
// var varArr = [1, 3, 5, 7];
// var sumRec = 0;
// let summationRecursive = (varArr) => {
//     for(let i of varArr){
//         if(varArr.length == 1){ // i = last element
//             return sumRec + i;
//         } else {
//             sumRec += i;
//             varArr.shift();
//             return summationRecursive(varArr);
//         }
//     }
// }
// console.log("Recursive summation = " + summationRecursive(varArr));

// let summationRecursive = (arr) => {
//     if (arr.length === 0) {
//         return 0;
//     }
//     return arr[0] + summationRecursive(arr.slice(1));
// };
// console.log("Recursive summation = " + summationRecursive([1, 3, 5, 7]));

// let subtractionRecursive = (arr) => {
//     if(arr.length === 1){
//         return arr[0];
//     }
//     arr[1] = arr[0] - arr[1];   
//     return subtractionRecursive(arr.slice(1));
// };
// console.log("Recursive substraction = " + subtractionRecursive([9, 1, 2, 3]));

// let subtractionRecursive = (arr) => {
//     if (arr.length === 1) {
//         return arr[0];
//     }
//     let result = arr[0] - arr[1];
//     return subtractionRecursive([result].concat(arr.slice(2)));
// };
// console.log("Recursive subtraction = " + subtractionRecursive([9, 1, 2, 3]));

// foreach
const arrayFruit = ['apple', 'banana', 'cherry'];
arrayFruit.forEach(function(value){
    console.log('Today I ate ' + value);
});

function printFruit(value){
    console.log('Today I ate ' + value);
}
arrayFruit.forEach(printFruit);

arrayFruit.forEach(function(value, index){
    console.log("Today I ate " + value + " at index " + index);
});

arrayFruit.forEach(function(value, index, arr){
    console.log("Today I ate " + value + " at index " + index + " in array " + arr);
});

// higher order function
// every
const ages = [1, 30, 39, 49, 10, 13];
function isBelowThreshold(value){
    return value < 40;
}
console.log(ages.every(isBelowThreshold));

console.log(ages.every(function(value){
    return value < 40;
}));

console.log(ages.every(value => value < 40));

// some
console.log(ages.some(isBelowThreshold));

console.log(ages.some(function(value){
    return value < 40;
}));

console.log(ages.some(value => value < 40));

// filter
console.log(ages.filter(isBelowThreshold));

console.log(ages.filter(function(value){
    return value < 40;
}));

console.log(ages.filter(value => value < 40));

// different ways to access iterable
for(let i = 0; i < 5; i++){ // way 1
    console.log(i);
}

const numbers3 = [1, 2, 3, 4, 5]; // way 2
for(let i = 0; i < numbers3.length; i++){
    console.log(numbers3[i])
}

for(let i of numbers3){ // way 3
    console.log(i);
}

const string2 = "Hello"; // way 4
for(let c of string2){
    console.log(c);
}

const person = { // way 5
    name: "John",
    age: 30,
}
for(let key in person){ // way 6
    console.log(key, person[key]);
}

for(let i in numbers3){ // way 7
    console.log(i, numbers3[i]);
}

numbers3.foo = "bar"; // way 8
for(let i in numbers3){
    console.log(i, numbers3[i]);
}

numbers3.forEach(function(value){ // way 9
    console.log(value);
});

numbers3.forEach(value => console.log(value)); // way 10

numbers3.forEach(function(value, index){ // way 11
    console.log(value, index);
});

numbers3.forEach(function(value, index, arr){ // way 12
    console.log(value, index, arr);
});

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals);
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));

const months = ['Jan', 'Mar', 'Apr', 'Jun'];
months.splice(1, 0, 'Feb'); // insert
console.log(months);

months.splice(4, 1); // delete
console.log(months);

months.splice(4, 0, 'May'); // replace
console.log(months);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));

const string3 = 'Hello';
const string4 = 'World';
console.log(string3.concat('', string4));

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words);
console.log(words[3]);

const words2 = str.split(' ', 3);
console.log(words2);

const array3 = [5, 12, 8, 130, 44];
const found = array3.find(element => element > 10);
console.log(found); // 12
console.log(array3);

const foundIndex = array3.findIndex(element => element > 100);
console.log(foundIndex);

console.log(array3.includes(5)); // true
console.log(array3.includes(4)); // false
console.log(array3.includes(3, 3)); // false
console.log(array3.includes(3, -1));  // true

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2)); // 4 (2 is start)
console.log(beasts.indexOf('giraffe')); // -1

// count backward
console.log(beasts.lastIndexOf('bison')); // 4
console.log(beasts.lastIndexOf('bison', 2)); // 1
console.log(beasts.lastIndexOf('giraffe')); // -1

// object operations
const people = [
    {name: "John", age: 30},
    {name: "Alice", age: 25},
    {name: "Bob", age: 20},
];

// specific detail of specific properties
console.log(people[0].name);
console.log(people[1].age);
console.log(people[2].name);

// loop object
people.forEach(function(person){
    console.log(person.name, person.age);
});

// arrow function loop object
people.forEach(person => console.log(person.name, person.age));

// map
const names = people.map(person => person.name);
console.log(names);

// flat
const array4 = [1, 2, [3, 4, [5, 6]]];
const flat = array4.flat();
console.log(flat);

const flat2 = array4.flat(2);
console.log(flat2);

const array5 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flat3 = array5.flat(Infinity);
console.log(flat3);

// block scope

{
    let outerVariable = 10;
    {
        let middleVariable = 20;

        {
            let innerVariable = 30;
            console.log("Inner Block: ", outerVariable, middleVariable, innerVariable);
        }
        console.log("Middle Block: ", outerVariable, middleVariable);
    }
    console.log("Outer Block: ", outerVariable);
}

// global
let globalVariable = "global";
{
    let globalVariable = "outer";
    {
        let globalVariable = "middle";
        {
            let globalVariable = "inner";
            console.log("Inner Block: ", globalVariable);
        }        
        console.log("Middle Block: ", globalVariable);
    }
    console.log("Outer Block: ", globalVariable);
}
console.log("Global Scope: ", globalVariable);

// loop scope
// let globalVariable = "global";
{
    let globalVariable = "outer";
    
    for(let i = 0; i < 1; i++){
        let globalVariable = "outer-loop";
        console.log("Outer Block Loop: ", globalVariable);
    }

    {
        let globalVariable ="middle";
        
        for(let i = 0; i < 1; i++){
            let globalVariable = "middle-loop";
            console.log("Middle Block Loop: ", globalVariable);
        }

        {
            let globalVariable = "inner";
            
            for(let i = 0; i < 1; i++){
                let globalVariable = "inner-loop";
                console.log("Inner Block Loop: ", globalVariable);
            }
        }

        console.log("Middle Block: ", globalVariable);

    }
    console.log("Outer Block: ", globalVariable);
}
console.log("Global Scope: ", globalVariable);

// function scope
function myFunction(){
    let functionScopeVariable = "I am inside the function";
    console.log(functionScopeVariable);
}
myFunction();
// console.log(functionScopeVariable); // error

// closure
function outerFunction(){
    let outerVariable = "I am outside";
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}
const myClosure = outerFunction();
myClosure();

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
let myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

// arguments
function greet9(name = "Guest"){
    console.log("Guten morgen, " + name);
}
greet9("James");
greet9();

function add3(a, b){
    console.log(a + b);
}
add3(1, 2, 3, 4, 5);

function multiply4(a, b){
    if(b===undefined) b = 1;
    console.log(a * b);
}
multiply4(3);

function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

// rest destruction
function logArguments(...args){
    console.log(args);
}
logArguments(6, 7, 8, 9, 10);

function sum2(...args){
    return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));

function sum3(discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30, 50));

function logUserInfo(name, age, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}, Hobbies: ${hobbies.join(', ')}`);
}
logUserInfo("Alice", 30, "Reading", "Hiking", "Cooking");

// spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
console.log(combined);

const third = {name: "James"};
const forth = {job: "Developer"};
const combined2 = {...third, ...forth};
console.log(combined2);
const combined3 = {...third, ...forth, location: "USA"};
console.log(combined3);

// destructuring
const person2 = {
    nickname: "Ciao",
    age: 87,
};
const {nickname, age} = person2;
console.log(nickname, age);

const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const[firstColor2, ...rest] = colors;
console.log(first, rest); // red ["green", "blue"]

const[firstColor3, , thirdColor2] = colors;
console.log(firstColor3, thirdColor2); // red blue