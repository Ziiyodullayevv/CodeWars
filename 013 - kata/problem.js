// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Sizning jamoangiz ajoyib yangi matn muharriri yozmoqda va sizga satrlarni raqamlashni amalga oshirish vazifasi yuklangan.
// Satrlar ro'yxatini oladigan va har bir qatorni to'g'ri raqam bilan qaytaradigan funktsiyani yozing.
// Raqamlash 1 dan boshlanadi. Format n: string. Yo'g'on ichak va ularning orasidagi bo'shliqqa e'tibor bering.

// OUTPUT:

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let arr = ['a', 'b', 'c'];

// YECHIM:
var number = function (array) {
  return array.map (function (value, index) {
    return `${index + 1}: ${value}`;
  });
};

console.log (number (arr));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
