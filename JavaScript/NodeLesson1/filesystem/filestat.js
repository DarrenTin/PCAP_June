const fs = require('node:fs');

fs.stat('myNewFile.txt', (err, stat) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(stat);
});