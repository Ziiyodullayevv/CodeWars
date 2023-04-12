//===================================== CODEWARS KATA =====================================//

// 1 - KATA:
// (N) SON BERILGAN FUNKSIYA ORQALI (N)SONDAN  1 GACHA BOLGAN SONLARNI MASSIVDA QAYTARING?
// OUTPUT: N = 5;  [5, 4, 3, 2, 1];

// YECHIM:
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

//  console.log(reverseSeq(5));

// -----------------------------------------------------------------------------------------

// 2 - KATA:
// "Siz banjo o'ynayapsizmi?" Degan savolga javob beradigan funksiya yarating.
// Agar ismingiz "R" harfi yoki kichik "r" harfi bilan boshlansa, siz banjo o'ynayapsiz!

// OUTPUT:
// name + " plays banjo"
// name + " does not play banjo"

// YECHIM:

// 1 - USUL
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") return name + " plays banjo";
  else return name + " does not play banjo";
}
// console.log(areYouPlayingBanjo('Anna'));

//---------------------------------------------------------------------------------------------

// 2 - USUL (optimal yechim)

function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}
// console.log(areYouPlayingBanjo('Anna'));

//---------------------------------------------------------------------------------------------

// 3 - KATA:
// Ushbu oddiy topshiriqda sizga raqam beriladi va uni salbiy qilish kerak. Lekin, ehtimol, bu raqam allaqachon salbiydir?

// YECHIM:

function makeNegative(num) {
  if (num === 0) return num;
  else if (num === -Math.abs(num)) return -Math.abs(num);
  else return -Math.abs(num);
}

//console.log(makeNegative(8));

//----------------------------------------------------------------------------------------------

// 4 - KATA:
//Raqamlar to'plami berilgan bo'lsa, har birining teskari qo'shimchasini qaytaring. Har bir ijobiy narsa salbiyga aylanadi, salbiy esa ijobiy bo'ladi.

// OUTPUT:

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5];
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5];
// nvert([]) == [];

// YECHIM:

// 1 - USUL:
function invert(array) {
  let arrInvert = [];
  for (let i = 0; i < array.length; i++) {
    arrInvert.push(-array[i]);
  }
  return arrInvert;
}

//console.log(invert([1,-2,3]));

// 2 - USUL: (optimal yechim)

function invert(array) {
  return array.map((value) => -value);
}

//console.log(invert([1,-2,3]));

//-------------------------------------------------------------------------------------------

// 5 - KATA:
// Futbol jamoamiz chempionatni yakunladi.
//Jamoamizning o'yin natijalari qatorlar to'plamida qayd etilgan. Har bir o'yin formatidagi satr bilan ifodalanadi "x:y", bu erda xjamoamizning ochkolari va yraqiblarimizning ochkolari.

// 1 -USUL:

function points(games) {
  let total = 0;

  games.map((value) => {
    if (value[0] > value[2]) total += 3;
    else if (value[0] === value[2]) total += 1;
    else total += 0;
  });

  return total;
}
// console.log(points(['4:2','5:3']));

// 2 - USUL:(optimal yechim)

function points(games) {
  return games.reduce((output, current) => {
    let x = current[0];
    let y = current[2];
    let value = x > y ? 3 : x === y ? 1 : 0;
    return output + value;
  }, 0);
}
// console.log(points(['4:2','5:3']));

//----------------------------------------------------------------------------------------------

// 6 - KATA:
// Timmi va Sara o'zlarini sevib qolishgan deb o'ylashadi, lekin ular yashaydigan joyda faqat bir gul tergandan keyingina bilishadi. Agar gullardan birining gulbarglari juft, ikkinchisining gulbarglari toq bo‘lsa, demak, ular sevib qolgan.

// Har bir gulning gulbarglari sonini oladigan funksiyani yozing va agar ular oshiq bo'lsa, rost, bo'lmasa, noto'g'ri bo'ladi.

// OUTPUT:
// (lovefunc(2,2), false);
// (lovefunc(0,1), true);
// (lovefunc(0,0), false);

// YECHIM:

// 1 - USUL:
function lovefunc(flower1, flower2) {
  if ((flower1 % 2 === 0) == (flower2 % 2 === 0)) return false;
  else return true;
}
// lovefunc(1,4);

