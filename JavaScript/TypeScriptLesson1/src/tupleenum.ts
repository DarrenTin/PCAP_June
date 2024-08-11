// tuple here is not the same as python
let identity : [string, number, boolean, [string, string]] = ['John', 30, false, ['123 Main St', 'New York']];
const [one, two] = identity;
console.log(one, two); // John 30

// enum
const Color = {
    Red: "RED",
    Green: "GREEN",
    Blue: "BLUE"
};

type HTTPResponse = [number, string];
const responses: HTTPResponse[] = [
    [404, "Not Found"],
    [200, "OK"]
];

