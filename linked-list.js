/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(this.head){
      newNode.next = this.head;
    }
    this.head = newNode;
    if(!this.tail) this.tail = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head){
      throw new Error("List is empty.");
    } 

    const popped = this.tail.val;
    if(this.length === 1){
      this.head = this.tail = null;
      this.length -=1;
      return popped;
    } 
    //traverse to the end of the list where next before is not null:
    let current = this.head;
    let after = current.next;
    while (after.next!==null) {
      current = after;
    }
    this.length -= 1;
    this.tail = current;
    return popped;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length===0){
      throw new Error("List is empty.");
    } 

    const popped = this.head.val;
    if(this.length===1){
      this.head = this.tail = null;
      this.length -=1;
      return popped;
    }

    this.head = this.head.next;
    this.length -=1;
    return popped;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0) throw new Error("Invalid index");
    let counter = 0;
    let current = this.head;
    while (counter < idx && current !== null){
      current = current.next;
      counter++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0) throw new Error("Invalid index");
    let counter = 0;
    let current = this.head;
    while (counter < idx && current !== null){
      current = current.next;
      counter++;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx < 0) throw new Error("Invalid index");
    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);
    let counter = 0;
    let current = this.head;
    //this while statement makes sure that the node before the new insert is found.
    while (counter < idx - 1){
      current = current.next;
      counter++;
    }
    const newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length || idx < 0) throw new Error("Invalid index");
    if(idx === 0) return this.shift();
    if(idx === this.length-1) return this.pop();
    let counter = 0;
    let current = this.head;
    while (counter < idx){
      current = current.next;
      counter++;
    }
    current.next = current.next.next;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length===0) return 0;
    let current = this.head;
    let sum = 0;
    while(current){
      sum += current.val;
      current = current.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
