// bubble sort -- time complexity --O(n^2) ans space complexity --- O(1) -- swaps adjacent elements repeatedly -- stable


function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// console.log(bubbleSort([5, 3, 8, 1]));



// selection sort --- time complexity -- O(n^2) and space complexity -- O(1) -- finds min and places in correct position -- not stable

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let midIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[midIndex]) midIndex = j;
        }

        [arr[i], arr[midIndex]] = [arr[midIndex], arr[i]]
    }
    return arr;
}

// console.log(selectionSort([5, 3, 8, 1]));


// inserion sort -- time complexity -- O(n^2) and space complexity -- O(1) -- builds sorted list one at a time -- stable

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i], j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// console.log(insertionSort([5, 3, 8, 1]));


// merge Sort -- time complexity -- O(n log n) and space complexity -- O(n) -- divides ,sorts and merge arrays -- stable

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return result.concat(left, right);
}
// console.log(mergeSort([5, 3, 8, 1]));

//quick sort -- time complexity -- O(n log n) and space complexity -- O(log n) --divides array using pivot -- not stable

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        (arr[i] < pivot ? left : right).push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([5, 3, 8, 1]));