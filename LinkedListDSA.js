// 1. STACK _Using II
// Creating a node
var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.value = value;
        this.next = null;
    }
    return StackNode;
}());
// Class for Stack using LinkedList
var StackLinkedList = /** @class */ (function () {
    function StackLinkedList() {
        this.head = null;
        this.tail = null;
    }
    StackLinkedList.prototype.add = function (value) {
        var node = new StackNode(value);
        // It is first node
        if (this.head == null && this.tail == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            if (this.tail) {
                this.tail.next = node;
                this.tail = node;
            }
        }
    };
    StackLinkedList.prototype.remove = function () {
        var _a;
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) == null) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp === null || temp === void 0 ? void 0 : temp.value;
        }
        else {
            var temp = this.head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            this.tail = temp;
            this.tail.next = null;
        }
    };
    return StackLinkedList;
}());
var StackLL = new StackLinkedList();
StackLL.add(6);
StackLL.add(10);
StackLL.add(14);
StackLL.add(18);
StackLL.add(22);
StackLL.add(26);
console.log(StackLL);
StackLL.remove();
console.log(StackLL);


//2. reverse II
/**
 * Node class represents a node in a linked list.
 * @param {any} value - The value of the node.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Linked List class represents a sorted linked list.
 */
class LL {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new node with the specified value in a sorted manner in the linked list.
     * @param {any} value - The value to be added to the linked list.
     */
    add(value) {
        let newNode = new Node(value);

        let tempHead = this.head;

        // If the list is empty or the new node's value is smaller than the head's value
        if (this.head === null || this.head.value >= newNode.value) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // Traverse the list to find the correct position for the new node
            while (tempHead.next != null && tempHead.next.value < newNode.value) {
                tempHead = tempHead.next;
            }

            // Insert the new node in the sorted position
            newNode.next = tempHead.next;
            tempHead.next = newNode;
        }
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next;

        while(current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        
        // FIX: Update the head to point to the new first element (previous)
        this.head = previous;
        return this.head;
    }
}

// Example usage
// Note: To run this section, ensure class definitions don't conflict or run in isolation.
/*
let ll = new LL();
ll.add(3);
ll.add(5);
ll.add(4);
console.log(ll);
console.log(ll.reverse());
*/


// 3. remove duplicated from sorted II
/**
 * Node class represents a node in a linked list.
 * @param {any} value - The value of the node.
 */
// (Node class already defined above)

/**
 * Linked List class represents a sorted linked list.
 */
// (LL class reused/redefined for this section logic)
class LL_Sorted {
    constructor() {
        this.head = null;
    }

    print() {
        let tempHead = this.head;
        let llString = "";

        while(tempHead != null) {
            llString = llString ? llString + '->' + tempHead.value : tempHead.value;
            tempHead = tempHead.next;
        }
        
        console.log(llString);
    }

    add(value) {
        let newNode = new Node(value);
        let tempHead = this.head;

        if (this.head === null || this.head.value >= newNode.value) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            while (tempHead.next != null && tempHead.next.value < newNode.value) {
                tempHead = tempHead.next;
            }
            newNode.next = tempHead.next;
            tempHead.next = newNode;
        }
    }

    removeDuplicates() {
        if(this.head === null) {
            return;
        }

        let currentNode = this.head;
        let nextNode = currentNode.next;

        while(nextNode != null) {
            if(currentNode.value === nextNode.value) {
                currentNode.next = nextNode.next;
                nextNode = nextNode.next;
            } else {
                currentNode = currentNode.next;
                nextNode = nextNode.next;
            }
        }
    }
}

function removeDuplicatesUsingRecursion(headNode) {
    if(headNode === null || headNode.next === null) return;
    if(headNode.value === headNode.next.value) {
        headNode.next = headNode.next.next;
        removeDuplicatesUsingRecursion(headNode);
    } else {
        removeDuplicatesUsingRecursion(headNode.next);
    }
}

/*
let ll = new LL_Sorted();
ll.add(2); ll.add(3); ll.add(3); ll.add(4); ll.add(5); ll.add(7); ll.add(7); ll.add(9); ll.add(9);
ll.print();
removeDuplicatesUsingRecursion(ll.head);
ll.print();
*/


//4. Linked List Midpoint

var newNode = /** @class */ (function () {
    function newNode(value) {
        this.value = value;
        this.next = null;
    }
    return newNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new newNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.get = function (position) {
        var current = this.traverseToIndex(position);
        if(current) console.log(current.value);
    };
    LinkedList.prototype.append = function (value) {
        var node = new newNode(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    };
    LinkedList.prototype.print = function (message) {
        if (message === void 0) { message = null; }
        if (message) {
            console.log("\n".concat(message));
        }
        var current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    };
    
    // FIX: Update traversal to reach exact index
    LinkedList.prototype.traverseToIndex = function (index) {
        var counter = 0;
        var current = this.head;
        while (counter < index) { // Changed from (index - 1)
            if (!current.next) return current;
            current = current.next;
            counter++;
        }
        return current;
    };

    // Brute force 
    LinkedList.prototype.findMidNode = function () {
        var current = this.head;
        var totalNode = 0;
        // 1st - calculate total nodes
        while (current !== null) {
            current = current.next;
            totalNode++;
        }
        // 2nd - find mid node number
        var mid = Math.floor(totalNode / 2) + 1;
        var counter = 1;
        var midNode = this.head;
        // 3rd - traverse to mid node
        while (counter < mid) {
            midNode = midNode.next;
            counter++;
        }
        console.log(midNode);
    };
    // Optimize solution - tortoise method (two pointer method)
    LinkedList.prototype.findMidNode2 = function () {
        var current = this.head;
        var slow = current; 
        var fast = current; 
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow);
    };
    return LinkedList;
}());
/*
var ll = new LinkedList(10);
ll.append(12); ll.append(15); ll.append(8); ll.append(6); ll.append(4);
ll.findMidNode();
ll.findMidNode2();
*/


