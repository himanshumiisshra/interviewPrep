//1. first last occurance


"use strict";
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstLastOccurrence = exports.findLastOccur = exports.findFirstOccur = void 0;
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// --------------------------------------------------------------------------------------------------------------------------------------------------
// ? Time complexity - O(Log N)
//? Space complexity - O(1)
function findFirstOccur(nums, target) {
    // Initialize the position to -1 (in case the target is not found)
    var pos = -1;
    // Initialize left and right pointers to the start and end of the array
    var left = 0;
    var right = nums.length - 1;
    // Calculate the initial mid-point
    var mid = left + Math.floor((right - left) / 2);
    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        if (nums[mid] === target) {
            // If the middle element is equal to the target, update the position and move left
            pos = mid;
            right = mid - 1;
        }
        else if (nums[mid] > target) {
            // If the middle element is greater than the target, adjust the right pointer
            right = mid - 1;
        }
        else {
            // If the middle element is less than the target, adjust the left pointer
            left = mid + 1;
        }
        // Recalculate the mid-point for the next iteration
        mid = left + Math.floor((right - left) / 2);
    }
    // Return the position where the target was found (or -1 if not found)
    return pos;
}
exports.findFirstOccur = findFirstOccur;
function findLastOccur(nums, target) {
    // Initialize the position to -1 (in case the target is not found)
    var pos = -1;
    // Initialize left and right pointers to the start and end of the array
    var left = 0;
    var right = nums.length - 1;
    // Calculate the initial mid-point
    var mid = left + Math.floor((right - left) / 2);
    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        if (nums[mid] === target) {
            // If the middle element is equal to the target, update the position and move right
            pos = mid;
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            // If the middle element is greater than the target, adjust the right pointer
            right = mid - 1;
        }
        else {
            // If the middle element is less than the target, adjust the left pointer
            left = mid + 1;
        }
        // Recalculate the mid-point for the next iteration
        mid = left + Math.floor((right - left) / 2);
    }
    // Return the position where the target was found (or -1 if not found)
    return pos;
}
exports.findLastOccur = findLastOccur;
function findFirstLastOccurrence(nums, target) {
    // Find the first and last occurrences of the target using the two helper functions
    var first = findFirstOccur(nums, target);
    var last = findLastOccur(nums, target);
    // Return an array containing the first and last occurrences
    return [first, last];
}
exports.findFirstLastOccurrence = findFirstLastOccurrence;
var findOccurrenceArr = [5, 7, 7, 8, 8, 8, 10];
console.log(findFirstLastOccurrence(findOccurrenceArr, 7));


//2. peak in mountain arr

// An array arr is a mountain if the following properties hold:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
// You must solve it in O(log(arr.length)) time complexity.
// Example 1: Input: arr = [0,1,0] || Output: 1
// Example 2: Input: arr = [0,2,1,0] || Output: 1
// Example 3: Input: arr = [0,10,5,2] || Output: 1
// --------------------------------------------------------------------------------------------------------------------------------------------
function peakIndexInMountainArray(arr) {
    // Initialize a variable `start` to 0, representing the start index of the search range.
    var start = 0;
    // Initialize a variable `end` to the last index of the input array, representing the end index of the search range.
    var end = arr.length - 1;
    // Calculate the initial midpoint index of the search range.
    var mid = Math.floor(start + (end - start) / 2);
    // Start a while loop that continues as long as `start` is less than `end`.
    while (start < end) {
        // Check if the value at the midpoint of the array is less than the value at the next index.
        if (arr[mid] < arr[mid + 1]) {
            // If the condition is true, update the `start` variable to be one index to the right of the midpoint.
            start = mid + 1;
        }
        else {
            // If the condition is false, update the `end` variable to be the midpoint itself.
            end = mid;
        }
        // Recalculate the midpoint index based on the updated `start` and `end` values.
        mid = Math.floor(start + (end - start) / 2);
    }
    // Return the `start` index, which represents the peak index of the mountain array.
    return start;
}
var mountainArray = [0, 15, 25, 2];
console.log(peakIndexInMountainArray(mountainArray));


// 3. pivot in rotated array

// Pivot element, smallest element of the second array
// i/p = [7, 9, 1, 2, 3];
// 1st array [7, 9], 2nd array [1, 2, 3]
// Pivot is 1 and index is 2;
// --------------------------------------------------------------------------------------------------------------------------------------------
function pivotInRotatedArray(arr) {
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor(start + (end - start) / 2);
    while (start < end) {
        if (arr[mid] >= arr[0]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
        mid = Math.floor(start + (end - start) / 2);
    }
    return start;
}
var pivotArray = [7, 9, 1, 2, 3];
console.log(pivotInRotatedArray(pivotArray));

//4. search in rotated array
/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

? You must write an algorithm with O(log n) runtime complexity.

Input: nums = [4,5,6,7,0,1,2], target = 0 || Output: 4
Input: nums = [4,5,6,7,0,1,2], target = 3 || Output: -1
Input: nums = [1], target = 0 || Output: -1

--------------------------------------------------------------------------------------------------------------------------------------------
*/
function getPivot(arr) {
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor(start + (end - start) / 2);
    while (start < end) {
        if (arr[mid] >= arr[0]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
        mid = Math.floor(start + (end - start) / 2);
    }
    return start;
}
function BS(arr, s, e, target) {
    // Initialize left and right pointers to the start and end of the array
    var left = s;
    var right = e;
    // Calculate the initial mid-point
    var mid = left + Math.floor((right - left) / 2);
    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Check if the middle element is equal to the target
        if (arr[mid] === target) {
            // If found, return the index of the target
            return mid;
        }
        // If the middle element is greater than the target, adjust the right pointer
        if (arr[mid] > target) {
            right = mid - 1;
        }
        // If the middle element is less than the target, adjust the left pointer
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Recalculate the mid-point for the next iteration
        mid = left + Math.floor((right - left) / 2);
    }
    // If the target is not found, return 0 (or another suitable value)
    return 0;
}
function searchInRotatedArr(arr, target) {
    var pivot = getPivot(arr);
    if (target >= arr[pivot] && target <= arr[arr.length - 1]) {
        return BS(arr, pivot, arr.length - 1, target);
    }
    else {
        return BS(arr, 0, pivot - 1, target);
    }
}
var rotatedArr = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedArr(rotatedArr, 1));

//5. 