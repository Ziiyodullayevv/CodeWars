// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Raqamlar qatorini hisobga olgan holda, 5 dan past bo'lgan har qanday raqamni "0" bilan, 5 va undan yuqori raqamlarni esa "1" bilan almashtirishingiz kerak. Olingan qatorni qaytaring.

// OUTPUT:
// '1245' -> '0001'

// YECHIM:

function fakeBin (x) {
  return x.split ('').map (n => (n < 5 ? 0 : 1)).join ('');
}
//console.log(fakeBin('1234567890'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
