/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function countVowels(str) {
    let index = 0;
    let count = 0;
    while (str.length > index) {
        char = str[index]
        if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u") {
            count++
        }
        index++
    }
    return count

}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple"));    // => 2
console.log(countVowels("pizza"));    // => 2
console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
