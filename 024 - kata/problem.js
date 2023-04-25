// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Trolllar sizning sharhlar bo'limingizga hujum qilmoqda!
// Ushbu vaziyatni hal qilishning keng tarqalgan usuli - trollarning izohlaridan barcha unli tovushlarni olib tashlash, tahdidni zararsizlantirish.

// Sizning vazifangiz satrni oladigan funktsiyani yozish va barcha unlilar olib tashlangan yangi qatorni qaytarishdir.

// OUTPUT:
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// YECHIM:

// 1 - USUL:
const vowels = 'aeiou';

function disemvowel (str) {
  return str
    .split ('')
    .filter (letter => !vowels.includes (letter.toLowerCase ()))
    .join ('');
}
//console.log(disemvowel('Hello world LOL'));

// 2 - USUL:
function disemvowel (str) {
  return str.replace (/[auieo]/gi, '');
}
//console.log(disemvowel('Hello world LOL'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~