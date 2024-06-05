/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

// Your code here 
function doubleLetterCount(word) {
    
    let i = 0;
    let count = 0;
    while (i < word.length - 1) { 
        if (word[i] === word[i + 1]) { 
            count++;
        } 
        i++;
    }
    return count;
}
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
