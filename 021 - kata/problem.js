// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 50 ga ko'paytirilgan va 6 ga oshirilgan qiymatni qaytaradigan funksiya yarating. Agar kiritilgan qiymat satr bo'lsa, u "Xato" ni qaytarishi kerak.

const problem = x => (typeof x === 'string' ? 'Error' : x * 50 + 6);

console.log (problem (''));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
