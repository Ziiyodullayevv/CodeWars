// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Birliklar va nollardan iborat massiv berilgan, ekvivalent ikkilik qiymatni butun songa aylantiring.

// Masalan: ning ikkilik ko'rinishi sifatida [0, 0, 0, 1] qaraladi .0001 -> 1

// Output:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15

// yechim:

const binaryArrayToNumber = arr => {
  return parseInt (arr.join (''), 2);
};
// binaryArrayToNumber ([0, 0, 0, 1]);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
