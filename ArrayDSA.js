//1.  Two sum. 
// --// Given an array of integers twoSumArr and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Define an array of numbers
var twoSumArr = [1, 3, 7, 9, 2];
// Brute force approach to find two numbers that add up to a target.
// Time Complexity: O(N^2) || Space Complexity: O(1)
function twoSum(arr, target) {
    // Take each element from the array
    for (var i = 0; i < arr.length; i++) {
        // Find the complement for each element
        var compliment = target - arr[i];
        // Iterate through the array to find the complement
        for (var j = i; j < arr.length; j++) {
            // If the complement is found in the array, log the ith index, jth index and break the loop
            if (arr[j] === compliment) {
                console.log(i, j);
                return;
            }
        }
    }
    // If no solution is found, log null
    console.log(null);
}
// Optimal solution to find two numbers that add up to a target.
// Time Complexity: O(N) || Space Complexity: O(N)
function twoSum1(arr, target) {
    // Initialize the Map
    var numMap = new Map();
    // Iterate through each element in the array
    for (var i = 0; i < arr.length; i++) {
        // Find the complement
        var complement = target - arr[i];
        // Check if the complement is in the map; if it is, return its index and the current element's index
        if (numMap.get(complement) !== undefined) {
            console.log(numMap.get(complement), i);
            return;
        }
        // If the complement is not in the map, store the current element as a key and its index as a value in numMap
        numMap.set(arr[i], i);
    }
    // If no solution is found, log null
    console.log(null);
}
// Call the brute force function to find the indices of two numbers that add up to 5
twoSum(twoSumArr, 5);
// Call the optimal solution function to find the indices of two numbers that add up to 5
twoSum1(twoSumArr, 5);


// 2. SORTING
// ? TAG - EASY
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Example 1:
// Input: arr[]= {0 2 1 2 0}
// Output: 0 0 1 2 2
// Explanation: 0s 1s and 2s are segregated into ascending order.
// Example 2:
// Input: arr[] = {0 1 0}
// Output: 0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order.
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
// -------------------------------------------------------------------------------------------------------------------
// BRUTE FORCE SOLUTION
// Time complexity: O(N)
// Space complexity: O(1)
function sort012(arr) {
    // Initialize count variables for 0s, 1s, and 2s.
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    // Count the occurrences of 0s, 1s, and 2s in the array.
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1] === 0) {
            count0++;
        }
        else if (arr[i_1] === 1) {
            count1++;
        }
        else {
            count2++;
        }
    }
    // Initialize an index variable.
    var i = 0;
    // Fill the array with 0s first, followed by 1s, and then 2s.
    while (count0 > 0) {
        arr[i] = 0;
        i++;
        count0--;
    }
    while (count1 > 0) {
        arr[i] = 1;
        i++;
        count1--;
    }
    while (count2 > 0) {
        arr[i] = 2;
        i++;
        count2--;
    }
    // Output the sorted array.
    console.log(arr);
}
// ---------------------------------------------------------------------------------------------------------------------
// OPTIMAL SOLUTION (Using Dutch National Flag Algorithm (Checkout guide/dutch_national_flag_algo.md)) 
// Time complexity - O(N);
// Space complexity - O(1);
function sort012Again(arr) {
    var _a, _b;
    var low = 0; // Initialize a pointer for 0s at the beginning of the array
    var mid = 0; // Initialize a pointer for 1s in the middle of the array
    var high = arr.length; // Initialize a pointer for 2s at the end of the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[mid] === 0) { // If the current element is 0, move it to the low section
            _a = [arr[mid], arr[low]], arr[low] = _a[0], arr[mid] = _a[1]; // Swap arr[low] and arr[mid]
            low++; // Move the low pointer to the right
            mid++; // Move the mid pointer to the right
        }
        if (arr[mid] === 1) { // If the current element is 1, it's in the correct place (mid)
            mid++; // Move the mid pointer to the right
        }
        if (arr[mid] === 2) { // If the current element is 2, move it to the high section
            _b = [arr[high], arr[mid]], arr[mid] = _b[0], arr[high] = _b[1]; // Swap arr[mid] and arr[high]
            high--; // Move the high pointer to the left
        }
    }
}
// ---------------------------------------------------------------------------------------------------------------------
var arr012 = [0, 2, 1, 2, 0];
var arr012Again = [0, 2, 1, 2, 0];
sort012(arr012);
sort012Again(arr012Again);


