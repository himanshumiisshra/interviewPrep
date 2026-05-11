// The most optimal solution to check if a string is a palindrome in Node.js (JavaScript) uses the **Two-Pointer technique**.

// While the built-in one-liner (`str.split('').reverse().join('') === str`) is easy to write, it creates multiple new arrays and strings in memory, making it slower and more memory-intensive for large strings.

// The Two-Pointer approach is optimal because:

// * **Time Complexity: $O(n)$** – It only iterates through half of the string at most.
// * **Space Complexity: $O(1)$** – It evaluates the string in place without allocating extra memory for new arrays.

// ### The Optimal Solution (Two-Pointer)

// Here is the production-ready implementation, which also includes standard sanitization (ignoring spaces, punctuation, and case sensitivity), which is typically expected in real-world scenarios and interviews:


/**
 * Checks if a string is a palindrome optimally.
 * Time Complexity: O(n)
 * Space Complexity: O(1) (excluding the regex sanitization step)
 */
function isPalindrome(str) {
    // Sanitize the string: remove non-alphanumeric characters and convert to lowercase
    // (If your input is already guaranteed to be a single clean word, you can skip this line)
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Initialize two pointers
    let left = 0;
    let right = cleanStr.length - 1;

    // Move towards the center
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false; // Mismatch found, not a palindrome
        }
        left++;
        right--;
    }

    return true; // All characters matched
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false



// ### Why avoid the `.reverse()` method?

// The popular one-liner looks like this:

// ```javascript
// const isPal = str => str === str.split('').reverse().join('');

// ```

// **Why it's sub-optimal:**

// 1. `.split('')` creates an Array of $n$ elements ($O(n)$ space).
// 2. `.reverse()` reverses that Array in place.
// 3. `.join('')` creates a brand new String of $n$ characters ($O(n)$ space).
// 4. Finally, it compares the two strings.

// The two-pointer method completely avoids all of this overhead by simply looking at the characters at opposite ends of the original string and moving inward.