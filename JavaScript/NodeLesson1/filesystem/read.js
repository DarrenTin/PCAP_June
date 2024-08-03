// import * as fs from 'node:fs';

const fs = require('node:fs');

try {
    const data = fs.readFileSync('../modules/user.json', 'utf8');
    console.log(data);
} catch (err) {
    console.log(err);
}

console.log('Hello, Synchronous!');