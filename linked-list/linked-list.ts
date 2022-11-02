class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value: T): boolean {
    const newNode = new ListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;

    return true;
  }

  pop() {
    // if the list is empty return false
    if (!this.head) {
      return false;
    }

    if (this.size === 1) {
      this.head = null;
      this.size--;
      return true;
    }

    let current = this.head;
    let prevNode: ListNode<T> | null = null;

    while (current.next) {
      prevNode = current;
      current = current.next;
    }
    prevNode!.next = null;

    this.size--;
    return true;
  }

  shift() {
    if (!this.head) {
      return false;
    }

    let prevHead: ListNode<T> | null = this.head;
    this.head = prevHead.next;
    prevHead.next = null;
    this.size--;
    return true;
  }

  unshift(value: T) {
    const newNode = new ListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
    }
    let prevHead = this.head;
    newNode.next = prevHead;
    this.head = newNode;
    this.size++;
    return true;
  }

  getAtIndex(i: number) {
    if (i > this.size || i < 1) {
      return null;
    }

    if (i === 1) {
      return this.head;
    }
    let counter = 1;
    let current = this.head;
    while (counter < i) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  setAtIndex(i: number, value: T) {
    if (i > this.size || i < 1) {
      return null;
    }

    if (i === 1) {
      this.unshift(value);
    }

    if (i === this.size) {
      this.push(value);
    }

    let counter = 1;
    let prevNode: ListNode<T> | null = null;
    let current = this.head;

    while (counter <= i) {
      prevNode = current;
      current = current!.next;
      counter++;
    }
    const newNode = new ListNode<T>(value);
    prevNode!.next = newNode;
    newNode.next = current;
    this.size++;

    return true;
  }

  find(value: T) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      if (value === current.value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

const ll = new LinkedList();
ll.push(22);
ll.push('conor');
ll.unshift(11);
ll.getAtIndex(3);

console.log(ll);
