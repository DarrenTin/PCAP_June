const fs = require('node:fs');

let content = 'Some content!'

try {
    fs.writeFileSync('myFile.text', content);
    console.log('Success write');
} catch (err) {
    console.log(err);
}

console.log('Hello, Synchronous!');