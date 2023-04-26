// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Berilgan satrning har bir harfi 2martadan takrorlanishi kerak.

// Output:

// "String"      -> "SSttrriinngg"
// "Hello World" -> "HHeelllloo  WWoorrlldd"
// "1234!_ "     -> "11223344!!__  "

// YECHIM:

// 1 - USUL:
function doubleChar (str) {
  let word = '';
  for (let i = 0; i < str.length; i++) {
    word += str[i] + str[i];
  }
  return word;
}
//console.log(doubleChar('String'));

// 2 - USUL:
//const doubleChar = (str) => str.split("").map(c => c + c).join("");
// console.log(doubleChar('String'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
