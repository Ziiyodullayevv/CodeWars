//===================================== CODEWARS KATA =====================================//

// 1 - KATA:
// Asosiy g'oya qatordagi barcha uchraydigan belgilarni sanashdir. Agar sizda kabi satr "abc" bo'lsa , unda natija bo'lishi kerak {'a': 2, 'b': 1}.
// Agar satr bo'sh bo'lsa-chi? Keyin natija bo'sh ob'ekt literal bo'lishi kerak {}.

// YECHIM:
function count(string) {
  var count = {};
  string.split("").map((s) => {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
// console.log(count("helllo"));

console.log(toAlternatingCase("to Upper"));

// 2 - KATA:
// Vaqt bilan ishlash kerak ?

const getMinut = (info) => {
  let date = new Date();

  // Barcha vaqat malumotlar bazasi
  let hours = date.getHours() % 12;
  let menuts = date.getMinutes();
  let seconds = date.getSeconds();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let week = date.getDay();
  let year = date.getFullYear();
  
  // pm va amni aniqlash; 
  let sign;
  if(date.getHours() >= 12) sign = 'PM';
  else sign = 'AM';

  // minut 10 dan kichik bo'lganda 0 ga birlashtirib qoyish;
  let min = menuts < 10 ? '0' + menuts : menuts;

  // oy nomlari;
  let monthName = [
      'December',
      'January', 
      'February', 
      'March',
      'April', 
      'May',
      'Juny',
      'July', 
      'August', 
      'September',
      'October',
      'November',
  ];

  // Hafta nomlari;
  let weekName = [
      'SunDay',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
  ];

  if(info === 'LT') return `${hours}:${menuts} ${sign}`;
  else if (info === "LTS") return `${hours}:${menuts}:${seconds} ${sign}`;
  else if (info === "L") return `${month < 10 ? '0' + month : month}/${day}/${year}`;
  else if (info === 'l') return `${month}/${day}/${year}`;
  else if (info  === 'LL') return `${monthName[month]} ${day}, ${year}`;
  else if (info === 'll') return `${monthName[month].slice(0,3)} ${day}, ${year}`;
  else if (info === 'LLL') return `${monthName[month]} ${day}, ${year} ${hours}:${min} ${sign}`;
  else if (info === 'lll') return `${monthName[month].slice(0, 3)} ${day}, ${year} ${hours}:${min} ${sign}`;
  else if (info === 'LLLL') return `${weekName[week]} ${monthName[month].slice(0, 3)} ${day}, ${year} ${hours}:${min} ${sign}`;
  else if (info === 'llll') return `${weekName[week].slice(0, 3)} ${monthName[month].slice(0, 3)} ${day}, ${year} ${hours}:${min} ${sign}`;
}
console.log(getMinut('llll'));