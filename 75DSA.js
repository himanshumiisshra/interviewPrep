// Here are the 75 optimal Node.js solutions, now including **descriptions** of the problem and **console logs** with sample inputs and expected outputs.

// *(Note: For Linked Lists and Trees, the console logs represent the conceptual input/output arrays to keep the code runnable without needing 50 lines of Tree/Node builder helper classes).*

//  1. Arrays


// 1. Two Sum
// Desc: Find indices of two numbers that add up to a specific target.
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
        map.set(nums[i], i);
    }
};
console.log("1:", twoSum([2, 7, 11, 15], 9)); // [0, 1]

// 121. Best Time to Buy and Sell Stock
// Desc: Find the maximum profit you can achieve from one buy and one sell.
const maxProfit = (prices) => {
    let min = Infinity, maxProf = 0;
    for (let p of prices) { min = Math.min(min, p); maxProf = Math.max(maxProf, p - min); }
    return maxProf;
};
console.log("121:", maxProfit([7, 1, 5, 3, 6, 4])); // 5

// 88. Merge Sorted Array
// Desc: Merge two sorted arrays in-place into the first array.
const merge = (nums1, m, nums2, n) => {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (j >= 0) nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    return nums1;
};
console.log("88:", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]

// 217. Contains Duplicate
// Desc: Return true if any value appears at least twice in the array.
const containsDuplicate = nums => new Set(nums).size !== nums.length;
console.log("217:", containsDuplicate([1, 2, 3, 1])); // true

// 238. Product of Array Except Self
// Desc: Return an array where each element is the product of all other elements without using division.
const productExceptSelf = (nums) => {
    const res = Array(nums.length).fill(1);
    for (let i = 1, left = 1; i < nums.length; i++) res[i] = (left *= nums[i - 1]);
    for (let i = nums.length - 2, right = 1; i >= 0; i--) res[i] *= (right *= nums[i + 1]);
    return res;
};
console.log("238:", productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

// 53. Maximum Subarray
// Desc: Find the contiguous subarray with the largest sum.
const maxSubArray = (nums) => {
    let max = nums[0], curr = 0;
    for (let n of nums) { curr = Math.max(n, curr + n); max = Math.max(max, curr); }
    return max;
};
console.log("53:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// 15. 3Sum
// Desc: Find all unique triplets in the array which give the sum of zero.
const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l + 1]) l++;
                while (nums[r] === nums[r - 1]) r--;
                l++; r--;
            } else if (sum < 0) l++; else r--;
        }
    }
    return res;
};
console.log("15:", threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2], [-1,0,1]]

// 56. Merge Intervals
// Desc: Merge all overlapping intervals.
const mergeIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];
    for (let curr of intervals) {
        let prev = res[res.length - 1];
        if (curr[0] <= prev[1]) prev[1] = Math.max(prev[1], curr[1]);
        else res.push(curr);
    }
    return res;
};
console.log("56:", mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]

// 11. Container With Most Water
// Desc: Find two lines that together with the x-axis form a container holding the most water.
const maxArea = (height) => {
    let l = 0, r = height.length - 1, max = 0;
    while (l < r) {
        max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
        height[l] < height[r] ? l++ : r--;
    }
    return max;
};
console.log("11:", maxArea([1,8,6,2,5,4,8,3,7])); // 49

// 48. Rotate Image
// Desc: Rotate a 2D matrix 90 degrees clockwise in-place.
const rotate = (matrix) => {
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
};
console.log("48:", rotate([[1,2,3],[4,5,6],[7,8,9]])); // [[7,4,1],[8,5,2],[9,6,3]]



//  2. Strings


// 20. Valid Parentheses
// Desc: Check if an input string has matching and properly nested brackets.
const isValid = (s) => {
    const stack = [], map = { ')': '(', '}': '{', ']': '[' };
    for (let c of s) { if (!map[c]) stack.push(c); else if (stack.pop() !== map[c]) return false; }
    return stack.length === 0;
};
console.log("20:", isValid("()[]{}")); // true

// 125. Valid Palindrome
// Desc: Check if a string is a palindrome, ignoring non-alphanumeric chars and case.
const isPalindrome = (s) => {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let l = 0, r = str.length - 1; l < r; l++, r--) if (str[l] !== str[r]) return false;
    return true;
};
console.log("125:", isPalindrome("A man, a plan, a canal: Panama")); // true

