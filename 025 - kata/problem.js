// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Sizning vazifangiz har qanday manfiy bo'lmagan butun sonni argument sifatida qabul qiladigan va uni raqamlari bilan kamayish tartibida qaytara oladigan funktsiyani yaratishdir. Asosan, mumkin bo'lgan eng yuqori raqamni yaratish uchun raqamlarni o'zgartiring.

// OUTPUT:
// Kirish: 42145 Chiqish:54421
// Kirish: 145263 Chiqish:654321
// Kirish: 123456789 Chiqish:987654321

function descendingOrder (n) {
    return parseInt (n.toString ().split ('').sort ((a, b) => b - a).join (''));
  }
  
  //console.log(descendingOrder(15));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
