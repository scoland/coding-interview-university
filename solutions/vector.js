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

  _expand(newCapacity) {
    let newArray = [];

    if (newCapacity < this.capacity) {
      throw new Error('New capacity must be greater than current capacity')
    }

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
