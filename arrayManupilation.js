// 1. Find the Second Largest Number

// Input: [12, 35, 1, 10, 34, 1]
// Output: 34

// Hint: Keep track of largest and secondLargest.


function secondLargest(arr) {
  let largest = -Infinity, second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); // 34

// 2. Remove Duplicates From Array (Without Set)

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

// Hint: Use a temporary array + check includes().

function removeDuplicates(arr) {
  const unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

console.log(removeDuplicates([1,2,2,3,4,4])); // [1,2,3,4]

//alternative

function removeDuplicates(arr) {
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        console.log("ARRAY:[i]", arr[i], "Array:[j]:", arr[j])
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    arr.length = i + 1;
    return arr;
}
console.log(removeDuplicates([1,2,2,3,5,4,4]));


// 3. Reverse an Array In-Place

// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

// Hint: Use two pointers.

function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++; right--;
  }
  return arr;
}

console.log(reverseArray([1,2,3,4])); // [4,3,2,1]
//alternative

function reverseArrayRec(arr, left = 0, right = arr.length - 1) {
    // Base condition: stop when left >= right
    if (left >= right) return arr;

    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Recursive call, move pointers inward
    return reverseArrayRec(arr, left + 1, right - 1);
}

console.log(reverseArrayRec([1, 2, 3, 4])); 


// 4. Find the Missing Number

// Array contains numbers from 1 to n, one missing.

// Input: [1,2,4,5,6]
// Output: 3

// Hint: Sum formula → n*(n+1)/2 - sum(arr).

function findMissing(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const total = arr.reduce((a, b) => a + b, 0);
  return sum - total;
}

console.log(findMissing([1,2,4,5,6])); // 3


// 5. Count Frequency of Each Element

// Input: ["a","b","a","c","b","a"]
// Output: {a:3, b:2, c:1}

// Hint: Use an object/hash map.

function frequency(arr) {
  const map = {};
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  return map;
}

console.log(frequency(["a","b","a","c","b","a"])); 
// { a: 3, b: 2, c: 1 }


// 6. Move All Zeroes to End

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Hint: Two-pointer technique.

function moveZeroes(arr) {
  let index = 0;
  for (let num of arr) {
    if (num !== 0) arr[index++] = num;
  }
  while (index < arr.length) arr[index++] = 0;
  return arr;
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]


// 7. Check if Two Arrays are Anagrams (Order Doesn’t Matter)

// Input: [1,2,3] and [3,2,1]
// Output: true

// Hint: Sort and compare, or use frequency map.

function areAnagrams(a, b) {
  if (a.length !== b.length) return false;
  return a.sort().join('') === b.sort().join('');
}

console.log(areAnagrams([1,2,3], [3,2,1])); // true


// 8. Find First Non-Repeating Element

// Input: [9, 4, 9, 6, 7, 4]
// Output: 6

function firstNonRepeating(arr) {
  const count = {};
  for (let num of arr) count[num] = (count[num] || 0) + 1;

  for (let num of arr) {
    if (count[num] === 1) return num;
  }
}

console.log(firstNonRepeating([9, 4, 9, 6, 7, 4])); // 6


// 9. Rotate Array by K Steps

// Input: [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Hint: Reverse whole → reverse parts.

function rotate(arr, k) {
  k = k % arr.length;
  const reverse = (s, e) => {
    while (s < e) [arr[s], arr[e]] = [arr[e], arr[s]], s++, e--;
  };

  reverse(0, arr.length - 1);
  reverse(0, k - 1);
  reverse(k, arr.length - 1);
  return arr;
}

console.log(rotate([1,2,3,4,5,6,7], 3));
// [5,6,7,1,2,3,4]


// 10. Flatten a Nested Array

// Input: [1, [2, [3, 4], 5]]
// Output: [1, 2, 3, 4, 5]

// Hint: Use recursion or .flat(Infinity).

function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1,[2,[3,4],5]])); // [1,2,3,4,5]


// MEDIUM ROUND (B) — 6 Problems
// 1) Two Sum (return indices)

// Input: nums=[2,7,11,15], target=9 → Output: [0,1]
// Hint: Hash map for complements.
// Solution:

function twoSum(nums, target){
  const m = new Map();
  for (let i=0;i<nums.length;i++){
    const need = target - nums[i];
    if (m.has(need)) return [m.get(need), i];
    m.set(nums[i], i);
  }
  return null;
}


// Time: O(n), Space: O(n)

// 2) Longest Substring Without Repeating Characters

// Input: "abcabcbb" → Output: 3 ("abc")
// Hint: Sliding window with last index map.
// Solution:

function lengthOfLongestSubstring(s){
  const last = {};
  let start = 0, best = 0;
  for (let i=0;i<s.length;i++){
    if (last[s[i]] !== undefined && last[s[i]] >= start) start = last[s[i]] + 1;
    last[s[i]] = i;
    best = Math.max(best, i - start + 1);
  }
  return best;
}


// Time: O(n), Space: O(min(n, charset))

// 3) Merge Intervals