// 2 - USUL:
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
// lovefunc(1,4);

//----------------------------------------------------------------------------------------------

// 7 - KATA:
//Eng katta va eng kichik sondan tashqari qiymatni yigindisini toping?

// OUTPUT:
//    sumArray(null)                     , 0 ;
//    sumArray([ ])                      , 0 ;
//    sumArray([ 3 ])                    , 0 ;
//    sumArray([ 3, 5 ])                 , 0 ;
//    sumArray([ 6, 2, 1, 8, 10 ])       , 16 ;
//    sumArray([ 0, 1, 6, 10, 10 ])      , 17 ;
//    sumArray([ -6, -20, -1, -10, -12 ]), -28 ;
//    sumArray([ -6, 20, -1, 10, -12 ])  , 3 ;

// YECHIM:
function sumArray(array) {
  if (array === null) {
    return 0;
  } else if (array) {
    let sortArr = array.sort((a, b) => a - b);
    sortArr.pop();
    sortArr.shift();
    let reduceArr = sortArr.reduce((total, value) => total + value, 0);
    return reduceArr;
  }
}

//console.log(sumArray([ -6, -20, -1, -10, -12 ]));

//---------------------------------------------------------------------------------------------

// 8 - KATA:
//Ushbu kichik topshiriqda sizga bo'sh joy ajratilgan raqamlar qatori berilgan va eng yuqori va eng past raqamni qaytarishingiz kerak.

// OUTPUT:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// YECHIM:

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//highAndLow("1 9 3 4 -5");

//---------------------------------------------------------------------------------------------

// 9 - KATA:
// 1 dan songacha bo'lgan har bir sonning yig'indisini topadigan dastur tuzing. Raqam har doim 0 dan katta musbat butun son bo'ladi.

// OUTPUT:

// 2 -> 3 (1 + 2);
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8);

// 1 - USUL:

// const summation = function (num) {
//     let total = 0;
//     for(let i = 1; i <= num; i++) {
//       total += i;
//     }
//     return total;
// }
//onsole.log(summation(8));

// 2 - USUL: (optimal yechim)

const summation = (n) => (n * (n + 1)) / 2;
// console.log(summation(8));

//---------------------------------------------------------------------------------------------

// 10 - KATA:

// Funksiya yarating argument sifatida son kiritilganda u juft bolsa "Even" toq bolse "Odd"

// OUTPUT:

// evenOrOdd(8) -> 'Even';
// evenOrOdd(7) -> 'Odd'

function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

//console.log(evenOrOdd(8));

//--------------------------------------------------------------------------------------------

// 11 - KATA:
// Trolllar sizning sharhlar bo'limingizga hujum qilmoqda!
// Ushbu vaziyatni hal qilishning keng tarqalgan usuli - trollarning izohlaridan barcha unli tovushlarni olib tashlash, tahdidni zararsizlantirish.

// Sizning vazifangiz satrni oladigan funktsiyani yozish va barcha unlilar olib tashlangan yangi qatorni qaytarishdir.

// OUTPUT:
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// YECHIM:

// 1 - USUL:
const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}
//console.log(disemvowel('Hello world LOL'));

// 2 - USUL:
function disemvowel(str) {
  return str.replace(/[auieo]/gi, "");
}
//console.log(disemvowel('Hello world LOL'));

//---------------------------------------------------------------------------------------------

// 12 - KATA:
// Sizning vazifangiz har qanday manfiy bo'lmagan butun sonni argument sifatida qabul qiladigan va uni raqamlari bilan kamayish tartibida qaytara oladigan funktsiyani yaratishdir. Asosan, mumkin bo'lgan eng yuqori raqamni yaratish uchun raqamlarni o'zgartiring.

// OUTPUT:
// Kirish: 42145 Chiqish:54421

// Kirish: 145263 Chiqish:654321

// Kirish: 123456789 Chiqish:987654321

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

//console.log(descendingOrder(15));

//---------------------------------------------------------------------------------------------

// 13 - KATA:
// Raqamlar qatorini hisobga olgan holda, 5 dan past bo'lgan har qanday raqamni "0" bilan, 5 va undan yuqori raqamlarni esa "1" bilan almashtirishingiz kerak. Olingan qatorni qaytaring.

// OUTPUT:
// '1245' -> '0001'

