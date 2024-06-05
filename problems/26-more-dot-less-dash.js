/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

// Your code here 
function moreDotLessDash(str){
    i = 0
    let countDashes = 0
    let countDots = 0
    while (i < str.length) {
        if (str[i] === '.') {
            countDots++
        } else if (str[i] === '-') {
            countDashes ++
        }
        i++
    }
    if (countDots > countDashes) {
        return true
    }
    return false
}

console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
