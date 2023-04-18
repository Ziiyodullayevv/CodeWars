//`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

console.log(reverseSeq(5));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~