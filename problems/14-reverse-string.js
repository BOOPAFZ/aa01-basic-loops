/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

// Your code here 
function reverseString(str){
    let index = str.length-1;
    let result = "";
    while( index >= 0 ){
        char = str[index];
        result += char;
        index--



    }
    return result;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
