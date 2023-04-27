// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Qahramon o'z vazifasini bajarish uchun qasrga ketmoqda. Biroq, unga qasr bir nechta kuchli ajdarlar bilan o'ralganligini aytishdi! Har bir ajdaho mag'lub bo'lish uchun 2 ta o'q oladi, bizning qahramonimiz qancha o'q olib yurishi kerakligini bilmaydi. Agar u ma'lum miqdordagi o'qlarni ushlab, boshqa ma'lum miqdordagi ajdarlar bilan jang qilish uchun oldinga siljiydi deb faraz qilsak, u omon qoladimi?

// Ha bo'lsa True, aks holda False qaytaring :)

// OUTPUT:
// hero(10, 5), true
// hero(7, 4), false
// hero(4, 5), false
// hero(100, 40), true
// hero(1500, 751), false
// hero(0, 1), false

// YECHIM:
function hero (bullets, dragons) {
  return bullets >= dragons * 2;
}
// console.log((hero(4, 2)));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
