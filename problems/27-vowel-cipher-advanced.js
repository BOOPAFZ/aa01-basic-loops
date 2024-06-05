/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

function vowelCipher(str) {
    let result = '';
    let i = 0;

    while (i < str.length) {
        let char = str[i]
        
        if (char === 'a') {
            result += 'e';
        } else if (char === 'e') {
            result += 'i';
        } else if (char === 'i') {
            result += 'o';
        } else if (char === 'o') {
            result += 'u';
        } else if (char === 'u') {
            result += 'a';
        } else {
            result += char
        }

        i++;
    }

    return result
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