// 242. Valid Anagram
// Desc: Check if string t is an anagram of string s.
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const map = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) { map[s.charCodeAt(i)-97]++; map[t.charCodeAt(i)-97]--; }
    return map.every(c => c === 0);
};
console.log("242:", isAnagram("anagram", "nagaram")); // true

// 49. Group Anagrams
// Desc: Group an array of strings into sub-arrays of anagrams.
const groupAnagrams = (strs) => {
    const map = new Map();
    for (let s of strs) {
        const k = s.split('').sort().join('');
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(s);
    }
    return Array.from(map.values());
};
console.log("49:", groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]

// 5. Longest Palindromic Substring
// Desc: Find the longest contiguous palindromic substring.
const longestPalindrome = (s) => {
    let start = 0, maxLen = 0;
    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
        if (r - l - 1 > maxLen) { start = l + 1; maxLen = r - l - 1; }
    };
    for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i + 1); }
    return s.substring(start, start + maxLen);
};
console.log("5:", longestPalindrome("babad")); // "bab"

// 76. Minimum Window Substring
// Desc: Find the shortest substring in s containing all characters of t.
const minWindow = (s, t) => {
    const map = new Map();
    for (let c of t) map.set(c, (map.get(c) || 0) + 1);
    let l = 0, r = 0, count = map.size, minLen = Infinity, start = 0;
    while (r < s.length) {
        let c = s[r];
        if (map.has(c)) { map.set(c, map.get(c) - 1); if (map.get(c) === 0) count--; }
        r++;
        while (count === 0) {
            if (r - l < minLen) { minLen = r - l; start = l; }
            let leftChar = s[l];
            if (map.has(leftChar)) { map.set(leftChar, map.get(leftChar) + 1); if (map.get(leftChar) > 0) count++; }
            l++;
        }
    }
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
console.log("76:", minWindow("ADOBECODEBANC", "ABC")); // "BANC"

// 28. Find First Occurrence
// Desc: Return the index of the first occurrence of needle in haystack.
const strStr = (haystack, needle) => haystack.indexOf(needle);
console.log("28:", strStr("sadbutsad", "sad")); // 0

// 443. String Compression
// Desc: Compress an array of characters in-place using counts for repeated chars.
const compress = (chars) => {
    let write = 0;
    for (let read = 0; read < chars.length;) {
        let char = chars[read], count = 0;
        while (read < chars.length && chars[read] === char) { read++; count++; }
        chars[write++] = char;
        if (count > 1) for (let digit of count.toString()) chars[write++] = digit;
    }
    return write; // Returns new length
};
let charsArr = ["a","a","b","b","c","c","c"];
console.log("443:", compress(charsArr), "Array:", charsArr.slice(0, 6)); // 6, ["a","2","b","2","c","3"]

// 14. Longest Common Prefix
// Desc: Find the longest common prefix string amongst an array of strings.
const longestCommonPrefix = (strs) => {
    if (!strs.length) return "";
    let pref = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(pref) !== 0) pref = pref.substring(0, pref.length - 1);
    }
    return pref;
};
console.log("14:", longestCommonPrefix(["flower","flow","flight"])); // "fl"

// 459. Repeated Substring Pattern
// Desc: Check if a string can be constructed by taking a substring and appending multiple copies of it.
const repeatedSubstringPattern = s => (s + s).slice(1, -1).includes(s);
console.log("459:", repeatedSubstringPattern("abab")); // true



// 3. Linked Lists

// *(Assume standard `ListNode` definition exists for these tests)*


// 206. Reverse Linked List
// Desc: Reverse a singly linked list.
const reverseList = (head) => {
    let prev = null;
    while (head) { let next = head.next; head.next = prev; prev = head; head = next; }
    return prev;
};
// console.log(reverseList([1,2,3,4,5])); // Output: [5,4,3,2,1]

// 21. Merge Two Sorted Lists
// Desc: Merge two sorted linked lists into one sorted list.
const mergeTwoLists = (l1, l2) => {
    let dummy = { next: null }, curr = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; } 
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
};
// console.log(mergeTwoLists([1,2,4], [1,3,4])); // Output: [1,1,2,3,4,4]

