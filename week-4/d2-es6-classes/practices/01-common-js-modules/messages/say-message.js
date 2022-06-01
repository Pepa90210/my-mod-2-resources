const helloMessage = require('./hello-message');
// const helloMessage = message.helloMessage;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

// module.exports = {
//   sayMessage,
//   helloMessage
// }

module.exports = sayMessage;
