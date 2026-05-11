// The most optimal way to determine if a number is an Armstrong number (also known as a Narcissistic number) in Node.js is using a **Mathematical Approach**.

// Many developers default to converting the number to a string and using array methods (e.g., `String(n).split('').reduce(...)`). While readable, that approach is highly inefficient because it allocates memory for new strings and arrays.

// The mathematical approach uses modulo (`%`) and division (`/`) to extract digits, resulting in:

// * **Time Complexity:** $O(d)$ where $d$ is the number of digits (or $O(\log n)$).
// * **Space Complexity:** $O(1)$ because it evaluates the number in place without creating arrays or strings.

// ### The Optimal Solution


/**
 * Checks if a number is an Armstrong number optimally.
 * Time Complexity: O(d) where d is the number of digits
 * Space Complexity: O(1)
 */
function isArmstrong(n) {
    // Negative numbers cannot be Armstrong numbers
    if (n < 0) return false;
    
    // Single digit numbers (0-9) are always Armstrong numbers
    if (n >= 0 && n <= 9) return true;

    // Calculate the number of digits optimally without string conversion
    const numDigits = Math.floor(Math.log10(n)) + 1;

    let sum = 0;
    let temp = n;

    // Extract digits mathematically
    while (temp > 0) {
        const digit = temp % 10;                // Get the last digit
        sum += digit ** numDigits;              // Raise to power and add to sum
        temp = Math.floor(temp / 10);           // Remove the last digit
    }

    return sum === n;
}

// Example usage:
console.log(isArmstrong(153));  // true  (1^3 + 5^3 + 3^3 = 153)
console.log(isArmstrong(9474)); // true  (9^4 + 4^4 + 7^4 + 4^4 = 9474)
console.log(isArmstrong(123));  // false


// ### Why avoid the String/Array method?

// The typical one-liner looks like this:


// const isArmstrong = n => {
//     const digits = String(n).split('');
//     return digits.reduce((sum, d) => sum + Math.pow(d, digits.length), 0) === n;
// };



// **Why it's sub-optimal:**

// 1. `String(n)` allocates memory for a new string.
// 2. `.split('')` allocates memory for a new array of $d$ elements.
// 3. `.reduce()` involves callback overhead for every single digit.
// The `while` loop with `Math.floor` entirely bypasses JavaScript's string parser and Garbage Collector, making it significantly faster for high-performance applications.

// ### Handling Extremely Large Numbers (BigInt)

// JavaScript's standard `Number` type loses precision above `9007199254740991` (15 digits). The largest known Armstrong number is 39 digits long! If you need to evaluate astronomically large numbers, you must use `BigInt`:


// function isArmstrongBigInt(n) {
//     if (n < 0n) return false;
    
//     // We have to use strings to count digits for BigInt since Math.log10 doesn't support it,
//     // but we can still do the math operations iteratively.
//     let temp = n;
//     const numDigits = BigInt(n.toString().length); 
    
//     let sum = 0n;

//     while (temp > 0n) {
//         const digit = temp % 10n;
//         sum += digit ** numDigits;
//         temp = temp / 10n; // BigInt division automatically floors
//     }

//     return sum === n;
// }

// console.log(isArmstrongBigInt(115132219018763992565095597973971522401n)); // true
