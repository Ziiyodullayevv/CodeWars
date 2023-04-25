// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Berilgan qatordagi unlilar sonini (hisobini) qaytaring.

// OUTPUT:
//'abcafde' -> 3

// YECHIM:

function getCount (str) {
  let vowels = ['a', 'o', 'e', 'i', 'u'];
  return str.split ('').filter (a => vowels.includes (a)).length;
}

//console.log(getCount('abaco'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
