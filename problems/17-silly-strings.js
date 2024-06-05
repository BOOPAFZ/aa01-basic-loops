/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// function reverb(word) {
    

//     let i = 0;
//     let mod = ''
//     while (i < firstVowelIndex.length) {
//         let char1 = word.toLowerCase()[i]
//         if (char1 === "a" || char1 === "e"|| char1 === "i"|| char1 === "o"|| char1 === "u"  ) {
//             word = word[i] + "b";
            
//         }
//         i++;
    

    
// }
// return word


// }
function sillyString(word) {
    let modifiedWord = '';
    for (let i = 0; i < word.length; i++) {
        let char1 = word.toLowerCase()[i]
        if (char1 === "a" || char1 === "e"|| char1 === "i"|| char1 === "o"|| char1 === "u"  ) {
            modifiedWord += char1 + 'b' + char1;
        } 
        else {
            modifiedWord += char1;
        }

    }
    return modifiedWord;
}


console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