// 19. Remove Nth Node From End
// Desc: Remove the nth node from the end of the list and return its head.
const removeNthFromEnd = (head, n) => {
    let dummy = { next: head }, slow = dummy, fast = dummy;
    for (let i = 0; i <= n; i++) fast = fast.next;
    while (fast) { slow = slow.next; fast = fast.next; }
    slow.next = slow.next.next;
    return dummy.next;
};
// console.log(removeNthFromEnd([1,2,3,4,5], 2)); // Output: [1,2,3,5]

// 141. Linked List Cycle
// Desc: Detect if there is a cycle in a linked list.
const hasCycle = (head) => {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next; fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};
// console.log(hasCycle([3,2,0,-4])); // Output: true (if -4 points back to 2)

// 2. Add Two Numbers
// Desc: Add two numbers represented by linked lists (digits in reverse order).
const addTwoNumbers = (l1, l2) => {
    let dummy = { next: null }, curr = dummy, carry = 0;
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = { val: sum % 10, next: null };
        curr = curr.next;
        if (l1) l1 = l1.next; if (l2) l2 = l2.next;
    }
    return dummy.next;
};
// console.log(addTwoNumbers([2,4,3], [5,6,4])); // Output: [7,0,8]

// 160. Intersection of Two Linked Lists
// Desc: Find the node at which two linked lists intersect.
const getIntersectionNode = (headA, headB) => {
    let a = headA, b = headB;
    while (a !== b) { a = a ? a.next : headB; b = b ? b.next : headA; }
    return a;
};
// console.log(getIntersectionNode([4,1,8,4,5], [5,6,1,8,4,5])); // Output: Node with value 8

// 234. Palindrome Linked List
// Desc: Determine if a linked list reads the same forwards and backwards.
const isPalindromeLL = (head) => {
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        fast = fast.next.next; let next = slow.next; slow.next = prev; prev = slow; slow = next;
    }
    if (fast) slow = slow.next;
    while (prev && slow) { if (prev.val !== slow.val) return false; prev = prev.next; slow = slow.next; }
    return true;
};
// console.log(isPalindromeLL([1,2,2,1])); // Output: true

// 25. Reverse Nodes in k-Group
// Desc: Reverse the nodes of a linked list k at a time.
const reverseKGroup = (head, k) => {
    let count = 0, ptr = head;
    while (count < k && ptr) { ptr = ptr.next; count++; }
    if (count === k) {
        let reversedHead = reverseKGroup(ptr, k), prev = reversedHead;
        while (count-- > 0) { let next = head.next; head.next = prev; prev = head; head = next; }
        return prev;
    }
    return head;
};
// console.log(reverseKGroup([1,2,3,4,5], 2)); // Output: [2,1,4,3,5]



//  4. Stacks and Queues


// 232. Queue using Stacks
// Desc: Implement a FIFO queue using only two LIFO stacks.
class MyQueue {
    constructor() { this.in = []; this.out = []; }
    push(x) { this.in.push(x); }
    pop() { this.peek(); return this.out.pop(); }
    peek() { if (!this.out.length) while (this.in.length) this.out.push(this.in.pop()); return this.out[this.out.length - 1]; }
    empty() { return !this.in.length && !this.out.length; }
}
const q = new MyQueue(); q.push(1); q.push(2); 
console.log("232:", q.peek(), q.pop(), q.empty()); // 1, 1, false

// 225. Stack using Queues
// Desc: Implement a LIFO stack using only queues.
class MyStack {
    constructor() { this.q = []; }
    push(x) { this.q.push(x); for (let i = 0; i < this.q.length - 1; i++) this.q.push(this.q.shift()); }
    pop() { return this.q.shift(); }
    top() { return this.q[0]; }
    empty() { return this.q.length === 0; }
}
const s = new MyStack(); s.push(1); s.push(2);
console.log("225:", s.top(), s.pop(), s.empty()); // 2, 2, false

// 155. Min Stack
// Desc: Design a stack that supports push, pop, top, and retrieving the minimum element in O(1) time.
class MinStack {
    constructor() { this.stack = []; this.minStack = []; }
    push(val) { this.stack.push(val); if (!this.minStack.length || val <= this.getMin()) this.minStack.push(val); }
    pop() { if (this.stack.pop() === this.getMin()) this.minStack.pop(); }
    top() { return this.stack[this.stack.length - 1]; }
    getMin() { return this.minStack[this.minStack.length - 1]; }
}
const mStack = new MinStack(); mStack.push(-2); mStack.push(0); mStack.push(-3);
console.log("155:", mStack.getMin(), (mStack.pop(), mStack.top()), mStack.getMin()); // -3, 0, -2