//3. Reverse String
// Define a string variable
var str = "Hello world!";
// Log the original string to the console
console.log(str);
// Function to reverse a string using a loop
// Time complexity - O(n)
// Space complexity - O(n)
function reverse(s) {
    // Convert the string into an array of characters
    var strArr = s.split("");
    // Initialize an empty array to store the reversed characters
    var reverseArr = [];
    // Iterate over the characters in reverse order
    for (var i = strArr.length - 1; i >= 0; i--) {
        // Append each character to the reversed array
        reverseArr.push(strArr[i]);
    }
    // Join the reversed characters to form the reversed string
    var reverseStr = reverseArr.join("");
    // Log the reversed string to the console
    console.log(reverseStr);
}
// Call the reverse function with the input string
reverse(str);
// Function to reverse a string in-place using a loop
// Time complexity - O(n)
// Space complexity - O(1)
function reverseStr1(str) {
    // Convert the string into an array of characters
    var strArr = str.split("");
    // Calculate the length of the string
    var length = strArr.length - 1;
    // Iterate over the first half of the characters
    for (var i = 0; i < (length + 1) / 2; i++) {
        // Swap characters between the beginning and end of the string
        var temp = strArr[i];
        strArr[i] = strArr[length];
        strArr[length] = temp;
        // Update the end index
        length--;
    }
    // Join the reversed characters to form the reversed string
    var reverseStr = strArr.join("");
    // Log the reversed string to the console
    console.log(reverseStr);
}
// Call the reverseStr1 function with the input string
reverseStr1(str);
// Function to reverse a string using built-in JavaScript methods
function reverse2(str) {
    // Use split, reverse, and join methods to reverse the string
    console.log(str.split("").reverse().join(""));
}
// Call the reverse2 function with the input string
reverse2(str);

//4. Remove duplicates from an sorted ARRAY
var sorted_array = [1, 1, 2];
function removeDuplicates(nums) {
    var unique = [];
    var number = -101;
    for (var i = 0; i < nums.length; i++) {
        if (number !== nums[i]) {
            unique.push(nums[i]);
        }
        number = nums[i];
    }
    return unique.length;
}
;
var res = removeDuplicates(sorted_array);
console.log(res);



