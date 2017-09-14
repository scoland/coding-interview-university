// Hash implementation with linear probing
// Key values are assumed to be strings
// This solution uses linear probing as a collision solution, which is rather dumb

class Hash {
  constructor(size) {
    this.table = [];
    this.m = size;
    for (let i = 0; i < size; i++) {
      // Undefined means this bucket has always been empty
      this.table[i] = undefined;
    }
  }

  hash(key, m) {
    let initial = 0;

    for (let i = 0; i < key.length; i++) {
      initial = (initial << 4) ^ (initial >> 28) ^ key.charCodeAt(i);
    }

    return initial % m;
  }

  add(key, value) {
    let index = this.hash(key, this.m);
    let firstIndex = index;

    while ((this.table[index]) && (this.table[index][0] !== key)) {
      index++;
      if (index >= this.m) {
        index = 0;
      }

      if (index === firstIndex) {
        throw new Error('Hash table is full');
      }
    }

    this.table[index] = [key, value];
  }
}

const hash = new Hash(3);
hash.add('abc', 'test');
hash.add('abc', 'dingus');
hash.add('cab', 'test');
hash.add('asldkfj', 'please');
hash.add('new', 'isfull');
console.dir(hash.table);
