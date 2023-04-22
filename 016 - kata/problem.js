// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Massivni satr uzunligi bo'yicha tartiblang

// Argument sifatida satrlar massivini oladigan va eng qisqadan eng uzuniga tartiblangan bir xil satrlarni o'z ichiga olgan tartiblangan massivni qaytaradigan funksiya yozing.

// Misol uchun, agar ushbu massiv argument sifatida berilgan bo'lsa:
// ["Telescopes", "Glasses", "Eyes", "Monocles"];

// Sizning funktsiyangiz quyidagi qatorni qaytaradi:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// Funktsiyangizga uzatilgan massivdagi barcha satrlar turli uzunliklarda bo'ladi, shuning uchun siz bir xil uzunlikdagi bir nechta satrlarni qanday buyurtma qilishni hal qilishingiz shart emas.

// Yechim:

function sortByLength (array) {
  let arrSort = array.sort ((a, b) => a.length - b.length);
  return arrSort;
}
console.log (sortByLength (['Telescopes', 'Glasses', 'Eyes', 'Monocles']));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
