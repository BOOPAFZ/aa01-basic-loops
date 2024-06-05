/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function abbreviate(str) {
    let index = 0;
    let result = "";
    while (str.length > index) {
        char = str.toLowerCase()[index]
        if (!(char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u")) {
            result += char;
        }
        index++
    }
    return result;
}
console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
