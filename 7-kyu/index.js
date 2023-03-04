//===================================== CODEWARS KATA =====================================//

// 1 - KATA - 7kyu:
// Satr parametrini qabul qiluvchi va satrdagi har bir so‘zni teskari aylantiruvchi funksiyani bajaring. Satrdagi barcha bo'shliqlar saqlanishi kerak.

// OUTPUT:
// "This is an example!" --> "sihT si na !elpmaxe"
// "double  spaces"      --> "elbuod  secaps"

// YECHIM:

// 1 - USUL:
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
//console.log(reverseWords('Hello world'));

// 2 - USUL:
function reverseWords(str) {
  return str
    .split(" ")
    .map((value) => value.split("").reverse().join(""))
    .join(" ");
}
//console.log(reverseWords('Hello world'));

//---------------------------------------------------------------------------------------------

// 2 - KATA - 7 kyu:
// tosh qogoz qaychi uyinini yarating;

// YECHIM:
const rps = (p1, p2) => {
  let rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p1 === p2) return "Drow!";
  else if (p2 === rules[p1]) return "Player 1 won!";
  else return "Player 2 won!";
};
//console.log(rps('paper', 'rock'));

//----------------------------------------------------------------------------------------------

// 3 - KATA - 7kyu:
// Hamma hayvonlar bayram qilishmoqda! Har bir hayvon bitta idish olib keladi. Faqat bitta qoida bor: taom hayvon nomi bilan bir xil harflar bilan boshlanishi va tugashi kerak.

// OUTPUT:
// feast("great blue heron", "garlic naan"), true)
// feast("chickadee", "chocolate cake"), true)
// feast("brown bear", "bear claw"), false)

function feast(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}
//console.log("great blue heron", "garlic naan");

//----------------------------------------------------------------------------------------------

// 4 - KATA - 7kyu:
// Sizning jamoangiz ajoyib yangi matn muharriri yozmoqda va sizga satrlarni raqamlashni amalga oshirish vazifasi yuklangan.

// Satrlar ro'yxatini oladigan va har bir qatorni to'g'ri raqam bilan qaytaradigan funktsiyani yozing.

// Raqamlash 1 dan boshlanadi. Format n: string. Yo'g'on ichak va ularning orasidagi bo'shliqqa e'tibor bering.

// OUTPUT:

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// YECHIM:
var number = function (array) {
  return array.map(function (value, index) {
    return `${index + 1}: ${value}`;
  });
};

//---------------------------------------------------------------------------------------------

// 5 - KATA - 7kyu:
// Musbat butun sonning bo'luvchilar sonini hisoblang .

// Output:
// 4 --> 3 (1, 2, 4);
// 5 --> 2 (1, 5);
// 12 --> 6 (1, 2, 3, 4, 6, 12);
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30);

function getDivisorsCnt(n) {
  let d = 0;
  for (let i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  return d;
}
//console.log(getDivisorsCnt(10));
