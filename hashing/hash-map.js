class ListNode {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {
  constructor() {
    this.size = 19997;
    this.mult = 12582917;
    this.arr = new Array(this.size);
  }

  hash(key) {
    return (key * this.mult) % this.size;
  }

  put(key, value) {
    this.remove(key);
    let h = this.hash(key);
    let node = new ListNode(key, value, this.data[h]);
    this.data[h] = node;
  }

  get(key) {
    let h = this.hash(key);
    let node = this.data[h];
    while (node) {
      if (node.key === key) return node.val;
      node = node.current;
    }
    return -1;
  }

  remove(key) {
    let h = this.hash(key);
    let node = this.data[h];
    let prev = null;
    if (!node) return;
    if (node.key === key) {
      this.data[h] = node.next;
      node.next = null;
    }

    while (node) {
      if (node.key === key) {
        prev.next = node.next;
        node.next = null;
        return;
      }
      prev = node;
      node = node.next;
    }
  }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
