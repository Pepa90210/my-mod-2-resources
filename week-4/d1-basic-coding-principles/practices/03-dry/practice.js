function findBiggerNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  const bigNum = findBiggerNum(num1, num2);
  return bigNum * 2;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum * 2;
  // } else {
  //   bigNum = num2;
  //   return bigNum * 2;
  // }
}

function divideBiggerNumByThree(num1, num2) {
  const bigNum = findBiggerNum(num1, num2);
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  const bigNum = findBiggerNum(sum1, sum2);
  // let bigNum;
  // if (sum1 > sum2) {
  //   bigNum = sum1;
  //   return `I ate ${bigNum} tacos.`;
  // } else {
  //   bigNum = sum2;
  //   return `I ate ${bigNum} tacos.`;
  // }
  return `I ate ${bigNum} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
  // ternary gets us the opposite of the largest num found by findBiggerNum().
  const smallDog = findBiggerNum(weight1, weight2) === weight1 ? weight2 : weight1;
  // let smallDog;
  // if (weight1 < weight2) {
  //   smallDog = weight1;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // } else {
  //   smallDog = weight2;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // }
  return `I adopted a dog that weighs ${smallDog} pounds.`
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
