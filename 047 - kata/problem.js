// ________________________________________________________

// Ko'rsatmalar:
// Argument sifatida bitta satrni word( ) oladigan funksiya yozing . Funktsiya satrdagi barcha bosh harflar indekslarini o'z ichiga olgan tartiblangan ro'yxatni qaytarishi kerak.

// Misol:
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Yechim:

let capitals = word => {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase () == word[i]) caps.push (i);
  }
  return caps;
};

// console.log (capitals ('CodEWaRs'));

// ________________________________________________________
