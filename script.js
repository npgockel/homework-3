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

// HTML idss

// Function to generate password
function generatePassword() {
  // Password length
  var passLength = document.getElementById("length").value;

  // Character Choice Classes (CCC)
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var numerChar = "1234567890";
  var speciChar = "!@#$%^&*()_+";

  // Containers for CCC (Boolean)
  var addUpper = false;
  var addLower = false;
  var addNumer = false;
  var addSpeci = false;

  // Event listeners for CCC

  document.addEventListener("DOMContentLoaded", function(event) {
    var checkUpper = document.querySelector("input[name=upper-char]");
    checkUpper.addEventListener("change", function(event) {
      if (checkUpper.checked) {
        addUpper = true;
        console.log(addUpper)
      } else {
        // do something else otherwise
      }
    });
  });

  var checkLower = document.querySelector("input[name=lower-char]");

  checkLower.addEventListener("change", function() {
    if (this.checked) {
      // Checkbox is checked..
    } else {
      // Checkbox is not checked..
    }
  });

  var checkNumer = document.querySelector("input[name=numer-char]");

  checkNumer.addEventListener("change", function() {
    if (this.checked) {
      // Checkbox is checked..
    } else {
      // Checkbox is not checked..
    }
  });

  var checkSpeci = document.querySelector("input[name=speci-char]");

  checkSpeci.addEventListener("change", function() {
    if (this.checked) {
      // Checkbox is checked..
    } else {
      // Checkbox is not checked..
    }
  });

  // The generated password container
  var password = "";

  document.getElementById("password").value = password;
}
