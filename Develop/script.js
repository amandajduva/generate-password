// Assignment code here
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacter = ["!", "@", "$", "%", "&", "*", "_", "+", "=", "?", "~"]; 

let userLength = function() {
  // prompt user input
  let length = window.prompt("Enter the amount of characters you would like in your password: must be at least 8 and no more than 128.");

  // If user pressed Cancel, immediately end function
  if (!length) {
    return;
  }
  
  // check conditions for acceptable length
  if (length < 8 || length > 128) {
    window.alert("Your password must be between 8-128 chracters!");
    length;
  } else if (length >= 8 || length <= 128) {
    window.alert("Great! Let's move on");
  };
}
// Run length function
userLength();

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
