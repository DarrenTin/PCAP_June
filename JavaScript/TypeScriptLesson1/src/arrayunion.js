// Array of strings
var arr1 = ["a", "b", "c"];
// let arr1: Array<string> = ["a", "b", "c"]; // generic array type
arr1.push("d");
console.log(arr1);
// Empty array
var arr2 = [];
arr2.push("e");
arr2.push("f");
arr2.push("g");
arr2.push("h");
console.log(arr2);
// Array of numbers
var arr3 = [1, 2, 3];
arr3.push(4);
console.log(arr3);
// Array of booleans
var arr4 = [true, false, true];
arr4.push(false);
console.log(arr4);
var people = [
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
var chessBoard = [
    ["r", "n", "b", "q", "k", "b", "n", "r"], // 8th rank (Black pieces)
    ["p", "p", "p", "p", "p", "p", "p", "p"], // 7th rank (Black pawns)
    ["", "", "", "", "", "", "", ""], // 6th rank (Empty)
    ["", "", "", "", "", "", "", ""], // 5th rank (Empty)
    ["", "", "", "", "", "", "", ""], // 4th rank (Empty)
    ["", "", "", "", "", "", "", ""], // 3rd rank (Empty)
    ["P", "P", "P", "P", "P", "P", "P", "P"], // 2nd rank (White pawns)
    ["R", "N", "B", "Q", "K", "B", "N", "R"] // 1st rank (White pieces)
];
console.log(chessBoard);
// Readonly array
var colors = ['red', 'green', 'blue'];
console.log(colors[0]);
colors.push('yellow'); // error
console.log(colors);
// Pop from array
var numbers = [1, 2, 3];
console.log(numbers.pop()); // 3 is presented and get removed
console.log(numbers); // 1, 2
// Array using map
var tempsInCelsius = [0, 25, 100];
var tempsInFahrenheit = tempsInCelsius.map(function (c) { return (c * 9) / 5 + 32; });
console.log(tempsInFahrenheit); // 32, 77, 212
