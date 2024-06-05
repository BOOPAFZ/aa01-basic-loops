/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
  // Your code here 
  let index = str.length - 1; 
  let result = ""
  while (index >= 0) {
    let char = str[index];
    if ( index % 2 !== 0) {
      result += char;
    }
    index--
  }
  return result;
}

console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
