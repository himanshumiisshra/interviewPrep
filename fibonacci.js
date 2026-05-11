// For an optimal Fibonacci solution in Node.js, the best practical approach is the Iterative Method using BigInt.While recursion with memoization is popular, the iterative approach is superior because it achieves $O(n)$ Time Complexity and $O(1)$ Space Complexity (preventing the call stack overflow errors that recursion can cause).Additionally, because Fibonacci numbers grow exponentially, they quickly exceed JavaScript's Number.MAX_SAFE_INTEGER (around the 78th Fibonacci number). Using BigInt ensures your solution remains perfectly accurate for very large numbers.The Optimal Solution: Iterative + BigIntJavaScript/**
//  * Calculates the nth Fibonacci number optimally.
//  * Time Complexity: O(n)
//  * Space Complexity: O(1)
//  */
function fibonacci(n) {
    // Handle edge cases
    if (n < 0) throw new Error("Input must be a non-negative integer");
    if (n === 0) return 0n;
    if (n === 1) return 1n;

    let prev = 0n;
    let curr = 1n;

    // Iterate from 2 to n, keeping track of only the last two numbers
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

// Example usage:
console.log(fibonacci(10).toString());  // 55
console.log(fibonacci(100).toString()); // 354224848179261915075
// Why is this optimal?$O(1)$ Space Complexity: Unlike memoization, which stores an array or hash map of $n$ elements ($O(n)$ space), this only stores two variables (prev and curr).No Maximum Call Stack Size Exceeded: Deep recursion in Node.js will eventually crash. A for loop can run infinitely without stack overflow issues.Precision: By using 0n and 1n (the BigInt primitive in JS), the program avoids floating-point rounding errors for large results.