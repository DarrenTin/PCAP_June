// example 1
function areNumberEqual(num1: number, num2: number): boolean {
    return num1 === num2;
}

function areStringEqual(str1: string, str2: string): boolean {
    return str1 === str2;
}

console.log(areNumberEqual(10, 10));
console.log(areStringEqual("bonjour", "bonjour"));

function areEqual<T>(a: T, b: T): boolean {
    return a === b;
}

console.log(areEqual<number>(10, 10));
console.log(areEqual<string>("hola", "hola"));
console.log(areEqual<boolean>(true, false));

// example 2
function maxNumber(num1: number, num2: number): number {
    return num1 > num2 ? num1 : num2;
}

function maxString(str1: string, str2: string): string {
    return str1.length > str2.length ? str1 : str2;
}

console.log(maxNumber(10, 5));
console.log(maxString("Hello", "World"));

function max<T>(a: T, b: T): T {
    return a > b ? a : b;
}

console.log(max<number>(10, 5));
console.log(max<string>("Hello", "World"));
console.log(max<boolean>(true, false));

// example 3
function getFirstString(strings: string[]): string | undefined {
    return strings[0];
}

function getFirstBoolean(booleans: boolean[]): boolean | undefined {
    return booleans[0];
}

console.log(getFirstString(["a", "b"]));
console.log(getFirstBoolean([true, false]));

function getFirstElement<T>(elements: T[]): T | undefined {
    return elements[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b"]));
console.log(getFirstElement([true, false]));

// example 4
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<string, number> = { first: "hello", second: 10 };
console.log(pair.first);
console.log(pair.second);

// example 5
// generic class
class Box<T> {
    content: T;

    constructor(value: T){
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}

let stringBox = new Box<string>("hello, world");
let numberBox = new Box<number>(100);

console.log(stringBox.getContent());
console.log(numberBox.getContent());

interface Length{ 
    length: number;
}

function getLength<T extends Length>(item: T): number {
    return item.length;
}

console.log(getLength<string>("Hello"));
console.log(getLength<number[]>([1, 2, 3]));