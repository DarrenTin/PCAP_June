// const { argv } = require('node:process');
// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

const { argv } = require('node:process');
const args = process.argv.slice(2);
const options = {};

args.forEach((arg) => {
    const [key, value] = arg.split('=');
    options[key] = value;
});

console.log('Parsed options: ', options);