const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    const hashHexString = sha256(key).slice(0, 8);
    return parseInt(`0x${hashHexString}`)
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    if (!this.data[index]) {
      this.data[index] = newPair;
      this.count++;
    } else {
      throw new Error('hash collision or same key/value pair already exists!');
    }
  }

  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);
    if (this.data[index]) {
      newPair.next = this.data[index];
    }
    this.data[index] = newPair;
    this.count++;
  }


  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);

    let currentPair = this.data[index];

    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      currentPair.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);

      if (this.data[index]) {
        newPair.next = this.data[index];
      }

      this.data[index] = newPair;
      this.count++;
    }
  }
}


module.exports = HashTable;