// 5. Rain water trapping
// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9
// --------------------------------------------------------------------------------------------------------------------
// BRUTE FORCE APPROACH
// Time complexity - O(n);
// Space complexity - O(n);
function trappedWater(height) {
    // Get the length of the input array.
    var n = height.length;
    // Check if there are fewer than 3 elements, which cannot trap water.
    if (n <= 2)
        return 0; // Not enough elements to trap water.
    // Initialize arrays to store maximum heights to the left and right of each element.
    var leftMax = new Array(n);
    var rightMax = new Array(n);
    // Initialize the leftMax array.
    leftMax[0] = height[0];
    // Calculate the maximum height to the left of each element.
    for (var i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    // Initialize the rightMax array.
    rightMax[n - 1] = height[n - 1];
    // Calculate the maximum height to the right of each element.
    for (var i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    // Initialize a variable to store the total trapped water.
    var trappedWater = 0;
    // Calculate trapped water for each element.
    for (var i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    // Return the total trapped water.
    return trappedWater;
}
// --------------------------------------------------------------------------------------------------------------------
// OPTIMAL SOLUTION
// Time complexity - O(n);
// Space complexity - O(1)
function trappedWaterOptimized(height) {
    // Initialize variables to track maximum trapped water, left and right pointers.
    var maxWater = 0;
    var left = 0;
    var right = height.length - 1;
    // Initialize variables to track the maximum height on the left and right.
    var leftMax = height[left];
    var rightMax = height[right];
    // Continue until the left pointer is less than the right pointer.
    while (left < right) {
        // If the left side is lower, move the left pointer to the right.
        if (leftMax < rightMax) {
            left++;
            // Update the leftMax if the current height is higher.
            leftMax = Math.max(leftMax, height[left]);
            // Add the trapped water between leftMax and the current height to maxWater.
            maxWater = maxWater + leftMax - height[left];
        }
        else {
            // If the right side is lower or equal, move the right pointer to the left.
            right--;
            // Update the rightMax if the current height is higher.
            rightMax = Math.max(rightMax, height[right]);
            // Add the trapped water between rightMax and the current height to maxWater.
            maxWater = maxWater + rightMax - height[right];
        }
    }
    // Return the maximum trapped water.
    return maxWater;
}
var heightArr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trappedWater(heightArr));
console.log(trappedWaterOptimized(heightArr));


//6. move negative element
//? Tag - EASY
// Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of 
// array without changing the order of positive element and negative element.
// Example 1:
// Input : arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// Output : 1  3  2  11  6  -1  -7  -5
// Example 2:
// Input : arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
// Output : 7  9  10  11  -5  -3  -4  -1
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// Time complexity - O(N)
// Space complexity - O(N)
function moveNegativeElement(arr) {
    // Initialize an empty array 'a' to hold the positive or zero elements
    var a = [];
    // Iterate through the input array 'arr'
    for (var i = 0; i < arr.length; i++) {
        // If the current element is greater than or equal to 0 (non-negative), add it to 'a'
        if (arr[i] >= 0) {
            a.push(arr[i]);
        }
    }
    // Iterate through the input array 'arr' again
    for (var i = 0; i < arr.length; i++) {
        // If the current element is negative, add it to 'a' (appending negative elements at the end)
        if (arr[i] < 0) {
            a.push(arr[i]);
        }
    }
    // Iterate through the input array 'arr' one more time
    for (var i = 0; i < arr.length; i++) {
        // Copy the elements from 'a' back to 'arr' to rearrange them
        arr[i] = a[i];
    }
    // Print the modified 'arr'
    console.log(arr);
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------
var moveNegEleArr = [1, -1, 3, 2, -7, -5, 11, 6];
moveNegativeElement(moveNegEleArr);


//7. merge sorted array

// --------------------------------------------------------------------------------------------------------------------
// BRUTE FORCE APPROACH
// Time Complexity - O(n+m), where n is the length of the arr1 and m is the length of the arr2
// Space Complexity - O(n+m), where n is the length of the array1 and m is the length of the array2
function mergeSortedArrays(arr1, arr2) {
    // Initialize an empty array to store the merged result
    var mergeArr = [];
    // Initialize pointers for both input arrays
    var i = 0;
    var j = 0;
    // Initialize variables to track the current elements being compared
    var arr1Item = arr1[i];
    var arr2Item = arr2[j];
    // Handle the case when arr1 is empty
    if (arr1.length === 0) {
        mergeArr = arr2;
    }
    // Handle the case when arr2 is empty
    if (arr2.length === 0) {
        mergeArr = arr1;
    }
    // Continue the merging process until we reach the end of both arrays
    while (arr1Item !== undefined || arr2Item !== undefined) {
        if (arr2Item === undefined || (arr1Item !== undefined && arr1Item < arr2Item)) {
            // If arr2Item is undefined or arr1Item is smaller, push arr1Item to the result
            mergeArr.push(arr1Item);
            i++; // Move the pointer in arr1
            arr1Item = arr1[i]; // Update the current arr1Item
        }
        else {
            // If arr1Item is undefined or arr2Item is smaller, push arr2Item to the result
            mergeArr.push(arr2Item);
            j++; // Move the pointer in arr2
            arr2Item = arr2[j]; // Update the current arr2Item
        }
    }
    return mergeArr; // Return the merged array
}
// --------------------------------------------------------------------------------------------------------------------
// OPTIMAL SOLUTION (without using extra space)
// Time Complexity - O(min(m, n)) + O(n log n) + O(m log m), where n is the length of arr1 and m is the length of arr2
// Explanation: O(min(m, n)) to traverse the array, O(n log n) to sort the arr1 and O(m log m) to sort the arr2
// Space Complexity - O(1), we are not using extra space
function mergeSortedArraysWithoutExtraSpace(arr1, arr2) {
    var _a;
    var left = arr1.length;
    var right = 0;
    while (left >= 0 && right < arr2.length) {
        if (arr1[left] > arr2[right]) {
            _a = [arr1[right], arr2[left]], arr1[left] = _a[0], arr2[right] = _a[1];
            left--;
            right++;
        }
        else {
            break;
        }
    }
    arr1.sort(function (a, b) { return a - b; });
    arr2.sort(function (a, b) { return a - b; });
    console.log(arr1, arr2);
}
var nums1 = [1, 12, 15, 26, 38];
var nums2 = [2, 13, 17, 30, 45];
var mergedArray = mergeSortedArrays(nums1, nums2);
console.log(mergedArray); // [0, 1, 2, 3, 5, 6, 7, 8, 9]
mergeSortedArraysWithoutExtraSpace(nums1, nums2);


// 8. implementation

var MyArray = /** @class */ (function () {
    function MyArray(length) {
        if (length === void 0) { length = 0; }
        this.length = length;
        this.data = {};
    }
    // Push element to the end of the array
    MyArray.prototype.push = function (value) {
        this.data[this.length] = value; // Assign the value to the next available index
        this.length++; // Increment the length
    };
    // Insert element at a specific index
    MyArray.prototype.insert = function (index, value) {
        if (index > this.length || index < 0) {
            console.log('Index out of bounds');
            return;
        }
        // Shift elements to the right to make space for the new element
        for (var i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = value; // Insert the value at the specified index
        this.length++; // Increment the length
    };
    // Remove and return the last element from the array
    MyArray.prototype.pop = function () {
        if (this.length === 0) {
            console.log('Array is empty');
            return undefined;
        }
        var lastItem = this.data[this.length - 1]; // Get the last item
        delete this.data[this.length - 1]; // Remove the last item from the data
        this.length--; // Decrement the length
        return lastItem; // Return the removed item
    };
    // Delete element at a specific index
    MyArray.prototype.remove = function (index) {
        if (index >= this.length || index < 0) {
            console.log('Index out of bounds');
            return;
        }
        // Shift elements to the left to fill the gap
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]; // Remove the last item
        this.length--; // Decrement the length
    };
    // Slice the array from start to end (exclusive)
    MyArray.prototype.slice = function (start, end) {
        if (start >= end || start < 0 || end > this.length) {
            console.log('Invalid slice indices');
            return;
        }
        var diff = end - start;
        // Shift elements to the left to overwrite the sliced portion
        for (var i = start; i < this.length - diff; i++) {
            this.data[i] = this.data[i + diff];
        }
        // Delete the extra elements at the end
        for (var i = this.length - 1; i >= this.length - diff - 1; i--) {
            delete this.data[i];
        }
        this.length = this.length - diff - 1; // Update the length
    };
    return MyArray;
}());
var arr = new MyArray();
console.log(arr);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
console.log(arr);
arr.push(10);
console.log(arr);
console.log(arr.pop());
console.log(arr.length);
arr.insert(4, 99);
console.log(arr);
arr.remove(2);
console.log(arr);
arr.push(100);
arr.push(200);
arr.push(300);
console.log(arr);
arr.slice(2, 4);
console.log(arr);


//9 . find min max
// Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.
// Example 1:
// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.
// Example 2:
// Input:
// N = 5
// A[]  = {1, 345, 234, 21, 56789}
// Output: 1 56789
// Explanation: minimum and maximum element of array are 1 and 56789.
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
// -------------------------------------------------------------------------------------------------------------------
// BRUTE FORCE APPROACH
// Time Complexity: O(N)
// Space Complexity: O(1)
function findMinMax(arr) {
    // Initialize variables to store the minimum and maximum values.
    var min = arr[0];
    var max = arr[0];
    // Iterate through the array starting from the second element (index 1).
    for (var i = 1; i < arr.length; i++) {
        // Check if the current element is smaller than the current minimum.
        if (min > arr[i]) {
            // If yes, update the minimum value.
            min = arr[i];
        }
        // Check if the current element is larger than the current maximum.
        if (max < arr[i]) {
            // If yes, update the maximum value.
            max = arr[i];
        }
    }
    // Print the minimum and maximum values.
    console.log(min, max);
}
var findMinMaxArr = [3, 2, 1, 56, 1000, 167];
var findMinMaxArr2 = [1, 345, 234, 21, 56789];
findMinMax(findMinMaxArr);
findMinMax(findMinMaxArr2);


//10. find array intersection

function findArrayIntersection(arr1, arr2) {
    var i = 0;
    var j = 0;
    var ans = [];
    arr1.sort(function (a, b) { return a - b; });
    arr2.sort(function (a, b) { return a - b; });
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        if (arr1[i] > arr2[j]) {
            j++;
        }
        if (arr1[i] === arr2[j]) {
            ans.push(arr1[i]);
            i++;
            j++;
        }
    }
    return ans;
}
var intersectionArr1 = [4, 9, 5];
var intersectionArr2 = [9, 4, 9, 8, 4];
var intersectionArr = findArrayIntersection(intersectionArr1, intersectionArr2);
console.log(intersectionArr);

//11. alternate swap
function alternateSwap(arr) {
    var _a;
    var i = 0;
    var j = 1;
    while (j < arr.length) {
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        i = i + 2;
        j = j + 2;
    }
    console.log(arr);
}
var alternateArr = [1, 3, 2, 7, 11]; // 3 1 7 2 11
alternateSwap(alternateArr);


// 12. length of longest substring
//? TAG - MEDIUM
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// ------------------------------------------------------------------------------------------------------------
// BRUTE FORCE APPROACH
// Time Complexity: O(N^2)
// Space Complexity: O(N)
function lengthOfLongestSubstring(str) {
    // If the input string has a length of 0 or 1, return its length
    if (str.length <= 1)
        return str.length;
    var longest = 0; // Initialize the length of the longest substring
    for (var left = 0; left < str.length; left++) {
        var strMap = new Map(); // Create a map to track characters in the current substring
        var currentLength = 0; // Initialize the length of the current substring
        for (var right = left; right < str.length; right++) {
            var currentChar = str[right]; // Get the current character
            if (strMap.has(currentChar)) {
                // If the character is already in the substring, break the loop
                break;
            }
            else {
                currentLength++; // Increment the length of the current substring
                strMap.set(currentChar, true); // Mark the character as seen
                longest = Math.max(longest, currentLength); // Update the longest substring length
            }
        }
    }
    return longest; // Return the length of the longest substring without repeating characters
}
// ------------------------------------------------------------------------------------------------------------
// OPTIMAL SOLUTION
// Time Complexity: O(N)
// Space Complexity: O(m), where m is the number of unique characters in the string
function lengthOfLongestSubstring2(str) {
    // If the input string has a length of 0 or 1, return its length
    if (str.length <= 1)
        return str.length;
    var left = 0;
    var longest = 0;
    var strMap = new Map();
    for (var right = 0; right < str.length; right++) {
        var currentChar = str[right];
        // Get the previous seen position of the current character
        var previousSeenPos = Number(strMap.get(currentChar));
        // If the previous seen position is greater than or equal to the current left pointer position
        if (previousSeenPos >= left) {
            // Update the left pointer to the position after the previous seen position
            left = previousSeenPos + 1;
        }
        // Update the map with the current character's position
        strMap.set(currentChar, right);
        // Calculate the length of the current substring and update the longest length if needed
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}
// ------------------------------------------------------------------------------------------------------------
var s = "abccbe";
console.log("Brute force approach: ", lengthOfLongestSubstring(s)); // Call brute force function
console.log("Sliding window approach: ", lengthOfLongestSubstring2(s)); // Call optimal solution function


//13. spiral matrix
// This problem has only one solution, which is optimal but interviewer ask in interview to check how you implement the 
// solution and how clean code you write

function printSpiralMatrix(size) {
    // Initialize an empty n x n matrix filled with zeros
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));

    let left = 0;
    let right = size - 1;
    let top = 0;
    let bottom = size - 1;
    let counter = 1;

    while (top <= bottom && left <= right) {
        // right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = counter++;
        }
        top++;

        // bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = counter++;
        }
        right--;

        // left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = counter++;
        }
        bottom--;

        // up
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = counter++;
        }
        left++;
    }

    console.log(matrix);
}

printSpiralMatrix(6);


