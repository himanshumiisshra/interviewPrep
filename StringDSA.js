//1. chcek amrstrong number
// This function checks if a given number is an Armstrong number.
// An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of 3.
function checkArmstrong(x) {
    // Store the original number to compare with the calculated sum later
    var originalNum = x;
    var sum = 0;
    // Extract and process each digit of the number
    while (x > 0) {
        var lastDigit = x % 10; // Get the last digit
        sum = sum + Math.pow(lastDigit, 3); // Add the cube of the digit to the sum
        x = Math.floor(x / 10); // Remove the last digit
    }
    // Check if the sum of cubes of digits is equal to the original number
    return sum === originalNum;
}
// Test case: Check if 371 is an Armstrong number
var armstrongNums = 371;
var isArmstrong = checkArmstrong(armstrongNums);
console.log(isArmstrong); // Output: true (371 is an Armstrong number)

//2. max Characters
function maxChars(str) {
    var m = new Map();
    var i = 0;
    var max = 0;
    var maxChar = '';
    while (i < str.length) {
        if (m.get(str[i])) {
            var value = m.get(str[i]) + 1;
            m.set(str[i], value);
            if (max < m.get(str[i])) {
                max = m.get(str[i]);
                maxChar = str[i];
            }
        }
        else {
            m.set(str[i], 1);
        }
        i++;
    }
    console.log(maxChar, max);
}
maxChars("abccccd");

//3. fizz Buzz

function checkIsDivisibleBy(n, d) {
    if (n % d === 0)
        return true;
    else
        return false;
}
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (checkIsDivisibleBy(i, 3) && checkIsDivisibleBy(i, 5)) {
            console.log("FizzBuzz");
        }
        else if (checkIsDivisibleBy(i, 3) && !checkIsDivisibleBy(i, 5)) {
            console.log("Fizz");
        }
        else if (checkIsDivisibleBy(i, 5) && !checkIsDivisibleBy(i, 3)) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);


//4. array chuncking
var arrForChunking = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
function arrayChunking(arr, n) {
    var chunkedArr = [];
    for (var i = 0; i < arr.length; i++) {
        var lastChunk = chunkedArr[chunkedArr.length - 1];
        if ((lastChunk === null || lastChunk === void 0 ? void 0 : lastChunk.length) < n) {
            lastChunk.push(arr[i]);
        }
        else {
            chunkedArr.push([arr[i]]);
        }
    }
    console.log(chunkedArr);
}
arrayChunking(arrForChunking, 5);


//5. anagrams

function checkAnagrams(str1, str2) {
    var str1Map = new Map();
    var str2Map = new Map();
    if (str1.length !== str2.length) {
        return false;
    }
    for (var i = 0; i < str1.length; i++) {
        if (str1Map.get(str1[i])) {
            var value = str1Map.get(str1[i]) + 1;
            str1Map.set(str1[i], value);
        }
        else {
            str1Map.set(str1[i], 1);
        }
        if (str2Map.get(str2[i])) {
            var value = str2Map.get(str2[i]) + 1;
            str2Map.set(str2[i], value);
        }
        else {
            str2Map.set(str2[i], 1);
        }
    }
    for (var i = 0; i < str1.length; i++) {
        if (str1Map.get(str1[i]) !== str2Map.get(str1[i])) {
            return false;
        }
    }
    return true;
}
var isAnagram = checkAnagrams("listen", "silent");
console.log(isAnagram);


