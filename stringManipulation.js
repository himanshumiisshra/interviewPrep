// ✅ Easy String Interview Questions
// 1. Reverse a String
// Question
// Input: "hello"
// Output: "olleh"

// Solution
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Explanation

// Convert string → array → reverse → join back.

// 2. Convert String to Uppercase
// Solution
function toUpper(str) {
  return str.toUpperCase();
}

console.log(toUpper("hello"));

// Explanation

// JavaScript has a built-in toUpperCase() method.

// 3. Count Characters in a String
// Question

// Return the length of the string without using .length.

// Solution
function stringLength(str) {
  let count = 0;
  for (let _ of str) count++;
  return count;
}

console.log(stringLength("hello"));

// Explanation

// Loop and count characters manually.

// 4. Check If Two Strings Are Equal (Ignore Case)
// Solution
function isEqual(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

console.log(isEqual("Hello", "hello"));

// Explanation

// Convert both to lowercase → compare.

// 5. Check If String Contains Substring
// "javascript" contains "script" → true

// Solution
function contains(str, sub) {
  return str.includes(sub);
}

console.log(contains("javascript", "script"));

// Explanation

// .includes() checks substring presence.

// 6. Count Words in a Sentence
// Solution
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log(countWords("Hello world from JS"));

// Explanation

// Trim + split by whitespace.

// 7. Replace All Spaces with Hyphens
// "Hello World JS" → "Hello-World-JS"

// Solution
function replaceSpaces(str) {
  return str.replace(/ /g, "-");
}

console.log(replaceSpaces("Hello World JS"));

// Explanation

// Regex / /g replaces all spaces globally.

// 8. Check If String Starts With a Given Character
// Solution
function startsWith(str, char) {
  return str.startsWith(char);
}

console.log(startsWith("apple", "a"));

// 9. Get the Last Character of a String
// Solution
function lastChar(str) {
  return str[str.length - 1];
}

console.log(lastChar("world"));

// 10. Convert First Character to Uppercase (Title Case)
// "hello" → "Hello"

// Solution
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("hello"));

// Explanation

// Uppercase first character and append rest.




// 1. Reverse Each Word in a Sentence
// Question
// Input: "Hello World"
// Output: "olleH dlroW"

// Solution
function reverseWords(str) {
  return str.split(" ")
            .map(word => word.split("").reverse().join(""))
            .join(" ");
}

console.log(reverseWords("Hello World"));

// Explanation

// Split sentence by spaces → work on each word → reverse → join back.

// 2. Check if a String is a Palindrome (Ignore Case)
// Solution
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Explanation

// Clean string (remove spaces/punctuation) → compare with reversed version.

// 3. Count Vowels in a String
// Solution
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

// console.log(countVowels("Interview"));

// Explanation

// Simple character scan comparing with vowel list.

// 4. Find the Most Frequent Character
// Solution
function mostFrequentChar(str) {
  const freq = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] > maxCount) {
      maxChar = char;
      maxCount = freq[char];
    }
  }

  return maxChar;
}

console.log(mostFrequentChar("success"));

// Explanation

// Maintain frequency map and track highest count as you iterate.

// 5. Check Isomorphic Strings
// Question
// "egg" → "add" (true)
// "foo" → "bar" (false)

// Solution
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  
  const mapS = {}, mapT = {};

  for (let i = 0; i < s.length; i++) {
    if ((mapS[s[i]] && mapS[s[i]] !== t[i]) ||
        (mapT[t[i]] && mapT[t[i]] !== s[i])) return false;

    mapS[s[i]] = t[i];
    mapT[t[i]] = s[i];
  }

  return true;
}

console.log(isIsomorphic("egg", "add"));

// Explanation

// Each char must map consistently both ways.

// 6. Longest Common Prefix Among Words
// Solution
function longestCommonPrefix(words) {
  words.sort();
  let first = words[0], last = words[words.length - 1];
  let i = 0;

  while (i < first.length && first[i] === last[i]) i++;

  return first.slice(0, i);
}

console.log(longestCommonPrefix(["flower","flow","flight"]));

// Explanation

// Sorting places most different strings at ends → compare only first & last.

// 7. Remove All Adjacent Duplicates
// Input: "abbaca"
// Output: "ca"

// Solution
function removeDuplicates(str) {
  const stack = [];

  for (let char of str) {
    if (stack.length && stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  }

  return stack.join("");
}

// console.log(removeDuplicates("abbaca"));

// Explanation

// Use stack to cancel adjacent duplicates.

// 8. Longest Word in a Sentence
// Solution
function longestWord(str) {
  return str.split(" ").reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}

console.log(longestWord("JavaScript coding interview questions"));

// Explanation

// Track longest word while iterating.

// 9. Character Frequency as Sorted Output
// Input: "banana"
// Output: a:3 b:1 n:2

// Solution
function charFrequency(str) {
  const map = {};
  for (let ch of str) map[ch] = (map[ch] || 0) + 1;
  
  return Object.entries(map)
    .sort((a,b) => b[1] - a[1])
    .map(([ch,count]) => `${ch}:${count}`)
    .join(" ");
}

console.log(charFrequency("banana"));

// Explanation

// Create map → convert to array → sort by frequency.

// 10. Rotate String
// Input: s="abcde", goal="cdeab" → true

// Solution
function rotateString(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}

console.log(rotateString("abcde","cdeab"));

// Explanation

// If rotated version exists, it must be inside s+s.