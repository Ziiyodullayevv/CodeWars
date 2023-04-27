// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Belgilarni aniqlash dasturi bosma matnlarni raqamlashtirish uchun keng qo'llaniladi. Shunday qilib, matnlarni kompyuterda tahrirlash, qidirish va saqlash mumkin.
// Hujjatlar (ayniqsa yozuv mashinkasida yozilgan juda eski hujjatlar) raqamlashtirilganda belgilarni aniqlash dasturlari ko'pincha xato qiladi.
// Sizning vazifangiz raqamlashtirilgan matndagi xatolarni tuzatishdir. Siz faqat quyidagi xatolar bilan shug'ullanishingiz kerak:

// S sifatida noto'g'ri talqin qilinadi 5
// Osifatida noto'g'ri talqin qilinadi 0
// Isifatida noto'g'ri talqin qilinadi 1
// Sinov holatlarida faqat noto'g'ri raqamlar mavjud.

// OUTPUT:
// correct("L0ND0N"),"LONDON");
// correct("DUBL1N"),"DUBLIN");
// correct("51NGAP0RE"),"SINGAPORE");
// correct("BUDAPE5T"),"BUDAPEST");
// correct("PAR15"),"PARIS");

// Yechim:

function correct (string) {
  //   return string.replace(/0/gi, "O").replace(/5/gi, "S").replace(/1/gi, "I");
}
console.log (correct ());

// YECHIM:
function strCount (str, letter) {
  return str.split (letter).length - 1;
}
//console.log(strCount('hellol', 'l'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
