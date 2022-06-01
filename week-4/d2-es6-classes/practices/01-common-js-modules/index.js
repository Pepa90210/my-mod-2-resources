const sayHelloTo = require('./send-messages/say-hello-to');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato');
// const messagesObj = require('./messages/index');

// const msg1 = messagesObj.message1;
// const msg2 = messagesObj.message2;
// const msg3 = messagesObj.message3;

const { message1: msg1, message2: msg2, message3: msg3 } = require('./messages/index');
// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
