//_____________________________________________________

// Ba'zi raqamlardan iborat massiv mavjud. Bittadan tashqari barcha raqamlar teng. Uni topishga harakat qiling!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// Yechim:

const findUniq = arr => {
  arr.sort ((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop () : arr[0];
};

// console.log (findUniq ([1, 1, 1, 2, 1, 1]));

//_____________________________________________________
