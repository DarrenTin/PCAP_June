// Using event emitter to create following event
// 1) order grab food, "Order Placed for Grab food"
// 2) Grab ring the bell, "Ring the bell"
// 3) Make payment, "Enjoy your food"

const eventEmitter = require('events');
const myEvent = new eventEmitter();

placeOrder = function(food) {
    myEvent.emit(`order`, food); // use event (abstraction)
    myEvent.emit(`ring`);
    myEvent.emit(`payment`, food);
}

myOrder = function(food) {
    console.log(`Order placed for ${food}`)
}

myBell = function() {
    console.log('Ring the bell!');
}

myPayment = function(food) {
    console.log(`Enjoy your ${food}!`);
}

// initialize event, pair event with function
myEvent.on("order", myOrder); 
myEvent.on("ring", myBell);
myEvent.on("payment", myPayment);

// placeOrder -> emit order -> on myOrder
placeOrder('Pizza'); 
placeOrder('Sushi');