// Input: [[1,3],[2,6],[8,10],[15,18]] → Output: [[1,6],[8,10],[15,18]]
// Hint: Sort by start then merge sequentially.
// Solution:

function mergeIntervals(intervals){
  if (!intervals.length) return [];
  intervals.sort((a,b)=>a[0]-b[0]);
  const res = [intervals[0]];
  for (let i=1;i<intervals.length;i++){
    const cur = intervals[i], last = res[res.length-1];
    if (cur[0] <= last[1]) last[1] = Math.max(last[1], cur[1]);
    else res.push(cur);
  }
  return res;
}


// Time: O(n log n) sort, Space: O(n)

// 4) Product of Array Except Self (no division)

// Input: [1,2,3,4] → Output: [24,12,8,6]
// Hint: Use prefix and suffix product passes.
// Solution:

function productExceptSelf(nums){
  const n = nums.length;
  const res = new Array(n).fill(1);
  let prod = 1;
  for (let i=0;i<n;i++){ res[i] = prod; prod *= nums[i]; }
  prod = 1;
  for (let i=n-1;i>=0;i--){ res[i] *= prod; prod *= nums[i]; }
  return res;
}


// Time: O(n), Space: O(1) extra (output not counted)

// 5) Kth Largest Element (quickselect)

// Input: [3,2,1,5,6,4], k=2 → Output: 5
// Hint: Quickselect (expected O(n)). Provide sort fallback.
// Solution (sort fallback):

function findKthLargest(nums, k){
  nums.sort((a,b)=>b-a);
  return nums[k-1];
}


// Note: Quickselect reduces average time to O(n).

// 6) Subarray Sum Equals K (count subarrays)

// Input: [1,1,1], k=2 → Output: 2
// Hint: Prefix sum + hashmap of counts.
// Solution:

function subarraySum(nums, k){
  const seen = new Map([[0,1]]);
  let sum = 0, count = 0;
  for (const n of nums) {
    sum += n;
    if (seen.has(sum - k)) count += seen.get(sum - k);
    seen.set(sum, (seen.get(sum) || 0) + 1);
  }
  return count;
}


// Time: O(n), Space: O(n)


// 1. Find the First Non-Repeating Character in a String
// Question

// Given a string, return the first character that does not repeat.
// If none exist, return "_".

// Example
// Input: "swiss"
// Output: "w"

// Solution
function firstNonRepeatingChar(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) return char;
  }

  return "_";
}

console.log(firstNonRepeatingChar("swiss"));

// Explanation

// First loop counts frequency.

// Second loop finds the first char with count 1.

// 2. Move All Zeroes to End of Array
// Question
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Solution
function moveZeroes(arr) {
  let index = 0;

  for (let num of arr) {
    if (num !== 0) {
      arr[index] = num;
      index++;
    }
  }

  while (index < arr.length) {
    arr[index] = 0;
    index++;
  }

  return arr;
}

console.log(moveZeroes([0,1,0,3,12]));

// Explanation

// Two-pointer logic to avoid extra space.

// All non-zero values are shifted to the front.

// 3. Check if Two Strings are Anagrams
// Question
// "listen" and "silent" → true

// Solution
function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));

// Explanation

// Sorting normalizes the order → easy comparison.

// 4. Return Intersection of Two Arrays
// Question
// Input: [1,2,2,3] and [2,2]
// Output: [2,2]

// Solution
function intersection(nums1, nums2) {
  const freq = {};
  const result = [];

  for (let num of nums1) freq[num] = (freq[num] || 0) + 1;

  for (let num of nums2) {
    if (freq[num] > 0) {
      result.push(num);
      freq[num]--;
    }
  }

  return result;
}

console.log(intersection([1,2,2,3],[2,2]));

// Explanation

// Use frequency map to avoid losing duplicate counts.

// 5. Remove Duplicates in Sorted Array (in-place)
// Solution
function removeDuplicates(nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

console.log(removeDuplicates([1,1,2,2,3]));

// Explanation

// Two-pointer pattern ensures O(1) space usage.

// 6. Find Missing Number (0 to n)
// Solution
function missingNumber(nums) {
  const n = nums.length;
  const sum = (n * (n + 1)) / 2;

  const arrSum = nums.reduce((a, b) => a + b, 0);

  return sum - arrSum;
}

// console.log(missingNumber([3,0,1])); 

// Explanation

// Use formula sum of first N numbers.

// Difference gives missing number.

// 7. Valid Parentheses
function isValid(str) {
  const map = { ")": "(", "}": "{", "]": "[" };
  const stack = [];

  for (let char of str) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("(){}[]"));

// Explanation

// Stack ensures correct open-close pairing.

// 8. Kadane’s Algorithm (Max Subarray Sum)
function maxSubArray(nums) {
  let current = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }

  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// Explanation

// Dynamic running sum that resets when negative.

// 9. Two Sum
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in map) return [map[diff], i];
    map[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9));

// Explanation

// Use hash map to track complements.

// 10. Reverse a Linked List (Common live question)
function reverseList(head) {
  let prev = null, current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

// Explanation

// Reverses links one-by-one with constant space.