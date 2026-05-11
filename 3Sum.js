// The most optimal and standard way to solve the **3Sum** problem in Node.js is using the **Sorting + Two-Pointer approach**.

// Using a brute-force approach with three nested loops gives a Time Complexity of $O(n^3)$, which will cause a "Time Limit Exceeded" error for large inputs. By sorting the array first, we can reduce the problem to $O(n^2)$ and easily handle the requirement to avoid duplicate triplets without needing extra memory for a `Set`.

// ### The Optimal Solution


/**
 * Finds all unique triplets in the array that sum up to zero.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) or O(n) depending on the sorting algorithm
 */
function threeSum(nums) {
    const results = [];
    
    // 1. Sort the array in ascending order (Crucial for the two-pointer approach)
    nums.sort((a, b) => a - b);

    // 2. Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Optimization: If the smallest number is positive, the sum can never be zero
        if (nums[i] > 0) break;

        // Skip duplicates for the first number to ensure unique triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Initialize two pointers
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a valid triplet
                results.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second number
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the third number
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers inward to look for the next combination
                left++;
                right--;
            } else if (sum < 0) {
                // If the sum is too small, we need a larger number, so move the left pointer right
                left++;
            } else {
                // If the sum is too large, we need a smaller number, so move the right pointer left
                right--;
            }
        }
    }

    return results;
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

console.log(threeSum([0, 0, 0, 0])); 
// Output: [ [ 0, 0, 0 ] ]



// ### Why is this the best approach?

// 1. **Time Complexity is $O(n^2)$**: Sorting takes $O(n \log n)$, and the outer loop runs $n$ times. Inside that loop, the two pointers scan the remaining part of the array in $O(n)$ time. This yields $O(n \log n) + O(n^2)$, which simplifies to $O(n^2)$.
// 2. **Duplicate Handling is Built-in**: Because the array is sorted, identical numbers are adjacent. The `while` loops elegantly skip over duplicates, saving the overhead of converting nested arrays to strings and dumping them into a JavaScript `Set`.
// 3. **Early Exit**: Adding `if (nums[i] > 0) break;` acts as a fast-fail. Once your anchor number crosses zero, all subsequent numbers to its right are also positive, making it mathematically impossible to sum to zero.