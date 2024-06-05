/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

// Your code here 
function tripletTrue(word) {
    if (typeof word !== 'string') {
    return null;
    }
    let i = 0;
    while (i < word.length - 1) { 
        if (word[i] === word[i + 1] && word[i + 1] === word[i + 2]) { 
            return true;
        } 
        i++;
    }
    return false;
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
