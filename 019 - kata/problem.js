// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Sizga qatorlar ro'yxati beriladi. Siz uni alifbo tartibida tartiblashingiz kerak (katta-katta va belgilarning ASCII qiymatlari asosida) va keyin birinchi qiymatni qaytarishingiz kerak.

// Qaytarilgan qiymat satr bo'lishi va "***"uning har bir harfi orasida bo'lishi kerak.

// Massivdan elementlarni olib tashlamaslik yoki qo'shish kerak emas.

// Output:

// ["bitcoin", "take", "over", "the","maybe", "who", "knows", "perhaps"] --> 'b***i***t***c***o***i***n';

// ["turns", "out", "random", "test", "cases", "are", "easier", "than", "basic", "ones"]), 'a***r***e';

// Yechim:

function twoSort (arr) {
  let arr = s.sort ((a, b) => a.localeCompare (b));
  return arr.at (0).split ('').join ('***');
}

console.log (
  twoSort ([
    'bitcoin',
    'take',
    'over',
    'the',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ])
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
