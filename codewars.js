//===================================== CODEWARS KATA =====================================//
//========================================= KYU 8 =========================================//


// 1 - KATA: 
// (N) SON BERILGAN FUNKSIYA ORQALI (N)SONDAN  1 GACHA BOLGAN SONLARNI MASSIVDA QAYTARING?
// OUTPUT: N = 5;  [5, 4, 3, 2, 1];

// YECHIM:
const reverseSeq = n => {
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
    if (name[0].toLowerCase() === 'r')  return name + ' plays banjo';
     else return name + ' does not play banjo';
    
}
// console.log(areYouPlayingBanjo('Anna'));

// 2 - USUL (optimal yechim)

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
// console.log(areYouPlayingBanjo('Anna'));


// 3 - KATA:
// Ushbu oddiy topshiriqda sizga raqam beriladi va uni salbiy qilish kerak. Lekin, ehtimol, bu raqam allaqachon salbiydir?

// YECHIM: 

function makeNegative(num) {
    if (num === 0) return num;
    else if (num === -Math.abs(num)) return -Math.abs(num);
    else return -Math.abs(num);   
}

//console.log(makeNegative(8));

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
       arrInvert.push(-array[i])
    }
    return arrInvert
 }

//console.log(invert([1,-2,3]));

// 2 - USUL: (optimal yechim)

function invert(array) {
   return array.map(value => -value);
}

//console.log(invert([1,-2,3]));


// 5 - KATA:
// Futbol jamoamiz chempionatni yakunladi.
//Jamoamizning o'yin natijalari qatorlar to'plamida qayd etilgan. Har bir o'yin formatidagi satr bilan ifodalanadi "x:y", bu erda xjamoamizning ochkolari va yraqiblarimizning ochkolari.

// 1 -USUL:

function points(games) {
    let total = 0;

    games.map(value => {
        if(value[0] > value[2]) total += 3;
        else if(value[0] === value[2]) total += 1;
        else total += 0;
    })

   return total;
}
// console.log(points(['4:2','5:3']));

// 2 - USUL:(optimal yechim)

 function points(games) {
    return games.reduce((output,current) => {
    let x = current[0];
    let y = current[2];
    let value= x > y ? 3 : x === y ? 1 : 0;
    return output + value;
    }, 0);
}
// console.log(points(['4:2','5:3']));

// 6 - KATA:
// Timmi va Sara o'zlarini sevib qolishgan deb o'ylashadi, lekin ular yashaydigan joyda faqat bir gul tergandan keyingina bilishadi. Agar gullardan birining gulbarglari juft, ikkinchisining gulbarglari toq bo‘lsa, demak, ular sevib qolgan.

// Har bir gulning gulbarglari sonini oladigan funksiyani yozing va agar ular oshiq bo'lsa, rost, bo'lmasa, noto'g'ri bo'ladi.

// OUTPUT: 
// (lovefunc(2,2), false);
// (lovefunc(0,1), true);
// (lovefunc(0,0), false);

// YECHIM:

// 1 - USUL:
function lovefunc(flower1, flower2){
    if ((flower1 % 2 === 0) == (flower2 % 2 === 0))  return false;
    else  return true;
}
// lovefunc(1,4);

// 2 - USUL:
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}
// lovefunc(1,4);

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

// 8 - KATA:
//Ushbu kichik topshiriqda sizga bo'sh joy ajratilgan raqamlar qatori berilgan va eng yuqori va eng past raqamni qaytarishingiz kerak.

// OUTPUT:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// YECHIM:

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//highAndLow("1 9 3 4 -5");

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

const summation = n => n * (n + 1) / 2;
// console.log(summation(8));

// 10 - KATA:

// Funksiya yarating argument sifatida son kiritilganda u juft bolsa "Even" toq bolse "Odd"

// OUTPUT:

// evenOrOdd(8) -> 'Even';
// evenOrOdd(7) -> 'Odd'

function evenOrOdd(number) {
    return number % 2 ? "Odd" : "Even"
}

console.log(evenOrOdd(8));