// 739. Daily Temperatures
// Desc: Return an array of how many days you have to wait for a warmer temperature.
const dailyTemperatures = (T) => {
    const res = Array(T.length).fill(0), stack = [];
    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let idx = stack.pop(); res[idx] = i - idx;
        }
        stack.push(i);
    }
    return res;
};
console.log("739:", dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]

// 150. Evaluate Reverse Polish Notation
// Desc: Evaluate the value of an arithmetic expression in RPN.
const evalRPN = (tokens) => {
    const stack = [];
    for (let t of tokens) {
        if ("+-*/".includes(t)) {
            let b = stack.pop(), a = stack.pop();
            if (t==='+') stack.push(a+b); else if (t==='-') stack.push(a-b);
            else if (t==='*') stack.push(a*b); else stack.push(Math.trunc(a/b));
        } else stack.push(Number(t));
    }
    return stack[0];
};
console.log("150:", evalRPN(["2","1","+","3","*"])); // 9

// 496. Next Greater Element I
// Desc: Find the next greater element for each element of a subset array inside a full array.
const nextGreaterElement = (nums1, nums2) => {
    const map = new Map(), stack = [];
    for (let n of nums2) {
        while (stack.length && stack[stack.length - 1] < n) map.set(stack.pop(), n);
        stack.push(n);
    }
    return nums1.map(n => map.get(n) || -1);
};
console.log("496:", nextGreaterElement([4,1,2], [1,3,4,2])); // [-1,3,-1]

// 503. Next Greater Element II
// Desc: Find the next greater element in a circular array.
const nextGreaterElements = (nums) => {
    const res = Array(nums.length).fill(-1), stack = [];
    for (let i = 0; i < nums.length * 2; i++) {
        let num = nums[i % nums.length];
        while (stack.length && nums[stack[stack.length - 1]] < num) res[stack.pop()] = num;
        if (i < nums.length) stack.push(i);
    }
    return res;
};
console.log("503:", nextGreaterElements([1,2,1])); // [2,-1,2]

// 622. Design Circular Queue
// Desc: Design your implementation of the circular queue.
class MyCircularQueue {
    constructor(k) { this.q = Array(k); this.head = -1; this.tail = -1; this.size = k; }
    enQueue(val) {
        if (this.isFull()) return false;
        if (this.isEmpty()) this.head = 0;
        this.tail = (this.tail + 1) % this.size; this.q[this.tail] = val; return true;
    }
    deQueue() {
        if (this.isEmpty()) return false;
        if (this.head === this.tail) this.head = this.tail = -1;
        else this.head = (this.head + 1) % this.size; return true;
    }
    Front() { return this.isEmpty() ? -1 : this.q[this.head]; }
    Rear() { return this.isEmpty() ? -1 : this.q[this.tail]; }
    isEmpty() { return this.head === -1; }
    isFull() { return (this.tail + 1) % this.size === this.head; }
}
const cq = new MyCircularQueue(3);
console.log("622:", cq.enQueue(1), cq.enQueue(2), cq.enQueue(3), cq.enQueue(4), cq.Rear(), cq.isFull()); // true, true, true, false, 3, true



// 5. Binary Search


// 704. Binary Search
// Desc: Find the target index in a sorted array, or -1 if not found.
const search = (nums, target) => {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) return m;
        nums[m] < target ? l = m + 1 : r = m - 1;
    }
    return -1;
};
console.log("704:", search([-1,0,3,5,9,12], 9)); // 4

// 34. First and Last Position
// Desc: Find the starting and ending position of a given target value.
const searchRange = (nums, target) => {
    const find = (isFirst) => {
        let l = 0, r = nums.length - 1, res = -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] === target) { res = m; isFirst ? r = m - 1 : l = m + 1; }
            else if (nums[m] < target) l = m + 1; else r = m - 1;
        }
        return res;
    };
    return [find(true), find(false)];
};
console.log("34:", searchRange([5,7,7,8,8,10], 8)); // [3,4]

