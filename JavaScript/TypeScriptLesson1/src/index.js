function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
// console.log(add("1", "2"));
// optional and default parameters
function add2(a, b, c) {
    return a + b + c;
}
console.log(add2(1, 2, 3));
var multiply;
multiply = function (a, b) {
    return a * b;
};
console.log(multiply(91, 99));
var divide = function (a, b) {
    return a / b;
};
console.log(divide(1024, 256));
// never type
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
// let myBoolean : boolean = true;
// myBoolean = 1;
// var myValue : any = "abc";
// myValue = 1;
// myValue = true;
// myValue = {};
// const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//     return num.toUppercase();
// });
var myUser = function (num) {
    for (var i = 0; i < num; i++) {
        console.log(i);
    }
};
function calculateTotalSalary(basic, bonus, supervisor, additionalFund) {
    if (bonus === void 0) { bonus = 0.99; }
    if (supervisor === void 0) { supervisor = false; }
    var earnings = basic + bonus;
    if (supervisor) {
        earnings += 1000;
    }
    if (additionalFund !== undefined) {
        earnings += 3000;
    }
    return earnings;
}
console.log(calculateTotalSalary(1000, 500, true));
console.log(calculateTotalSalary(1000, 500, false));
console.log(calculateTotalSalary(1000));
console.log(calculateTotalSalary(1000, 500, false, 10000));
