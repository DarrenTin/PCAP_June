function add(a: number, b: number): number{
    return a + b;
}
console.log(add(1, 2));
// console.log(add("1", "2"));

// optional and default parameters
function add2(a: number, b: number, c?: number): number{
    return a + b + c;
}
console.log(add2(1, 2, 3));

let multiply: (a:number, b:number) => number;
multiply = function (a:number, b:number): number {
    return a * b;
}
console.log(multiply(91, 99));

const divide = (a:number, b:number):number => {
    return a / b;
}
console.log(divide(1024, 256));

// never type
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while(true) {}
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

const myUser = (num: number): void => {
    for (let i = 0; i < num; i++){
        console.log(i);
    }
};

function calculateTotalSalary(basic: number, bonus: number = 0.99, supervisor: boolean = false, additionalFund?: number): number {
    let earnings: number = basic + bonus;
    if(supervisor){
        earnings += 1000;
    }
    if(additionalFund !== undefined){
        earnings += 3000;
    }
    return earnings;
}
console.log(calculateTotalSalary(1000, 500, true));
console.log(calculateTotalSalary(1000, 500, false));
console.log(calculateTotalSalary(1000));
console.log(calculateTotalSalary(1000, 500, false, 10000));

