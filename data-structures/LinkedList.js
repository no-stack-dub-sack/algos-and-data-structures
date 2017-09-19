export default
`/**
 * Singly-Linked List with the following functionality:
    * head => first el in List
    * size => size of List
    * add => adds element to List
    * addAt => adds element at specific index
    * remove => removes element from List
    * removeAt => removes element at specific index
    * indexOf => index of a given element
    * elementAt => elementAt at specific index
    * isEmpty => true || false
 */

class Node {
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.headNode = null;
    }


    head() {
        return this.headNode;
    }


    get size() {
        return length;
    }


    indexOutOfScope(index) {
        if (index < 0 || index >= this.size)
        {
            return true;
        }

        return false;
    }


    add(el) {
        var next = new Node(el);
        var currentNode = this.headNode;
        if (!currentNode)
        {
            this.headNode = next;
        }

        else
        {
            while (currentNode.next)
            {
                currentNode = currentNode.next;
            }

            currentNode.next = next;
        }

        length++;
    }


    addAt(index, el) {
        if (this.indexOutOfScope(index))
        {
            return false;
        }

        var currentNode = this.headNode, previousNode;
        var currentIndex = 0;
        var next = new Node(el);
        if (index === 0)
        {
            next.next = this.headNode;
            this.headNode = next;
        }

        else
        {
            while (currentIndex < index)
            {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }

            previousNode.next = next;
            next.next = currentNode;
            currentNode = next;
        }

        length++;
    }


    remove(el) {
        var currentNode = this.headNode, previousNode;

        if (currentNode.el === el)
        {
            this.headNode = currentNode.next;
        }

        else
        {
            while (currentNode.el !== el)
            {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
    }


    removeAt(index) {
        if (this.indexOutOfScope(index))
        {
            return null;
        }

        var currentNode = this.headNode, previousNode;
        var currentIndex = 0;
        length--;

        if (index === 0) {
            previousNode = this.headNode;
            this.headNode = currentNode.next;
            return previousNode.el;
        }

        else
        {
            while (currentIndex < index)
            {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }

            previousNode.next = currentNode.next;
            return currentNode.el;
        }
    }


    indexOf(el) {
        var count = 0;
        var currentNode = this.headNode;
        if (!currentNode) return -1;

        while (el !== currentNode.el)
        {
            if (currentNode.next === null)
            {
                return -1;
            }
            currentNode = currentNode.next;
            count++;
        }

        return count;
    }


    elementAt(index) {
        if (this.indexOutOfScope(index))
        {
            return null;
        }

        var currentIndex = 0;
        var currentNode = this.headNode;

        while (currentIndex < index)
        {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode.el;
    }


    isEmpty(num) {
        if (!this.headNode)
        {
           return true;
        }

        return false;
    }
}


var list = new LinkedList();

list.add('Planes');
list.add('Trains');
list.add('Automobiles');
list.add('Magic Carpets');
console.log(list.head());
console.log(list.indexOf('Trains'));
console.log(list.indexOf('Trucks'));
console.log(list.size);
`;