// 74. Search a 2D Matrix
// Desc: Search for a value in an m x n sorted matrix.
const searchMatrix = (matrix, target) => {
    let m = matrix.length, n = matrix[0].length, l = 0, r = m * n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2), val = matrix[Math.floor(mid / n)][mid % n];
        if (val === target) return true;
        val < target ? l = mid + 1 : r = mid - 1;
    }
    return false;
};
console.log("74:", searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true

// 33. Search in Rotated Sorted Array
// Desc: Search target in a sorted array that has been pivoted at an unknown index.
const searchRotated = (nums, target) => {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) return m;
        if (nums[l] <= nums[m]) {
            if (target >= nums[l] && target < nums[m]) r = m - 1; else l = m + 1;
        } else {
            if (target > nums[m] && target <= nums[r]) l = m + 1; else r = m - 1;
        }
    }
    return -1;
};
console.log("33:", searchRotated([4,5,6,7,0,1,2], 0)); // 4

// 81. Search Rotated Sorted Array II
// Desc: Search target in a pivoted sorted array that may contain duplicates.
const searchRotatedII = (nums, target) => {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) return true;
        if (nums[l] === nums[m] && nums[r] === nums[m]) { l++; r--; }
        else if (nums[l] <= nums[m]) {
            if (target >= nums[l] && target < nums[m]) r = m - 1; else l = m + 1;
        } else {
            if (target > nums[m] && target <= nums[r]) l = m + 1; else r = m - 1;
        }
    }
    return false;
};
console.log("81:", searchRotatedII([2,5,6,0,0,1,2], 0)); // true

// 162. Find Peak Element
// Desc: Find a peak element (strictly greater than neighbors) and return its index.
const findPeakElement = (nums) => {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] > nums[m + 1]) r = m; else l = m + 1;
    }
    return l;
};
console.log("162:", findPeakElement([1,2,3,1])); // 2



//  6. Trees

// 104. Maximum Depth
// Desc: Find the maximum depth/height of a binary tree.
const maxDepth = root => !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// console.log(maxDepth([3,9,20,null,null,15,7])); // Output: 3

// 100. Same Tree
// Desc: Check if two binary trees are structurally identical and have same node values.
const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// console.log(isSameTree([1,2,3], [1,2,3])); // Output: true

// 101. Symmetric Tree
// Desc: Check if a binary tree is a mirror of itself (symmetric around center).
const isSymmetric = root => {
    const isMirror = (n1, n2) => {
        if (!n1 && !n2) return true;
        if (!n1 || !n2 || n1.val !== n2.val) return false;
        return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
    };
    return isMirror(root, root);
};
// console.log(isSymmetric([1,2,2,3,4,4,3])); // Output: true

// 144. Preorder Traversal
// Desc: Return the preorder traversal of a binary tree's nodes (Root, L, R).
const preorderTraversal = (root) => {
    if (!root) return [];
    let stack = [root], res = [];
    while (stack.length) {
        let node = stack.pop(); res.push(node.val);
        if (node.right) stack.push(node.right); if (node.left) stack.push(node.left);
    }
    return res;
};
// console.log(preorderTraversal([1,null,2,3])); // Output: [1,2,3]

// 94. Inorder Traversal
// Desc: Return the inorder traversal of a binary tree's nodes (L, Root, R).
const inorderTraversal = (root) => {
    let stack = [], res = [], curr = root;
    while (curr || stack.length) {
        while (curr) { stack.push(curr); curr = curr.left; }
        curr = stack.pop(); res.push(curr.val); curr = curr.right;
    }
    return res;
};
// console.log(inorderTraversal([1,null,2,3])); // Output: [1,3,2]

// 145. Postorder Traversal
// Desc: Return the postorder traversal of a binary tree's nodes (L, R, Root).
const postorderTraversal = (root) => {
    if (!root) return [];
    let stack = [root], res = [];
    while (stack.length) {
        let node = stack.pop(); res.push(node.val);
        if (node.left) stack.push(node.left); if (node.right) stack.push(node.right);
    }
    return res.reverse();
};
// console.log(postorderTraversal([1,null,2,3])); // Output: [3,2,1]

