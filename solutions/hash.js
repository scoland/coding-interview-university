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

  exists(key) {
    // Here we only care about undefined buckets, null buckets we skip
    let index = this.hash(key, this.m);
    let firstIndex = index;
    while (this.table[index] !== undefined) {
      if (this.table[index] && (this.table[index][0] === key)) {
        return index;
      }
      index = (index + 1) % this.m;
      if (index === firstIndex) return false;
    }

    return false;
  }

  remove(key) {
    if (this.exists(key) === false) {
      throw new Error('Key to remove not found in table');
    }

    let index = this.hash(key, this.m);

    while (this.table[index][0] !== key) {
      index = (index + 1) % this.m;
    }

    this.table[index] = null;
  }
}

const hash = new Hash(3);
hash.add('abc', 'test');
hash.add('abc', 'dingus');
hash.add('cab', 'test');
hash.add('asldkfj', 'please');
hash.remove('cab');
console.dir(hash.table);
