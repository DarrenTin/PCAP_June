export {};
let age: number = 25;
let userName: string = 'John';
let isDiscoverable: boolean = false;

console.log(`Name ${userName}, Age: ${age}, Is discoverable: ${isDiscoverable}`);

let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

// void, null, undefined
function logMessage(message: string): void {
    console.log(message);
}
logMessage('Stellar Revolution!');

let u: undefined = undefined;
let n: null = null;