// 102. Level Order Traversal
// Desc: Return the level order traversal of a binary tree's nodes (BFS).
const levelOrder = (root) => {
    if (!root) return [];
    let q = [root], res = [];
    while (q.length) {
        let size = q.length, level = [];
        while (size--) {
            let node = q.shift(); level.push(node.val);
            if (node.left) q.push(node.left); if (node.right) q.push(node.right);
        }
        res.push(level);
    }
    return res;
};
// console.log(levelOrder([3,9,20,null,null,15,7])); // Output: [[3],[9,20],[15,7]]

// 110. Balanced Binary Tree
// Desc: Determine if a binary tree is height-balanced (depth difference <= 1).
const isBalanced = (root) => {
    const height = (node) => {
        if (!node) return 0;
        let l = height(node.left), r = height(node.right);
        if (l === -1 || r === -1 || Math.abs(l - r) > 1) return -1;
        return Math.max(l, r) + 1;
    };
    return height(root) !== -1;
};
// console.log(isBalanced([3,9,20,null,null,15,7])); // Output: true



//  7. Recursion and Backtracking


// 39. Combination Sum
// Desc: Find all unique combinations that sum up to target.
const combinationSum = (candidates, target) => {
    const res = [];
    const dfs = (i, sum, path) => {
        if (sum === target) return res.push([...path]);
        if (i >= candidates.length || sum > target) return;
        path.push(candidates[i]); dfs(i, sum + candidates[i], path); 
        path.pop(); dfs(i + 1, sum, path); 
    };
    dfs(0, 0, []); return res;
};
console.log("39:", combinationSum([2,3,6,7], 7)); // [[2,2,3],[7]]

// 46. Permutations
// Desc: Return all possible permutations of an array of distinct integers.
const permute = (nums) => {
    const res = [];
    const backtrack = (start) => {
        if (start === nums.length) res.push([...nums]);
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    };
    backtrack(0); return res;
};
console.log("46:", permute([1,2,3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]

// 78. Subsets
// Desc: Return all possible subsets (the power set) of an integer array.
const subsets = (nums) => {
    const res = [];
    const dfs = (i, path) => {
        if (i === nums.length) return res.push([...path]);
        path.push(nums[i]); dfs(i + 1, path); 
        path.pop(); dfs(i + 1, path); 
    };
    dfs(0, []); return res;
};
console.log("78:", subsets([1,2])); // [[1,2],[1],[2],[]]

// 51. N-Queens
// Desc: Return all distinct solutions to the n-queens puzzle.
const solveNQueens = (n) => {
    const res = [], cols = new Set(), pos = new Set(), neg = new Set(), board = Array(n).fill().map(() => Array(n).fill('.'));
    const backtrack = (r) => {
        if (r === n) return res.push(board.map(row => row.join('')));
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || pos.has(r + c) || neg.has(r - c)) continue;
            cols.add(c); pos.add(r + c); neg.add(r - c); board[r][c] = 'Q';
            backtrack(r + 1);
            cols.delete(c); pos.delete(r + c); neg.delete(r - c); board[r][c] = '.';
        }
    };
    backtrack(0); return res;
};
console.log("51:", solveNQueens(4)[0]); // [".Q..","...Q","Q...","..Q."] (1 of 2 solutions)

// 17. Letter Combinations
// Desc: Return all possible letter combinations that a phone number could represent.
const letterCombinations = (digits) => {
    if (!digits) return [];
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"], res = [];
    const dfs = (i, str) => {
        if (i === digits.length) return res.push(str);
        for (let char of map[digits[i]]) dfs(i + 1, str + char);
    };
    dfs(0, ""); return res;
};
console.log("17:", letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// 90. Subsets II
// Desc: Return all subsets of an array that may contain duplicates.
const subsetsWithDup = (nums) => {
    nums.sort((a, b) => a - b);
    const res = [];
    const dfs = (i, path) => {
        if (i === nums.length) return res.push([...path]);
        path.push(nums[i]); dfs(i + 1, path);
        path.pop();
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
        dfs(i + 1, path);
    };
    dfs(0, []); return res;
};
console.log("90:", subsetsWithDup([1,2,2])); // [[1,2,2],[1,2],[1], [2,2],[2],[]]

// 37. Sudoku Solver
// Desc: Solve a Sudoku puzzle by filling empty cells in-place.
const solveSudoku = (board) => {
    const isValid = (r, c, val) => {
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === val || board[i][c] === val || board[3*Math.floor(r/3)+Math.floor(i/3)][3*Math.floor(c/3)+(i%3)] === val) return false;
        }
        return true;
    };
    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let n = 1; n <= 9; n++) {
                        if (isValid(r, c, String(n))) {
                            board[r][c] = String(n); if (solve()) return true; board[r][c] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };
    solve(); return board;
};
// console.log("37:", solveSudoku([...puzzle...]));



