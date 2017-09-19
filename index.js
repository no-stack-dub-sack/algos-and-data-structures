import LinkedList from './src/data-structures/LinkedList';
import Quicksort from './src/algorithms/Quicksort';
import InsertionSort from './src/algorithms/InsertionSort';
import SelectionSort from './src/algorithms/SelectionSort';
import BubbleSort from './src/algorithms/BubbleSort';
import Mergesort from './src/algorithms/Mergesort';
import AnagramPalindrome from './src/algorithms/AnagramPalindrome';
import SortingBenchmarks from './src/algorithms/SortingBenchmarks';

import hijackConsole from './src/utils/hijackConsole';

const CODE = {
  LinkedList,
  Quicksort,
  InsertionSort,
  SelectionSort,
  BubbleSort,
  Mergesort,
  AnagramPalindrome,
  SortingBenchmarks
};

// INITIALIZE EDITOR:
var textarea = document.getElementById('editor');
var editor = CodeMirror.fromTextArea(textarea, {
  mode:  "javascript",
  lineNumbers: true,
  theme: 'monokai',
  keyMap: 'sublime',
  indentUnit: 4,
  matchBrackets: true,
  autoCloseBrackets: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers','CodeMirror-foldgutter']
});

editor.setValue(CODE.Quicksort);
var currentNode = 'Quicksort';

// var time = window.performance.now;
var next = document.getElementById('next');
var run = document.getElementById('run-code');
var output = document.getElementById('output');
var previous = document.getElementById('previous');
var selectors = document.querySelectorAll('.sidebar--menu--detail');

// evaluate editor's code
run.addEventListener('click', function() {
    output.innerHTML = `<p class="sidebar--output--messages--default-message">// console output:</p>`;
    eval(editor.getValue());
});

// select example
selectors.forEach(selector => {
  selector.addEventListener('click', function(e) {
    editor.setValue(CODE[e.target.id]);
    currentNode = e.target.id;
  });
});

// advance one example
next.addEventListener('click', function() {
    for (var i = 0; i < selectors.length; i++) {
        if (selectors[i].id === currentNode)  {
            if (i !== selectors.length-1) {
                currentNode = selectors[i+1].id;
                editor.setValue(CODE[currentNode]);
                break;
            } else {
                currentNode = 'Quicksort';
                editor.setValue(CODE.Quicksort);
            }
        }
    }
});

// retreat one example
previous.addEventListener('click', function() {
    for (var i = 0; i < selectors.length; i++) {
        if (selectors[i].id === currentNode)  {
            if (i !== 0) {
                currentNode = selectors[i-1].id;
                editor.setValue(CODE[currentNode]);
                break;
            } else {
                currentNode = selectors[selectors.length-1].id;
                editor.setValue(CODE[currentNode]);
                break;
            }
        }
    }
});

// utility function for benchmarking algos
function parseTime(start, end) {
    return parseInt(end - start).toString() + 'ms';
}
