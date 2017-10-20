import Quicksort from './algorithms/Quicksort';
import InsertionSort from './algorithms/InsertionSort';
import SelectionSort from './algorithms/SelectionSort';
import BubbleSort from './algorithms/BubbleSort';
import Mergesort from './algorithms/Mergesort';
import AnagramPalindrome from './algorithms/AnagramPalindrome';
import SortingBenchmarks from './algorithms/SortingBenchmarks';

import LinkedList from './data-structures/LinkedList';
import Queue from './data-structures/Queue';
import BinarySearchTree from './data-structures/BinarySearchTree';
import MaxHeap from './data-structures/MaxHeap';

import runCode from './utils/runCode';
import editor from './utils/editorConfig';
import onkeyup from './utils/keyBindings';
import parseTime from './utils/parseTime';
import hijackConsole from './utils/hijackConsole';
import { nextExample, previousExample } from './utils/navigation';
import resizeablePanes from './utils/resize';

resizeablePanes();

/* TODO:
 * 
 */

export const CODE = {
  Quicksort,
  InsertionSort,
  SelectionSort,
  BubbleSort,
  Mergesort,
  AnagramPalindrome,
  SortingBenchmarks,
  LinkedList,
  Queue,
  BinarySearchTree,
  MaxHeap
};

// INITIALIZE APP
export let currentNode = 'Quicksort';
editor.setValue(CODE.Quicksort);

// DOM ELEMENTS
const next = document.getElementById('next');
const run = document.getElementById('run-code');
const output = document.getElementById('output');
const previous = document.getElementById('previous');
export const selectors = document.querySelectorAll('.sidebar--menu--detail');

// EVENT LISTENERS:
run.addEventListener('click', function() {
    runCode();
});

// bind shortcut keys
document.addEventListener('keypress', onkeyup);

// select example from sidebar
selectors.forEach(selector => {
  selector.addEventListener('click', function(e) {
    editor.setValue(CODE[e.target.id]);
    setCurrentNode(e.target.id);

    // fold binary search tree helpers by default
    if (currentNode === 'BinarySearchTree') {
        editor.foldCode(5);
        editor.foldCode(13);
    }
  });
});

// advance one example w/ "next" button
next.addEventListener('click', nextExample);

// go back one example w/ "previous" button
previous.addEventListener('click', previousExample);

// UTILITY
export function setCurrentNode(newNode) {
    currentNode = newNode;
}