//  8. Dynamic Programming


// 70. Climbing Stairs
// Desc: Number of ways to climb to top if you can take 1 or 2 steps.
const climbStairs = n => {
    let a = 1, b = 1;
    for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
    return b;
};
console.log("70:", climbStairs(3)); // 3

// 198. House Robber
// Desc: Maximize money robbed without robbing two adjacent houses.
const rob = nums => {
    let prev1 = 0, prev2 = 0;
    for (let n of nums) [prev1, prev2] = [Math.max(prev1, prev2 + n), prev1];
    return prev1;
};
console.log("198:", rob([2,7,9,3,1])); // 12

// 322. Coin Change
// Desc: Fewest number of coins needed to make up a given amount.
const coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let c of coins) for (let i = c; i <= amount; i++) dp[i] = Math.min(dp[i], dp[i - c] + 1);
    return dp[amount] === Infinity ? -1 : dp[amount];
};
console.log("322:", coinChange([1,2,5], 11)); // 3

// 300. Longest Increasing Subsequence
// Desc: Length of the longest strictly increasing subsequence.
const lengthOfLIS = (nums) => {
    const tails = [];
    for (let x of nums) {
        let l = 0, r = tails.length;
        while (l < r) { let m = Math.floor((l + r) / 2); tails[m] < x ? l = m + 1 : r = m; }
        tails[l] = x;
    }
    return tails.length;
};
console.log("300:", lengthOfLIS([10,9,2,5,3,7,101,18])); // 4

// 1143. Longest Common Subsequence
// Desc: Length of the longest subsequence common to two strings.
const longestCommonSubsequence = (t1, t2) => {
    let dp = Array(t2.length + 1).fill(0);
    for (let i = 1; i <= t1.length; i++) {
        let prev = 0;
        for (let j = 1; j <= t2.length; j++) {
            let temp = dp[j];
            dp[j] = t1[i - 1] === t2[j - 1] ? prev + 1 : Math.max(dp[j], dp[j - 1]);
            prev = temp;
        }
    }
    return dp[t2.length];
};
console.log("1143:", longestCommonSubsequence("abcde", "ace")); // 3

// 62. Unique Paths
// Desc: Number of unique paths to reach the bottom-right corner of an m x n grid.
const uniquePaths = (m, n) => {
    let res = 1;
    for (let i = 1; i < n; i++) res = res * (m + i - 1) / i;
    return res;
};
console.log("62:", uniquePaths(3, 7)); // 28

// 718. Maximum Length of Repeated Subarray
// Desc: Maximum length of a subarray that appears in both arrays.
const findLength = (n1, n2) => {
    let dp = Array(n2.length + 1).fill(0), max = 0;
    for (let i = 1; i <= n1.length; i++) {
        for (let j = n2.length; j > 0; j--) {
            dp[j] = n1[i - 1] === n2[j - 1] ? dp[j - 1] + 1 : 0;
            max = Math.max(max, dp[j]);
        }
    }
    return max;
};
console.log("718:", findLength([1,2,3,2,1], [3,2,1,4,7])); // 3

// 416. Partition Equal Subset Sum
// Desc: Check if an array can be partitioned into two subsets such that the sums are equal.
const canPartition = (nums) => {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;
    let target = sum / 2, dp = Array(target + 1).fill(false); dp[0] = true;
    for (let num of nums) for (let i = target; i >= num; i--) dp[i] = dp[i] || dp[i - num];
    return dp[target];
};
console.log("416:", canPartition([1,5,11,5])); // true



//  9. Graphs


// 133. Clone Graph
// Desc: Return a deep copy (clone) of a connected undirected graph.
const cloneGraph = (node, map = new Map()) => {
    if (!node) return null;
    if (map.has(node.val)) return map.get(node.val);
    const clone = { val: node.val, neighbors: [] }; map.set(node.val, clone);
    for (let neighbor of node.neighbors) clone.neighbors.push(cloneGraph(neighbor, map));
    return clone;
};
// console.log(cloneGraph(adjList));

