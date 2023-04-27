// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// (n) Butun son va satrni parametr sifatida qabul qiladigan va (s) aynan takrorlangan qatorini qaytaradigan funksiya yozing

// OUTPUT:
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// YECHIM:

// 1 - USUL:
function repeatStr (n, s) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push (s);
  }
  return arr.join ('');
}
//console.log(repeatStr(5, 'hello'));

// 2 - USUL:
function repeatStr (n, s) {
  return s.repeat (n);
}

//console.log(repeatStr(5, 'hello'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
