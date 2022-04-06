function generatePassword(){
  //TODO: your code goes here
//  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  var passwordLength = 12;
//  var password = "";
//  for ( var i=0; i<=passwordLength; i++){
//    var randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring (randonNumber, randomNumber +1);
//  }
// document.getElementById("password").value = password;
  
prompt("Welcome! Choose password length of at least 8 characters.");
  var randomLetter=["zlkearg@$#@$taknvoah845r92rjfdkgjh%24"];
  var randomNumber=["23874175897"];
  var randomSpecial=["hgjkhgjhgiu&%@"];
  var passwordLength = 8 ;
prompt("Include uppercase?");
  
  prompt("Include lowercase?");
  prompt("Include numbers?");
  prompt("Include special characters?");
 
  alert("Voila!Congrats! here is your new password, to generate a new one, click on generate password");

  var randomPass= randomLetter.concat(randomNumber, randomSpecial);
  var randomG= randomPass.join('');
  var randomText= randomG.substring(Math.floor(Math.random() * randomG.length), Math.floor(Math.random() * randomG.length) + 4);
  var randomInput= randomG.substring(Math.floor(Math.random() * randomG.length), Math.floor(Math.random() * randomG.length) + 4);
  var randomMg= randomText.concat(randomInput.toUpperCase().trim());
  for(var i=0; i< passwordLength; i++){
    
  }
  return randomMg;
  
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
