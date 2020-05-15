function passwordIsValid(password) {
  var lowerCase = /[a-z]/;
  var upperCase = /[A-Z]/;
  var numbers = /[0-9]/;
  var special = /\W/g;
  var minPasswordNine = /.{9,}/;

  if (password == "") {
    throw Error("password should exist");
  }
  if (!password.match(minPasswordNine)) {
    throw Error("password should be longer than 8 characters");
  }
  if (!password.match(lowerCase)) {
    throw Error("password should have atleast one lowercase letter");
  }
  if (!password.match(upperCase)) {
    throw Error("password should have atleast one uppercase letter");
  }
  if (!password.match(numbers)) {
    throw Error("password should have atleast one number");
  }
  if (!password.match(special)) {
    throw Error("password should have atleast one special character");
  }
}

// passwordIsValid("hddjd");

function passwordIsOk(password) {
  var lowerCase = /[a-z]/;
  var upperCase = /[A-Z]/;
  var numbers = /[0-9]/;
  var special = /\W/g;
  var minPasswordNine = /.{9,}/;
  var strength = 0;

  let isPasswordOk = true;

  if (password.match(minPasswordNine)) {
    strength += 1;
  }
  if (password.match(lowerCase)) {
    strength += 1;
  }
  if (password.match(upperCase)) {
    strength += 1;
  }
  if (password.match(numbers)) {
    strength += 1;
  }
  if (password.match(special)) {
    strength += 1;
  }
  if (strength < 3 || !password.match(minPasswordNine)) {
    isPasswordOk = false;
  }
  return isPasswordOk;
}
console.log(passwordIsOk(""));

module.exports = { passwordIsValid, passwordIsOk };
