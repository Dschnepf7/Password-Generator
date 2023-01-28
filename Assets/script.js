// PSEUDOCODE DONE WITH TA SAM ADAMS

//user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
    //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, gt 8 lt 129
    //then user is prompted password length 

    //if(passwordLength < 8){
      //alert('Password length must be at least 8 characters');
    //}
    
//then user confirms for password criteria
  //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  //var hasLower = confirm("Click OK to confirm including lowercase characters.")
  //var hasUpper = confirm("Click OK to confirm including Upper characters.");
  //var hasSpecial = confirm("Click OK to confirm including Special characters.");

  //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type');
  //}

  //object to store user input
  //var userPassword = {
      //length: passwordLength,
      //hasNumeric: hasNumeric,
      //hasLower: hasLower,
      //hasUpper: hasUpper,
      //hasSpecial: hasSpecial,
  //}
  // return userPassword;

  //create another function to generate the password
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screen



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var capLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialChars = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",":","^","{",".","|","}","~"]
var  numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);

function writePassword(){
  var passwordLength = prompt("How many characters would you like your password to be?");
  if(passwordLength < 8){
    alert("Password length must be at least 8 characters.");
    prompt("How many characters would you like your password to be?");
  }

  if(passwordLength > 129){
    alert("Password length must be less thatn 129 characters.");
    prompt("How many characters would you like your password to be?");
  }
  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  var hasLower = confirm("Click OK to confirm including lower-case characters. ");
  var hasUpper = confirm("Click OK to confirm including upper-case characters.");
  var hasSpecial = confirm("Click OK to confirm including Special characters.");

  if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
    alert('Must select at least one character type')
    confirm("Click OK to confirm including numeric characters.");
    confirm("Click OK to confirm including lower-case characters. ");
    confirm("Click OK to confirm including upper-case characters.");
    confirm("Click OK to confirm including Special characters.");
  } 

  var userPassword = {
    length: passwordLength,
    hasNumeric: hasNumeric,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasSpecial: hasSpecial,
  }
  return userPassword;
}


function generatePassword() {
  var userOptions = getOptions();
  var possibleChars = [];
  var guaranteedChars = [];
  var remainingChars = [];

  if(userOptions.hasUpper === true){
  possibleChars = possibleChars.concat(numericCharacters);
  guaranteedChars.push(capLetter[Math.floor(Math.random() * capLetter.length)]);
  }
  if(userOptions.hasLower === true){
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChars.push(lowLetter[Math.floor(Math.random() * lowLetter.length)]);
  }
  if(userOptions.hasNumeric === true){
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChars.push(numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
  }
  if(userOptions.hasSpecial === true){
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
  }

  var guaranteedLength=guaranteedChars.length;
  
  for(var index = 0; index <(userOptions.length-guaranteedLength); index++) {
    remainingChars.push(possibleChars[Math.floor(Math.random() * possibleChars.length)])
  }

  var almostPass = guaranteedChars.concat(remainingChars);
  var finalPassword = almostPass.join("");

  return finalPassword;

}




