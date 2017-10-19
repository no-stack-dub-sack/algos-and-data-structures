export default
`class MaxHeap {
    constructor() {
        this.heap = [];
        this.length = 0;
    }


    insert(node) {
        this.heap.push(node);
        this.length++;

        var swap = (node, nodeIdx) => {

            var parentIdx = Math.floor((nodeIdx - 1) / 2);
            var parent = this.heap[parentIdx];

            if (parent < node) {
                this.heap[parentIdx] = node;
                this.heap[nodeIdx] = parent;
                swap(node, parentIdx);
            }
        };

        if (this.length > 1) {
            return swap(node, this.length-1);
        }
    }


    remove() {
        if (!this.size) {
            return null;
        }

        var max = this.heap.shift();

        if (this.size > 1) {
            this.heap.unshift(this.heap.pop());
        }

        var swap = (node, nodeIdx = 0) => {
            var childIdx;
            if (this.size === 2) {
                childIdx = 1;
            } else if (this.heap[2 * nodeIdx + 1] > this.heap[2 * nodeIdx + 2]) {
                childIdx = 2 * nodeIdx + 1;
            } else {
                childIdx = 2 * nodeIdx + 2;
            }

            if (node < this.heap[childIdx]) {
                this.heap[nodeIdx] = this.heap[childIdx];
                this.heap[childIdx] = node;
                return swap(node, childIdx);
            }

            return max;

        };

        return swap(this.heap[0]);
    }


    print() {
      console.log(this.heap);
    }


    get size() {
        return this.heap.length;
    }
}

var heap = new MaxHeap();

heap.insert(7);
heap.insert(10);
heap.insert(14);
heap.insert(32);
heap.insert(2);
heap.insert(64);
heap.insert(37);

heap.print();
console.log(\`\\nremove \${heap.remove()}\\n\\n\`);
heap.print();
console.log(\`\\nremove \${heap.remove()}\\n\\n\`);
heap.print();
`;