// example 1
function areNumberEqual(num1, num2) {
    return num1 === num2;
}
function areStringEqual(str1, str2) {
    return str1 === str2;
}
console.log(areNumberEqual(10, 10));
console.log(areStringEqual("bonjour", "bonjour"));
function areEqual(a, b) {
    return a === b;
}
console.log(areEqual(10, 10));
console.log(areEqual("hola", "hola"));
console.log(areEqual(true, false));
// example 2
function maxNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
function maxString(str1, str2) {
    return str1.length > str2.length ? str1 : str2;
}
console.log(maxNumber(10, 5));
console.log(maxString("Hello", "World"));
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(10, 5));
console.log(max("Hello", "World"));
console.log(max(true, false));
// example 3
function getFirstString(strings) {
    return strings[0];
}
function getFirstBoolean(booleans) {
    return booleans[0];
}
console.log(getFirstString(["a", "b"]));
console.log(getFirstBoolean([true, false]));
function getFirstElement(elements) {
    return elements[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b"]));
console.log(getFirstElement([true, false]));
var pair = { first: "hello", second: 10 };
console.log(pair.first);
console.log(pair.second);
// example 5
// generic class
var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    return Box;
}());
var stringBox = new Box("hello, world");
var numberBox = new Box(100);
console.log(stringBox.getContent());
console.log(numberBox.getContent());
function getLength(item) {
    return item.length;
}
console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
