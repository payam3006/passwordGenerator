const q = console.log;

let upperChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = [
  "!",
  " ",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  "?",
  "@",
  "|",
  '"',
  "'",
  "(",
  ")",
  ",",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "~",
];

let characterList = [];
// characterList = characterList
//   .concat(upperChars)
//   .concat(lowerChars)
//   .concat(numbers)
//   .concat(symbols);
// q(characterList);

const generatePass = () => {
  let pass = "";
  document.getElementById("message").innerText = "";
  document.getElementById("pass").innerText = "";

  characterList = [];
  let passLenght = document.getElementById("passwordLength").value;
  if (passLenght < 4) {
    document.getElementById("message").innerText = "make a bigger password!";
  } else {
    if (document.getElementById("upperCase").checked) {
      characterList = characterList.concat(upperChars);
    }
    if (document.getElementById("lowerCase").checked) {
      characterList = characterList.concat(lowerChars);
    }
    if (document.getElementById("numbers").checked) {
      characterList = characterList.concat(numbers);
    }
    if (document.getElementById("symbols").checked) {
      characterList = characterList.concat(symbols);
    }
    if (characterList.length == 0) {
      document.getElementById("message").innerText =
        "please check at least one item!";
    } else {
      //   q(characterList[Math.floor(Math.random() * characterList.length)]);

      for (let i = 0; i < passLenght; i++) {
        pass += `${
          characterList[Math.floor(Math.random() * characterList.length)]
        }`;
      }
    }
  }

  document.getElementById("pass").innerText = `${pass}`;

  //   q(pass);
};

const copyText = () => {
  // Copy the text inside the text field
  navigator.clipboard.writeText(document.getElementById("pass").innerText);

  // Alert the copied text
  alert(
    "This Password Copied on Clipboard: " +
      document.getElementById("pass").innerText
  );
};
