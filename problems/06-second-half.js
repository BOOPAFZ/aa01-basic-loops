/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

function secondHalf(str) {
  let index;

  if (str.length % 2 === 0) { 
    index = str.length / 2;
  } else {
    index = (str.length + 1) / 2;
  }

  let result = "";
  
  while (index < str.length) {
    let char = str[index];
    result = result + char;
    index++;
  }
  
  return result;
} 

console.log(secondHalf('academy')); // 'emy'
console.log(secondHalf('planet'));  // 'net'
console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
