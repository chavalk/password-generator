// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
var alphabetUppercase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Please select a password length between 8 and 128 characters.");
  var password = "";
  while(passwordLength < 8 || passwordLength > 128){
    alert("Invalid password length.");
    passwordLength = prompt("Please select a password length between 8 and 128 characters.");
  }
  var uppercaseConfirm = confirm("Would you like to include uppercase letters?");
  var lowercaseConfirm = confirm("Would you like to include lowercase letters?");
  var numbersConfirm = confirm("Would you like to include numbers?");
  var symbolsConfirm = confirm("Would you like to include symbols?");
  while(!uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && !symbolsConfirm){
    alert("Please select at least one character type.");
    uppercaseConfirm = confirm("Would you like to include uppercase letters?");
    lowercaseConfirm = confirm("Would you like to include lowercase letters?");
    numbersConfirm = confirm("Would you like to include numbers?");
    symbolsConfirm = confirm("Would you like to include symbols?");
  }
  if(uppercaseConfirm && lowercaseConfirm && numbersConfirm && symbolsConfirm){
    for (var i = 0; i < passwordLength; i++) {
      alphabetLowercase += alphabetUppercase + numbers + symbols;
      password += alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)];
    }
    return password; 
  } else if(lowercaseConfirm && numbersConfirm && symbolsConfirm){
    for (var i = 0; i < passwordLength; i++) {
      alphabetLowercase += numbers + symbols;
      password += alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)];
    }
      return password; 
  } else if(numbersConfirm && symbolsConfirm){
    for (var i = 0; i < passwordLength; i++) {
      numbers += symbols;
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return password; 
  } else {
    for (var i = 0; i < passwordLength; i++) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return password; 
  } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

