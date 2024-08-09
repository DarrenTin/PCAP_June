// Array of strings
let arr1: string[] = ["a", "b", "c"];
// let arr1: Array<string> = ["a", "b", "c"]; // generic array type
arr1.push("d");
console.log(arr1);

// Empty array
let arr2: string[] = [];
arr2.push("e");
arr2.push("f");
arr2.push("g");
arr2.push("h");
console.log(arr2);

// Array of numbers
let arr3: number[] = [1, 2, 3];
arr3.push(4);
console.log(arr3);

// Array of booleans
let arr4: boolean[] = [true, false, true];
arr4.push(false);
console.log(arr4);

// Array of objects
type Person = {  // initialize for later
    name: string; 
    age: number; 
    isStudent: boolean; 
    address: {
        street: string;
        city: string;
    }
};

let people: Person[] = [
    {
        name: 'John',
        age: 30,
        isStudent: false,
        address: {
            street: '123 Main St',
            city: 'Anytown'
        }
    },
    {
        name: 'Cena',
        age: 13,
        isStudent: true,
        address: {
            street: '456 Main St',
            city: 'Oldtown'
        }
    }
];
console.log(people);

// 2D array
const chessBoard: string[][] = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],  // 8th rank (Black pieces)
    ["p", "p", "p", "p", "p", "p", "p", "p"],  // 7th rank (Black pawns)
    ["", "", "", "", "", "", "", ""],          // 6th rank (Empty)
    ["", "", "", "", "", "", "", ""],          // 5th rank (Empty)
    ["", "", "", "", "", "", "", ""],          // 4th rank (Empty)
    ["", "", "", "", "", "", "", ""],          // 3rd rank (Empty)
    ["P", "P", "P", "P", "P", "P", "P", "P"],  // 2nd rank (White pawns)
    ["R", "N", "B", "Q", "K", "B", "N", "R"]   // 1st rank (White pieces)
];
console.log(chessBoard);

// Readonly array
let colors: readonly string[] = ['red', 'green', 'blue'];
console.log(colors[0]);
colors.push('yellow'); // error
console.log(colors);

// Pop from array
let numbers: number[] = [1, 2, 3];
console.log(numbers.pop());  // 3 is presented and get removed
console.log(numbers);  // 1, 2

// Array using map
let tempsInCelsius: number[] = [0, 25, 100];
let tempsInFahrenheit: number[] = tempsInCelsius.map((c) => (c * 9) / 5 + 32);
console.log(tempsInFahrenheit);  // 32, 77, 212
