class Vector {
  constructor(size) {
    this.vector = [];
    this.size = 0;
    this.capacity = size;

    for (let i = 0; i < size; i++) {
      this.vector[i] = null;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  at(index) {
    if ((index >= 0) && (index < this.size)) {
      return this.vector[index];
    } else {
      throw new Error('Index out of bounds');
    }
  }

  push(item) {
    if (this.size === this.capacity) {
      this._expand(this.capacity * 2);
    }

    this.vector[this.size] = item;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) throw new Error('Cannot pop empty vector.');
    let toPop = this.vector[--this.size];

    let quarter = Math.floor(this.capacity / 4);
    if (this.size <= quarter) {
      this._contract(Math.floor(this.capacity / 2));
    }

    return toPop;
  }

  insert(index, item) {
    let newVector = [];

    for (let i = 0; i < this.capacity; i++) {
        if (i < index) {
            newVector[i] = this.vector[i];
        } else if (i === index) {
          newVector[i] = item;
        } else {
          newVector.push(this.vector[i - 1]);
        }
    }

    this.vector = newVector;
    this.size = size++;
  }

  _expand(newCapacity) {
    if (newCapacity < this.capacity) {
      throw new Error('New capacity must be greater than current capacity');
    }

    let newArray = [];

    for (let i = 0; i < newCapacity; i++) {
      if (i < this.size) {
        newArray[i] = this.vector[i];
      } else {
        newArray[i] = null;
      }
    }

    this.vector = newArray;
    this.capacity = newCapacity;
  }

  _contract(newCapacity) {
    if (newCapacity <= this.size) {
      throw new Error('New capacity much be greater than the current size');
    }

    let newArray = [];

    for (let i = 0; i < newCapacity; i++) {
      if (i < this.size) {
        newArray[i] = this.vector[i];
      } else {
        newArray[i] = null;
      }
    }

    this.vector = newArray;
    this.capacity = newCapacity;
  }
}

const client = new Vector(4);
client.push('test');
client.push('test2');
client.push('third');
client.push('fourth');
client.push('fifth');
console.log(client.pop());
console.log(client.pop());
console.log(client.pop());
console.log(client.pop());
console.log(client.pop());
