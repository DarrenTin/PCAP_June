const os = require('os');

console.log("Architecture:", os.arch());
console.log("CPU Information:", os.cpus());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Platform:", os.platform());
console.log("Release Number:", os.release());
console.log("User Information:", os.userInfo());
