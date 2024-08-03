const fs = require('node:fs');

fs.readFile('../modules/user.json', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

console.log('Hello, Asynchronous!');