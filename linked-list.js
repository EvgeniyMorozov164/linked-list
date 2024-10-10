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

    if (!this.head || !this.tail) {
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

}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(8);
list.prepend(9);
console.log(list);
console.log(list.size());