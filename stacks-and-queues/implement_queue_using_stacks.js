/**
 * Approaches
* (Also explained in the code)
* Initialization:

* We have two stacks, s1 and s2, where s1 acts as the primary stack for enqueue operations, and s2 helps in reversing the order of elements for efficient dequeuing.
Enqueue Operation (Push):

* When a new element is pushed into the queue (push operation):
* All elements from s1 are popped and pushed onto s2. This effectively reverses the order of elements.
* The new element is pushed onto the now-empty s1.
* Finally, elements are popped from s2 and pushed back onto s1 to maintain the original order.
* Dequeue Operation (Pop):

* When an element is dequeued (pop operation):
* The top element from s1 is directly popped.
* Peek Operation:

* The top element of s1 is returned for the peek operation.
* Empty Check:

* The empty operation checks whether s1 is empty.
* Complexity
* Time complexity:
* Enqueue (push): O(n)
* Dequeue (pop): O(1)
* Peek (peek): O(1)
* Empty Check (empty): O(1)
* (where n is the number of elements in the queue.)

* Space complexity:
* O(n)
 */

class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(x);
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
  }

  pop() {
    return this.s1.pop();
  }

  peek() {
    return this.s1[this.s1.length - 1];
  }

  empty() {
    return this.s1.length === 0;
  }
}