// 200. Number of Islands
// Desc: Return the total number of connected 1s (islands) surrounded by 0s (water).
const numIslands = (grid) => {
    let count = 0;
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;
        grid[r][c] = '0'; dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
    };
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) if (grid[r][c] === '1') { count++; dfs(r, c); }
    }
    return count;
};
console.log("200:", numIslands([["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"]])); // 3

// 207. Course Schedule
// Desc: Can you finish all courses given the prerequisite dependencies (Cycle detection).
const canFinish = (numCourses, pre) => {
    const inDegree = Array(numCourses).fill(0), adj = Array.from({length: numCourses}, () => []);
    for (let [crs, p] of pre) { adj[p].push(crs); inDegree[crs]++; }
    const q = [];
    for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) q.push(i);
    let count = 0;
    while (q.length) {
        let node = q.shift(); count++;
        for (let nei of adj[node]) if (--inDegree[nei] === 0) q.push(nei);
    }
    return count === numCourses;
};
console.log("207:", canFinish(2, [[1,0]])); // true

// 785. Is Graph Bipartite
// Desc: Verify if a graph can be split into two independent sets (Bipartite verification).
const isBipartite = (graph) => {
    const color = Array(graph.length).fill(0);
    for (let i = 0; i < graph.length; i++) {
        if (color[i] !== 0) continue;
        let q = [i]; color[i] = 1;
        while (q.length) {
            let node = q.shift();
            for (let nei of graph[node]) {
                if (color[nei] === color[node]) return false;
                if (color[nei] === 0) { color[nei] = -color[node]; q.push(nei); }
            }
        }
    }
    return true;
};
console.log("785:", isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]])); // false

// 994. Rotting Oranges
// Desc: Minimum minutes needed for all fresh oranges to rot.
const orangesRotting = (grid) => {
    let q = [], fresh = 0, mins = 0, dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 2) q.push([r, c]);
            if (grid[r][c] === 1) fresh++;
        }
    }
    while (q.length && fresh > 0) {
        let size = q.length;
        while (size--) {
            let [r, c] = q.shift();
            for (let [dr, dc] of dirs) {
                let nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2; fresh--; q.push([nr, nc]);
                }
            }
        }
        mins++;
    }
    return fresh === 0 ? mins : -1;
};
console.log("994:", orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // 4

// 323. Connected Components
// Desc: Count the number of connected components in an undirected graph (Union Find).
const countComponents = (n, edges) => {
    const parent = Array.from({length: n}, (_, i) => i);
    const find = (i) => parent[i] === i ? i : (parent[i] = find(parent[i]));
    let count = n;
    for (let [u, v] of edges) {
        let root1 = find(u), root2 = find(v);
        if (root1 !== root2) { parent[root1] = root2; count--; }
    }
    return count;
};
console.log("323:", countComponents(5, [[0,1], [1,2], [3,4]])); // 2



// 10. Bit Manipulation


// 136. Single Number
// Desc: Find the one element that appears only once in an array where every other element appears twice.
const singleNumber = nums => nums.reduce((acc, curr) => acc ^ curr, 0);
console.log("136:", singleNumber([4,1,2,1,2])); // 4

// 190. Reverse Bits
// Desc: Reverse the bits of a given 32 bits unsigned integer.
const reverseBits = n => {
    let res = 0;
    for (let i = 0; i < 32; i++) { res = (res << 1) | (n & 1); n >>>= 1; }
    return res >>> 0; 
};
console.log("190:", reverseBits(43261596)); // 964176192

// 191. Number of 1 Bits
// Desc: Return the number of '1' bits (Hamming weight) an unsigned integer has.
const hammingWeight = n => {
    let count = 0;
    while (n !== 0) { n &= (n - 1); count++; }
    return count;
};
console.log("191:", hammingWeight(11)); // 3 (11 is 1011 in binary)

// 268. Missing Number
// Desc: Return the single missing number in an array containing n distinct numbers in the range [0, n].
const missingNumber = nums => nums.reduce((acc, num, i) => acc ^ num ^ i, nums.length);
console.log("268:", missingNumber([3,0,1])); // 2

