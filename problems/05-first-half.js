/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
    let index = 0;
    let result = "";
    while (index < str.length / 2) {
      let char = str[index];
      result += char
      index++;
   }
   return result;
} 
console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet'));  // 'pla'
console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
