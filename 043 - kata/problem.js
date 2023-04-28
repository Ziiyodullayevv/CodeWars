// __________________________________________________________________________

// Object berilagan va uning qiymati har doim raqam ekanligini tahmin qilishingiz mumkin. Objectning qiymatlaridan s sonni ayiring va chiqadigan eng kichik qiymatni oladigan funksiya yozing.

// Output:

// calc (12, {x: 23, y: 10, z: 17}) ===> -2;

// Yechim:

const calc = (n, obj) => {
  let object = Object.values (obj);
  let array = object.map (value => value - n);
  return Math.min (...array);
};

console.log (calc (12, {x: 23, y: 10, z: 17}));

// ________________________________________________________________________
