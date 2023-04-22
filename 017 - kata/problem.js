// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Uzunlik qo'shish:

// Agar bizga bo'sh joy bilan ajratilgan so'zlarning uzunligi o'sha so'zning oxiriga qo'shilishi kerak bo'lsa va u massiv sifatida qaytarilsa-chi?

// Output:

// "apple ban" --> ["apple 5", "ban 3"];
// "you will win" -->["you 3", "will 4", "win 3"];

// Sizning vazifangiz Stringni qabul qiladigan va har bir elementga qo'shilgan har bir so'z uzunligi bilan Massiv ro'yxatni qaytaradigan funktsiyani yozishdir.
// Eslatma: String kamida bitta elementga ega bo'ladi; so'zlar har doim bo'sh joy bilan ajratiladi.

// Yechim:

function addLength (str) {
  let arr = str.split (' ');
  return arr.map (value => `${value} ${value.length}`);
}
console.log (addLength ('apple ban'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
