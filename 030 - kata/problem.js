// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Oy 1 dan 12 gacha butun son sifatida berilgan bo'lsa, u butun son sifatida yilning qaysi choragiga tegishli ekanligini qaytaring.

// OUTPUT:
// quarterOf(3),  --> 1
// quarterOf(8), --> 3
// quarterOf(11), --> 4

// YECHIM:

// 1 - USUL:
const quarterOf = month => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};
//console.log(quarterOf(3));

// 2 - USUL:
//const quarterOf = month => Math.ceil(month / 3);
//console.log(quarterOf(3));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
