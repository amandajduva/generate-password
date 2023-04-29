// Assignment code here
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacter = ["!", "@", "$", "%", "&", "*", "_", "+", "=", "?", "~"]; 

let generatePassword = function() {
  // prompt user input
  let userLength = window.prompt("Enter the amount of characters you would like in your password: must be at least 8 and no more than 128.");

  // If user pressed Cancel, immediately end function
  if (!userLength) {
    return;
  }

}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
