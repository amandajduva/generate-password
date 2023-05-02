// Assignment code here
const numberCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacter = ["!", "@", "$", "%", "&", "*", "_", "+", "=", "?", "~"]; 

function generatePassword() {
  let characterOptions = []

  let length = window.prompt("Enter the amount of characters you would like in your password: must be at least 8 and no more than 128.");

  // If user pressed Cancel, immediately end function
  if (!length) {
    window.alert("Your password must be between 8-128 characters!");
    return null;
  }
  
  // check conditions for acceptable length
  if (length < 8 || length > 128) {
    window.alert("Your password must be between 8-128 characters!");
    return null;
  } else if (length >= 8 || length <= 128) {
    window.alert("Great! Let's move on.");
  };

  let lowercase = window.confirm("Do you want to include lowercase letters?");
    if (lowercase) {
      characterOptions = characterOptions.concat(lowercaseCharacters);
      console.log(characterOptions);
    }
    
  let uppercase = window.confirm("Do you want to include uppercase letters?");
    if (uppercase) {
      characterOptions = characterOptions.concat(uppercaseCharacters);
      console.log(characterOptions);
    }

  let number = window.confirm("Do you want to include numbers?");
    if (number) {
      characterOptions = characterOptions.concat(numberCharacter); 
    }

  let special = window.confirm("Do you want to include special characters?");
    if (special) {
      characterOptions = characterOptions.concat(specialCharacter); 
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
