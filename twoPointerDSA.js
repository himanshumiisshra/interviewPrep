// 1. merge two linked list
/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list. The list should be made by splicing together the nodes of the first two lists.

Input: 
  list1 = [1, 2, 4]
  list2 = [1, 3, 4]

Output: 
  [1, 1, 2, 3, 4, 4]
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printLinkedList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values);
}

/**
 * Merge two sorted linked lists and return it as a new sorted list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * @param {ListNode} list1 - The head of the first sorted linked list.
 * @param {ListNode} list2 - The head of the second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
var mergeTwoLists = function (list1, list2) {
    let i = list1;
    let j = list2;

    let list3 = [];

    while (i !== null && j !== null) {
        if (i.val > j.val) {
            list3.push(j.val);
            j = j.next;
        } else {
            list3.push(i.val);
            i = i.next;
        }
    };

    while (i !== null) {
        list3.push(i.val);
        i = i.next;
    }

    while (j !== null) {
        list3.push(j.val);
        j = j.next;
    }

    return createLinkedList(list3)
}

const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);

const merged = mergeTwoLists(list1, list2);
printLinkedList(merged); // Should print: [1, 1, 2, 3, 4, 4] (after implementation)

// console.log(list1)



//2. two sum

/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  try {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      let compliment = target - nums[i];

      if (numMap.has(compliment)) {
        return [numMap.get(compliment), i];
      }

      numMap.set(nums[i], i);
    }

    return [];
  } catch (err) {
    console.log(err);
  }
};


//3.  squares of sorted array
/**

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]


 */


const sq = function (num) {
  return Math.pow(num, 2);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let k = nums.length - 1;

  let newArr = [];

  while (i <= j) {
    if (sq(nums[j]) > sq(nums[i])) {
      newArr[k] = sq(nums[j]);
      j--;
      k--;
    } else {
      newArr[k] = sq(nums[i]);
      i++;
      k--;
    }
  }

  return newArr;
};


// 4. move zeros
/**

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      if (i !== j) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
      i++;
    }
  }
};



// 5. is sequence

/**

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0;

    let newS = "";

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            
            newS = newS + s[i];
            i++;
        } 

        j++;
    }

    return s === newS;
};



let s = "";
let t = "abc";

console.log(isSubsequence(s, t));




//6. find the duplicate number
/**

TAG: MEDIUM || COMPANIES: FAANG, NVIDIA, TikTok, IBM, Oracle

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

 */


/**
 * HashMap
 * Time Complexity = O(N^2)
 * Space Complexity = O(1)
 */
var findDuplicateBruteForce = function (nums) {
  let n = nums.length;
  for(let i = 0; i < n; i++) {
      for(let j = i+1; j < n; j++) {
          if(nums[i] === nums[j]) {
              return nums[i];
          }
      }
  }
  return -1;
}


/**
 * HashMap
 * Time Complexity = O(N)
 * Space Complexity = O(N)
 */
var findDuplicateHashMap = function (nums) {
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            return nums[i];
        }

        hash.set(nums[i], true);
    }
}


/**
 * 2 Pointers Method
 * Time Complexity = O(N)
 * Space Complexity = O(1)
 */
var findDuplicateTwoPointers = function(nums) {
    let slow = 0, fast = 0;


    while (true) {

        //  console.log(slow, fast);
        slow = nums[slow];
        fast = nums[nums[fast]];

        console.log(slow, fast)

        if (slow === fast) {
            break;
        }
    }

    let slow2 = 0;

    while (true) {

        //  console.log(slow, slow2);
        slow = nums[slow];
        slow2 = nums[slow2];

         console.log(slow, slow2);

        if (slow === slow2) return slow;
    }
};



let nums = [1, 3, 4, 2, 2];


console.log(findDuplicateHashMap(nums));


//7. backspace string compare
/**

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  let skipS = 0;
  let skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (t[j] === "#") {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }

    let firstChar = i < 0 ? "$" : s[i];
    let secondChar = j < 0 ? "$" : t[j];

    if (firstChar !== secondChar) {
      return false;
    }

    i--;
    j--;
  }

  return true;
};


