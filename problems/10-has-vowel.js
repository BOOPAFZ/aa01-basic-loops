/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function hasVowel(str) {
    let index = 0;

    while (str.length > index) {
        let char = str[index]
        if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u") {
            return true
        } 
        
        index++
    }
    return false

}
console.log(hasVowel('dog'));          // => true
console.log(hasVowel('conventional')); // => true
console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