// YECHIM:

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}
//console.log(fakeBin('1234567890'));

//----------------------------------------------------------------------------------------------

// 14 - KATA:

// Berilgan qatordagi unlilar sonini (hisobini) qaytaring.

// OUTPUT:
//'abcafde' -> 3

// YECHIM:

function getCount(str) {
  let vowels = ["a", "o", "e", "i", "u"];
  return str.split("").filter((a) => vowels.includes(a)).length;
}

//console.log(getCount('abaco'));

//----------------------------------------------------------------------------------------------

// 15 - KATA:
// Tasodifiy manfiy bo'lmagan raqam berilgan bo'lsa, siz ushbu raqamning raqamlarini massivdagi teskari tartibda qaytarishingiz kerak.

// OUTPUT:
// 35231 -> [1,3,2,5,3];
// 0 -> [0];

// YECHIM:
function digitize(n) {
  return String(n)
    .split("")
    .map((a) => parseInt(a).reverse());
}
//console.log(digitize(2345));

//---------------------------------------------------------------------------------------------

// 16 - KATA:
// Funksiyaga son kiritilgand quyidagi natija chiqsin: misol 3 kiritsak
// "1 sheep...2 sheep...3 sheep...";

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
//console.log(countSheep(2));

//---------------------------------------------------------------------------------------------

// 17 - KATA:
// Oy 1 dan 12 gacha butun son sifatida berilgan bo'lsa, u butun son sifatida yilning qaysi choragiga tegishli ekanligini qaytaring.

// OUTPUT:
// quarterOf(3),  --> 1
// quarterOf(8), --> 3
// quarterOf(11), --> 4

// YECHIM:

// 1 - USUL:
const quarterOf = (month) => {
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

//---------------------------------------------------------------------------------------------

// 18 - KATA:
// "String"      -> "SSttrriinngg"
// "Hello World" -> "HHeelllloo  WWoorrlldd"
// "1234!_ "     -> "11223344!!__  "

// YECHIM:

// 1 - USUL:
function doubleChar(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    word += str[i] + str[i];
  }
  return word;
}
//console.log(doubleChar('String'));

// 2 - USUL:
//const doubleChar = (str) => str.split("").map(c => c + c).join("");
// console.log(doubleChar('String'));

//---------------------------------------------------------------------------------------------

// 19 - KATA:
// Write function bmi that calculates body mass index (bmi = weight / height2).

//OUTPUT:
//if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
//if bmi > 30 return "Obese"

// YECHIM:
function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  if (bmi <= 18.5) return "Underweight";
  else if (bmi <= 25.0) return "Normal";
  else if (bmi <= 30.0) return "Overweight";
  else return "Obese";
}
//console.log(bmi(57, 1.76));

//---------------------------------------------------------------------------------------------

// 20 - KATA:
// 1 dan 9 gacha bolgan sonlarni raqam emas balki string korinishidagi yani: misol 1 --> 'One' tarzida chiqaruvchi function yozing?

// YECHIM:

function switchItUp(number) {
  let words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  return words[number];
}

//console.log(switchItUp(8));

//---------------------------------------------------------------------------------------------

// 21 - KATA:
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
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
// console.log((hero(4, 2)));

//---------------------------------------------------------------------------------------------

// 22 - KATA:
// (n) Butun son va satrni parametr sifatida qabul qiladigan va (s) aynan takrorlangan qatorini qaytaradigan funksiya yozing

// OUTPUT:
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// YECHIM:

// 1 - USUL:
function repeatStr(n, s) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(s);
  }
  return arr.join("");
}
//console.log(repeatStr(5, 'hello'));

// 2 - USUL:
function repeatStr(n, s) {
  return s.repeat(n);
}

//console.log(repeatStr(5, 'hello'));

//---------------------------------------------------------------------------------------------

// 23 - KATA:
// 2 ta argumentni qabul qiladigan va birinchisida 2-argument topilgan takrorlanishlar sonining butun sonini qaytaradigan funksiya yarating.

//Hech qanday hodisa topilmasa, 0 soni qaytarilishi kerak.

// OUTPUT:
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0;

//----------------------------------------------------------------------------------------------

// 24 - KATA:
// Belgilarni aniqlash dasturi bosma matnlarni raqamlashtirish uchun keng qo'llaniladi. Shunday qilib, matnlarni kompyuterda tahrirlash, qidirish va saqlash mumkin.

