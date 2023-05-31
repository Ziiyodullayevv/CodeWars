// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bolalar toddy ichishadi.
// Yoshlar kola ichishadi.
// Yosh kattalar pivo ichishadi.
// Kattalar viski ichishadi.
// Yoshni qabul qiladigan funktsiyani yarating va ular ichgan narsalarni qaytaring.

// Qoidalar:

// 14 yoshgacha bo'lgan bolalar.
// 18 yoshgacha bo'lgan o'smirlar.
// 21 yoshgacha bo'lgan yoshlar.
// Kattalar 21 yoki undan ko'p.

// Yechim:

const peopleWithAgeDrink = age =>
  age < 14
    ? 'drink toddy'
    : age < 18 ? 'drink coke' : age < 21 ? 'drink beer' : 'drink whisky';

// console.log (peopleWithAgeDrink (15));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
