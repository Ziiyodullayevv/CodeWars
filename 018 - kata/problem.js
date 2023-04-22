// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Sizga "array" va "limit" berilgan. "Array" dagi barcha qiymatlar "limit" qiymatidan past yoki teng ekanligini tekshirishingiz kerak. Agar ular teng bo'lsa, "true" qaytaring. Aks holda, "false" qaytaring.

// Massivdagi barcha qiymatlarni raqamlar deb hisoblashingiz mumkin.

function smallEnough (a, limit) {
  return a.every (value => value <= limit);
}

function smallEnough (a, limit) {
  return Math.max (...a) <= limit;
}

console.log (smallEnough ([2, 4, 6], 8));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