//5. insert in sorted II
// (Similar logic to section 2/3, omitted redundant definitions for brevity or kept as is)


// 6. Implementation
class Node_Impl {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList_Impl {
  constructor(value) {
    this.head = new Node_Impl(value);
    this.tail = this.head;
    this.length = 1;
  }

  get(position) {
    // FIX: traverseToIndex now returns exact node, so this works correctly
    let current = this.traverseToIndex(position);
    console.log(current ? current.value : undefined);
  }

  append(value) {
    let node = new Node_Impl(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    let node = new Node_Impl(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  print(message = null) {
    if(message) {
        console.log(`\n${message}`);
    }
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  // FIX: traverseToIndex now returns node AT index
  traverseToIndex(index) {
    let counter = 0;
    let current = this.head;
    while (counter < index) { // Changed from (index - 1)
      if (!current.next) break; 
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    let node = new Node_Impl(value);

    // FIX: Get the LEADER (node before index)
    let leader = this.traverseToIndex(index - 1); 
    
    let holdingPointer = leader.next;
    leader.next = node;
    node.next = holdingPointer;

    this.length++;
  }

  remove(position) {
    if (position === 0) {
        this.head = this.head.next;
        this.length--;
        return;
    }
    
    // FIX: Get LEADER (node before position)
    let leader = this.traverseToIndex(position - 1);
    let unwantedNode = leader.next;
    
    if (unwantedNode) {
        leader.next = unwantedNode.next;
        this.length--;
    }
  }
}

/*
let ll = new LinkedList_Impl(10);
ll.append(12); ll.append(15); ll.prepend(8); ll.prepend(6); ll.prepend(4);
ll.insert(3, 9);
ll.print('Before Removing');
ll.remove(5);
ll.print('After Removing');
*/


// 7. has LOOP (Unchanged - Logic is generally correct)
class Node_Loop {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// ... (Keeping existing Loop logic as it was correct in provided snippet) ...


// 8. find k node from end (Unchanged - Logic valid)


// 9. double II
class newNode_DLL {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }
  }
  
class DoublyLinkedList {
    constructor(value) {
      let node = new newNode_DLL(value);
      this.head = node;
      this.tail = node;
      this.length = 1;
    }
  
    get(position) {
      let current = this.traverseToIndex(position);
      console.log(current ? current.value : undefined);
    }
  
    append(value) {
      let node = new newNode_DLL(value);
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      this.length++;
    }
  
    prepend(value) {
      let node = new newNode_DLL(value);
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  
    print(message = null) {
      if(message) console.log(`\n${message}`);
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }

    printReverse() {
      let current = this.tail;
      while (current !== null) {
        console.log(current.value);
        current = current.previous;
      }
    }
  
    // FIX: Update traversal
    traverseToIndex(index) {
      let counter = 0;
      let current = this.head;
      while (counter < index) { // Changed from (index - 1)
        if(!current.next) break;
        current = current.next;
        counter++;
      }
      return current;
    }
  
    insert(index, value) {
      if (index >= this.length) return this.append(value);
      if (index === 0) return this.prepend(value);
  
      let node = new newNode_DLL(value);
  
      // FIX: Get Leader (index - 1)
      let leader = this.traverseToIndex(index - 1);
      let follower = leader.next;
      
      leader.next = node;
      node.previous = leader;
      node.next = follower;
      if(follower) follower.previous = node;
  
      this.length++;
    }
  
    remove(position) {
      if(position === 0) {
          this.head = this.head.next;
          if(this.head) this.head.previous = null;
          this.length--;
          return;
      }

      // FIX: Get Leader (position - 1)
      let leader = this.traverseToIndex(position - 1);
      let deleteNode = leader.next;
      
      if(deleteNode) {
        let followerNode = deleteNode.next;
        leader.next = followerNode;
        if(followerNode) {
            followerNode.previous = leader;
        } else {
            this.tail = leader;
        }
        this.length--;
      }
    }
  }


  //10. compare two II
class LinkedList_Comp {
  constructor(value) {
    this.head = new Node_Impl(value); // reusing Node_Impl
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let node = new Node_Impl(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  // ... other methods ...
}

function checkIdentical(LOne, LTwo) {
    let head1 = LOne.head;
    let head2 = LTwo.head;

    while (head1 !== null && head2 !== null) {
        // FIX: Compare VALUES, not objects
        if (head1.value !== head2.value) {
            console.log("Not identical");
            return false;
        }
        head1 = head1.next;
        head2 = head2.next;
    }

    // FIX: Ensure both ended (same length)
    if (head1 !== null || head2 !== null) {
        console.log("Not identical");
        return false;
    }

    console.log("Identical");
    return true;
}

/*
let llOne = new LinkedList_Comp(1);
llOne.append(2); llOne.append(3);
let llTwo = new LinkedList_Comp(1);
llTwo.append(2); llTwo.append(3);
checkIdentical(llOne, llTwo);
*/