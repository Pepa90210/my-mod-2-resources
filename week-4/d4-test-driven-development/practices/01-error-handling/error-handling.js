// // 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (error) {
//     if (error instanceof TypeError) {
//     console.log(error.name + ': ' + error.message);
//     } else {
//       throw error;
//     }
//   }
//   return sum;
// }


// let res = sum(null);
// console.log(res);


// // 2.
// // tests
// const sayName = name => {
//   if (typeof name !== 'string') {
//     throw new TypeError('Invalid name! Must be a string!');
//   } else {
//     console.log(name);
//   }
// }

// try {
//   sayName("Alex");
//   sayName(1);
// } catch (error) {
//   console.error(error.message)
// }

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.error('Hello World!');
}
