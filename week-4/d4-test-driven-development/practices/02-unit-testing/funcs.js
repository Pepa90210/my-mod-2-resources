function isFive(num) {
  if (num === 5) return true;
  else return false;
}

function isOdd(number) {
  if (typeof number !== 'number') throw new Error('Invalid')
  else if (number % 2 === 0) return false;
  else return true;
}

function myRange(min, max, step = 1) {
  let results = [];

  if (min <= max) {
    for (let i = min; i <= max; i += step) {
      results.push(i);
    }
  }

  return results;
}


module.exports = { isFive, isOdd, myRange };
