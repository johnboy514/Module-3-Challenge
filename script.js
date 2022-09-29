// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
//get backslash to work
var passwordLength = 8;

var letterChoice = true;
var lettersUChoice = true;
var numbersChoice = true;
var specialChoice = true;

// functions
function generateCharacter(useLetters, useUppers, useNumbers, useSpecial) {
  var set = []
  if (useLetters) set = set.concat(letters)
  if (useUppers) set = set.concat(lettersU)
  if (useNumbers) set = set.concat(numbers)
  if (useSpecial) set = set.concat(special)
  return set[Math.floor(Math.random() * set.length)];
}

// execution
var password = ""
var length = 8

for(var i = 0; i < length; i++){
  password += generateCharacter(true, true, true, true)
  // if else
}

console.log(password)



// function generatePassword() {
//   var password = "";
//   for (let i=0; i < passwordLength; i++) {
//     password+= generateLetter();
// }

// return password;
// };


// //Testing

// console.log(generatePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Trying to get random x
const total = 10;
const max = 4;
const fillWithRandom = (max, total, len = 4) => {
   let arr = new Array(len);
   let sum = 0;
   do {
      for (let i = 0; i < len; i++) {
         arr[i] = Math.random();
      }
      sum = arr.reduce((acc, val) => acc + val, 0);
      const scale = (total - len) / sum;
      arr = arr.map(val => Math.min(max, Math.round(val * scale) + 1));
      sum = arr.reduce((acc, val) => acc + val, 0);
   } while (sum - total);
   return arr;
};
console.log(fillWithRandom(max, total));