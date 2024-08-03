const fs = require('node:fs');

let content = 'async content!'

fs.writeFile('myNewFile.txt', content, (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Success async write');
});

console.log('Hello, Asynchronous!');