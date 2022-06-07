class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  };

  read(index) {
    return this.data[index];
  };

  unshift(val) {
    this.length++;

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;

    // Your code here
    return this.length;
  };
}


module.exports = DynamicArray;
