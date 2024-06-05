/*
Pig Latin is a fun take on the English language where you move any consonant
cluster from the start of the word to the end of the word; when words begin on a
vowel, you simply add "-yay".

Vowels are the letters "a", "e", "i", "o", "u".

Write a function pigLatinWord that takes in a word string and translates the
word into Pig Latin. For this problem use the String's slice() method. The
slice() method extracts a section of a string and returns it as a string.
Hint: Remember the String.includes method!

So the two rules for our version of Pig Latin are:
1. For words that start with a vowel, add 'yay' to the end of the word.
2. For words that start with a non-vowel, move all letters that come **before
   the first vowel** to the **end of the word** then add 'ay'
*/


// const str = "Hello, world!";
// const sliced = str.slice(7, 12); // Extracts characters from index 7 to 11
// console.log(sliced); // Output: "world"




function pigLatinWord(word) {
  
    let char = word[0]
    if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u") {
        return word + "yay";
    } else {
        let firstVowelIndex = 0;
        let i = 0;
        while (i < word.length) {
            let char1 = word[i]
            if (char1 === "a" || char1 === "e"|| char1 === "i"|| char1 === "o"|| char1 === "u") {
                firstVowelIndex = i;
                break;
            }
            i++;
        }
        return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
    }
}


console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pigLatinWord;