// Hujjatlar (ayniqsa yozuv mashinkasida yozilgan juda eski hujjatlar) raqamlashtirilganda belgilarni aniqlash dasturlari ko'pincha xato qiladi.

// Sizning vazifangiz raqamlashtirilgan matndagi xatolarni tuzatishdir. Siz faqat quyidagi xatolar bilan shug'ullanishingiz kerak:

// S sifatida noto'g'ri talqin qilinadi 5
// Osifatida noto'g'ri talqin qilinadi 0
// Isifatida noto'g'ri talqin qilinadi 1
// Sinov holatlarida faqat noto'g'ri raqamlar mavjud.

// OUTPUT:
// correct("L0ND0N"),"LONDON");
// correct("DUBL1N"),"DUBLIN");
// correct("51NGAP0RE"),"SINGAPORE");
// correct("BUDAPE5T"),"BUDAPEST");
// correct("PAR15"),"PARIS");

// Yechim:

function correct(string) {
  //   return string.replace(/0/gi, "O").replace(/5/gi, "S").replace(/1/gi, "I");
}
console.log(correct());

// YECHIM:
function strCount(str, letter) {
  return str.split(letter).length - 1;
}
//console.log(strCount('hellol', 'l'));

//----------------------------------------------------------------------------------------

// 25 - KATA:
// Matn berilgan shu matnni sozlarini teskari qilib yozib bering?
// OUTPUT:
// "Hello world" --> "world Hello"
function reverse(string) {
  return string.split(" ").reverse().join(" ");
}
// console.log(reverse("Hello world"));

//--------------------------------------------------------------------------------------------

// 26 - KATA:

// prototypega stiring katta harf bolsa kichikka kichik harf bolsa katta harfga ozgartirib beruvchi function yozib bering?

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

// ------------------------------------------------------------------------------------------

// 27 - KATA:

// Array ichida sonlar berilgan shu sonlarni yegindisini toping ?

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1) usul: (optimal yechim);

const getTotal1 = (arr) => {
  return eval(numArray.join("+"));
};
// console.log(getTotal1(numArray));

// 2) usul:

const getTotal2 = (arr) => {
  let res = 0;

  for (value of arr) {
    res += value;
  }
  return res;
};
// console.log(getTotal2(numArray));

// 3) usul:


const getTotal3 = (arr) => {
  return arr.reduce((total, value) => total + value, 0);
};
// console.log(getTotal3(numArray));

// 4) usul:

const getTotal4 = (arr) => {
  let res = 0;
  arr.map((value) => (res += value));
  return res;
};
// console.log(getTotal4(numArray));

// 5) usul:

const getTotal5 = (arr) => {
  let res = 0;
  arr.forEach((value) => (res += value));
  return res;
};
// console.log(getTotal5(numArray));

// --------------------------------------------------------------------

// 28 - KATA:

// ["webbrain", "academy"] - array ichidagi sozlarning har bir belgisining sanogini topish kerak. Natija object korinishida bolsin.

const arrStr = ["webbrain", "academy"];
const getChar = (arr) => {
  let res = {};
  let str = arr.join("");

  for (value of str) {
    res[value] ? res[value]++ : (res[value] = 1);
  }
  return res;
};
// console.log(getChar(arrStr));

// --------------------------------------------------------------------

// 29 - KATA:

// Arrayni bir-biriga taqqoslang? Togridan togri taqqoslab bolmas ekanligini yodda tuting chunki array Obectdir!!!

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEqual = (arr1, arr2) => {
  return arr1.join("") === arr2.join("");
};
// console.log(isEqual(num1, num2));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 30 - KATA:

function resolt(n) {
  let str = String(n);
  let res = '';

  for (value of str) {
    if (value === '0') res += ' nol';
    else if (value === '1') res += ' bir';
    else if (value === '2') res += ' ikki';
    else if (value === '3') res += ' uch';
    else if (value === '4') res += ' tort';
    else if (value === '5') res += ' besh';
    else if (value === '6') res += ' olti';
    else if (value === '7') res += ' yetti';
    else if (value === '8') res += ' sakkiz';
    else if (value === '9') res += ' toqqiz';
  }
  return res.trim();
}
// console.log(resolt(123456));