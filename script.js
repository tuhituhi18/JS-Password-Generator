//var
var passwordLength = prompt("Please select a password lenght? (between 8-128 characters")
var upperCase = prompt("Do you want to include upper case letters");
var numbers = confirm("Do you want to include numbers");
var specialChar = prompt("Do want to inlude special characters");


var charSet = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
var num = 1234567890;
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  for (var i = 0; i <= 8; i++) {
    var chars = Math.floor(Math.random() * 10) + 1;
}
//var passwordLength = prompt("Please select a passweod length? (Between 8-128 characters)");
//var numbers = confirm("Do you want to inlucde numbers?");
// Assignment Code
var userInput = prompt(
  "Please select a password length? (Between 8-128 characters)"
);
for (var i = 0; i < userInput; i++) {
  var num = Math.floor(Math.random() * 10) + 1;
  console.log(num);
}
var upperCase = confirm("Do you want to include upper case letters?");
if (upperCase === false) {
  charSet = charSet.toLowerCase();
  var computerGuessUpper = charSet[Math.floor(Math.random() * charSet.length)];
  console.log(computerGuessUpper);
} else {
  var computerGuessLower = charSet[Math.floor(Math.random() * charSet.length)];
  console.log(computerGuessLower);
}
var specialCharacters = confirm("Do want to include special characters?");
if (specialCharacters === true) {
  var userSpSel = charSpecial[Math.floor(Math.random() * charSet.length)];
  console.log(userSpSel);
}



console.log(window);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);