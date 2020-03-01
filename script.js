// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

// Function to generate password
function generatePassword() {
  // Declare Password var
  var passwordGen = "";

  //Prompt for password length
  var passLength;
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("How long would you like your password?  Choose 8-128");
    console.log(passLength);
  }

  // Character Choices Array
  var charChoices = [
    "ABCDEFGHIJKLMNOPQRSTUVWZYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "1234567890",
    "!@#$%^&*()_+"
  ];
  // Chosen Character Concat container
  var charChosen = [];

  // Confirm Dialog for Character Choices; adding chosen password elements to charChosen[]. Needs to DRY
  var charUpper = confirm("Include Uppercase Letters in Password?");
  if (charUpper === true) {
    charChosen.push(charChoices[0]);
    console.log(charChosen);
  }
  var charLower = confirm("Include Lowercase Letters in Password?");
  if (charLower === true) {
    charChosen.push(charChoices[1]);
    console.log(charChosen);
  }
  var charNumer = confirm("Include Numbers in Password?");
  if (charNumer === true) {
    charChosen.push(charChoices[2]);
    console.log(charChosen);
  }
  var charSpeci = confirm("Include Special Characters in Password?");
  if (charSpeci === true) {
    charChosen.push(charChoices[3]);
    console.log(charChosen);
  }

  // Concatenating or 'Joining' charChosen[] without spaces
  var conCharChosen = charChosen.join("");
  console.log(conCharChosen);

  // Randomly selecting characters from joined charChosen[]
  for (var i = 0; i <= passLength; i++) {
    passwordGen =
      passwordGen +
      conCharChosen.charAt(
        Math.floor(Math.random() * Math.floor(conCharChosen.length - 1))
      );
  }

  // Setting var to display generated password
  var passwordText = document.querySelector("#password");
// Setting value of #password to generated password
  passwordText.value = passwordGen;

}
