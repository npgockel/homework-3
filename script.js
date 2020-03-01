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

// HTML idss

// Global vars
var upperChar;

// Function to generate password
function generatePassword() {
  // Password length
  var passLength = document.getElementById("length").value;

  // Character Choice Classes (CCC)
  // var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  // var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  // var numerChar = "1234567890";
  // var speciChar = "!@#$%^&*()_+";
  var ccc = [
    "ABCDEFGHIJKLMNOPQRSTUVWZYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "1234567890",
    "!@#$%^&*()_+"
  ];

  // Boolean array for CCC choices.
  // [upperChar, lowerChar, numerChar, speciChar]
  var boolCcc = [false, false, false, false];

// // Containers for CCC (Boolean)
// var addUpper = false;
// var addLower = false;
// var addNumer = false;
// var addSpeci = false;



  // Event listeners for CCC
  document.getElementById("upper-char").onclick = function() {
    if (this.checked) {
      boolCcc[0] = true;
      console.log(boolCcc[0]);
    } else {
      boolCcc[0] = false;
      console.log(boolCcc[0]);
    }
  };
  document.getElementById("lower-char").onclick = function() {
    if (this.checked) {
      boolCcc[1] = true;
      console.log(boolCcc[1]);
    } else {
      boolCcc[1] = false;
      console.log(boolCcc[1]);
    }
  };
  document.getElementById("numer-char").onclick = function() {
    if (this.checked) {
      boolCcc[2] = true;
      console.log(boolCcc[2]);
    } else {
      boolCcc[2] = false;
      console.log(boolCcc[2]);
    }
  };
  document.getElementById("speci-char").onclick = function() {
    if (this.checked) {
      boolCcc[3] = true;
      console.log(boolCcc[3]);
    } else {
      boolCcc[3] = false;
      console.log(boolCcc[3]);
    }
  };



  // The generated password container
  var password = "";

  // Random Character Selector

  // values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))

  document.getElementById("password").value = password;
}
