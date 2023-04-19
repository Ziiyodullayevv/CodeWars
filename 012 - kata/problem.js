// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Hamma hayvonlar bayram qilishmoqda! Har bir hayvon bitta idish olib keladi. Faqat bitta qoida bor: taom hayvon nomi bilan bir xil harflar bilan boshlanishi va tugashi kerak.

// OUTPUT:
// feast("great blue heron", "garlic naan"), true)
// feast("chickadee", "chocolate cake"), true)
// feast("brown bear", "bear claw"), false)

function feast (beast, dish) {
  return beast[0] === dish[0] && beast.slice (-1) === dish.slice (-1);
}
//console.log("great blue heron", "garlic naan");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
