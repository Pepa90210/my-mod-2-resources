// const messageObj = require('../messages/say-message');
// const sayMessage = messageObj.sayMessage;
// const helloMessage = messageObj.helloMessage;

const sayMessage = require('../messages/say-message');

// sayMessage(helloMessage);

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports = sayHelloTo;
