const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const checkedEl = document.querySelectorAll("checkbox");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+/*-+<>?|";

// this function is to set all the function to output random uppercase, lowercase, numbers, symbols
function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// function to generate password

function generatePassword() {
  const len = lenEl.value;
  let password = "";
  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }
  pwEl.innerHTML = password;
}

// fixing the undefined screen
if (checkedEl.value == "") {
  // return "check the checkbox";
}

// generate all the required
function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }
  if (lowerEl.checked) {
    xs.push(getLowercase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  return xs[Math.floor(Math.random() * xs.length)];
}

// the user click and generate password
generateEl.addEventListener("click", generatePassword);
