//===================================== CODEWARS KATA =====================================//

// 1 - KATA - 6 kyu:
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
