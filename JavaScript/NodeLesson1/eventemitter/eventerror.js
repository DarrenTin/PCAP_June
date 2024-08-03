const EventEmitter = require('events');
const myEvent = new EventEmitter();

handleError = function(errorCode) {
    console.log(`Error code: ${errorCode}`);
}

myEvent.on('error', handleError);
myEvent.emit('error', 400);