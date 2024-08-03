const EventEmitter = require('events');

const myEvent = new EventEmitter();

myFunction = function() {
    console.log('Hello, event!');
}

myEvent.on('Bell ring event', myFunction);
myEvent.emit('Bell ring event');