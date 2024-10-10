class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;       
    }

    this.tail.next = node;    
    this.tail = node;
    this.length++;

    return this;
  
  } 
  
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.length++;

    return this;
  }

  size() {
    return this.length;
  }
  
  printHead() {
    return this.head;
  }

  printTail() {
    return this.tail;
  }

  at(index) {

    if (this.length === 0 || this.length < index || index < 0) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;      
    }

    return current;
  }

  pop() {
    if (this.length === 0) {
      return "List is empty!";
    }  
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }

    let current = this.head;    

    while (current.next !== this.tail) {
      current = current.next;      
    }    
    current.next = null;
    this.tail = current;
    this.length--;    
    return this;
  }

  contains(value) {
    if (this.length === 0) {
      return "List is empty!";
    }

    let current = this.head;
    
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value) {
    if (this.length === 0) {
      return "List is empty!";
    }

    let current = this.head 
    let index = 0;

    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return false;
  }
}

let list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
// list.prepend(0);
// list.prepend(-1);

console.log(JSON.stringify(list));
console.log(list.contains(10));


