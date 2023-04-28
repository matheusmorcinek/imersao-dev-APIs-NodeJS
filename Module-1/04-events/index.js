const EventEmitter = require('events');


const myEmitter = new EventEmitter();
const eventName = 'user:click';

// myEmitter.on(eventName, function(click) {
//     console.log('an user clicked', click);
// });

// myEmitter.emit(eventName, 'on scroll bar');
// myEmitter.emit(eventName, 'on ok button');

// let count = 0;
// setInterval(function() {
//     myEmitter.emit(eventName, 'on ok button ' + (count++));
// },1000);

const stdin = process.openStdin();
stdin.addListener('data', function(value) {
    console.log(`You typed: ${value.toString().trim()}`);
});