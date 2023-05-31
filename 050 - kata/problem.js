// _______________________________________________________

// Satrda bir xil miqdordagi "x" va "o" harflari mavjudligini tekshiring. Usul mantiqiy qiymatni qaytarishi va katta-kichik harflarga sezgir bo'lmasligi kerak. Satr har qanday belgini o'z ichiga olishi mumkin.

// Misollar kiritish/chiqish:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Yechim: (1 - usul);

const XO = str => {
  str = str.toLowerCase ().split ('');
  return (
    str.filter (x => x === 'x').length === str.filter (x => x === 'o').length
  );
};

// Yechim: (2 - usul);

function XO (str) {
  return (
    str.toLowerCase ().split ('x').length ===
    str.toLowerCase ().split ('o').length
  );
}
// console.log (XO ('xxxmm'));

// _______________________________________________________
