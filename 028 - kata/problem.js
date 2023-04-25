// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Tasodifiy manfiy bo'lmagan raqam berilgan bo'lsa, siz ushbu raqamning raqamlarini massivdagi teskari tartibda qaytarishingiz kerak.

// OUTPUT:
// 35231 -> [1,3,2,5,3];
// 0 -> [0];

// YECHIM:
function digitize (n) {
  return String (n).split ('').map (a => parseInt (a).reverse ());
}
//console.log(digitize(2345));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
