// The most optimal and standard approach to solve the **Longest Common Prefix** problem in Node.js is **Horizontal Scanning**.

// This approach is optimal because it avoids the overhead of sorting the array or creating unnecessary substrings in memory.

// * **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings. In the worst case, all strings are identical, and you compare every character.
// * **Space Complexity:** $O(1)$, because it only requires a single variable to keep track of the prefix, evaluating the strings in place.

// ### The Optimal Solution (Horizontal Scanning)


//  * Finds the longest common prefix string amongst an array of strings.
//  * Time Complexity: O(S) where S is the sum of all characters
//  * Space Complexity: O(1)
//  */
function longestCommonPrefix(strs) {
    // Edge case: empty array
    if (!strs || strs.length === 0) return "";

    // Assume the first string is the common prefix to start
    let prefix = strs[0];

    // Loop through the remaining strings in the array
    for (let i = 1; i < strs.length; i++) {
        // While the current string does NOT start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by 1 character from the end
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If the prefix becomes empty, there is no common prefix
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
console.log(longestCommonPrefix(["interstellar", "internet", "internal"])); // Output: "intern"



// ### How it works:

// 1. **Initialize:** It takes the very first string (e.g., `"flower"`) and assumes it is the longest common prefix.
// 2. **Compare & Reduce:** It looks at the second string (`"flow"`). Since `"flow"` does not start with `"flower"`, it chops the last letter off the prefix (`"flowe"`). It repeats this until the prefix is `"flow"`.
// 3. **Move Forward:** Now the prefix is `"flow"`. It checks the third string (`"flight"`). `"flight"` doesn't start with `"flow"`, so it chops the prefix down step-by-step (`"flo"` $\rightarrow$ `"fl"`).
// 4. **Early Exit:** If the prefix ever gets chopped down to an empty string `""`, the function immediately exits and returns `""`, saving computation time.


// ### Alternative: The "Sort" Trick (Elegant, but slightly slower)

// In JavaScript, many developers use a trick where they sort the array alphabetically first. By doing this, you only need to compare the **first** and **last** strings in the sorted array, because they will have the most differences.

// * **Time Complexity:** $O(N \log N \times M)$ where $N$ is the number of strings and $M$ is the max string length (due to sorting).
// * **Space Complexity:** $O(1)$ or $O(N)$ depending on the JS engine's sorting algorithm.

// function longestCommonPrefixSort(strs) {
//     if (!strs || strs.length === 0) return "";
    
//     // Sort the array lexicographically
//     strs.sort();
    
//     const first = strs[0];
//     const last = strs[strs.length - 1];
//     let i = 0;
    
//     // Compare only the first and last strings
//     while (i < first.length && i < last.length && first[i] === last[i]) {
//         i++;
//     }
    
//     return first.substring(0, i);
// }



// **Which one should you use?** Stick to the **Horizontal Scanning** method for technical interviews or performance-critical applications, as $O(S)$ is strictly faster than $O(N \log N \times M)$ for large datasets. The sort method is great if you want concise, readable code for smaller arrays.

// Would you like to see how to implement this using the `reduce` method for an even more functional programming style?