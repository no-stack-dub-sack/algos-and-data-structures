export default
`// MERGESORT / MERGE
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var left = arr.slice(0, arr.length/2);
    var right = arr.slice(arr.length/2);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var results = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] <= right[ir]) {
            results.push(left[il++]);
        } else {
            results.push(right[ir++]);
        }
    }

    return results.concat(left.slice(il), right.slice(ir));
}



// QUICKSORT / PARTITION
function quickSort(arr, low = 0, high = arr.length-1) {

    if (arr.length > 1) {

        var index = partition(arr, low, high);

        if (low < index - 1) {
            quickSort(arr, low, index-1);
        }

        if (high > index) {
            quickSort(arr, index, high);
        }
    }

    return arr;
}

function partition(arr, low, high) {
    var pivot = arr[Math.floor((low+high)/2)],
        i = low,
        j = high;

    while (i <= j) {

        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            j--;
            i++;
        }

    }

    return i;
}



// BUBBLE SORT
function bubbleSort(arr) {
    var swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                swapped = true;
            }
        }
    }

    return arr;
}



// SELECTION SORT
function selectionSort(arr) {
    var pointer = 0;
    while (pointer < arr.length) {
        var min = arr[pointer], swapIdx;
        for (var i = pointer; i < arr.length; i++) {
            if (arr[i] <= min) {
                min = arr[i];
                swapIdx = i;
            }
        }

        swap(arr, pointer, swapIdx);
        pointer++;
    }

    return arr;
}



// INSERTION SORT
function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var j = i+1;
        while (arr[j] < arr[j-1]) {
            swap(arr, j, j-1);
            j--;
        }
    }

    return arr;
}



// UTILITY FUNCTIONS:

// swaps array items
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// generates a randomized array
// containing integers from 0 to n-1
function randomizeArray(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n));
    }

    return arr;
}

// parseTime utility
function parseTime(start, end) {
    return parseInt(end - start).toString() + 'ms';
}

// BENCHMARKS:

{
    let start = window.performance.now();
    mergeSort(randomizeArray(5000));
    let end = window.performance.now();
    console.log('Mergesort: ' + parseTime(start, end)); // ~10ms
}{
   let start = window.performance.now();
   quickSort(randomizeArray(5000));
   let end = window.performance.now();
   console.log('Quicksort: ' + parseTime(start, end)); // ~5ms
}{
   let start = window.performance.now();
   bubbleSort(randomizeArray(5000));
   let end = window.performance.now();
   console.log('Bubble Sort: ' + parseTime(start, end)); // ~325ms
}{
   let start = window.performance.now();
   selectionSort(randomizeArray(5000));
   let end = window.performance.now();
   console.log('Selection Sort: ' + parseTime(start, end)); // ~20ms
}{
   let start = window.performance.now();
   insertionSort(randomizeArray(5000));
   let end = window.performance.now();
   console.log('Insertion Sort: ' + parseTime(start, end)); // ~80ms
}{
   // Array.sort is implemented w/ a highly optimized merge sort in most engines
   let start = window.performance.now();
   randomizeArray(5000).sort((a, b) => a > b);
   let end = window.performance.now();
   console.log('Array.sort: ' + parseTime(start, end)); // ~2ms WOW!!!
}
`;
