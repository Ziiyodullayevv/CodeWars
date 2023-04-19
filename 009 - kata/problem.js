// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 9 - KATA:
// 1 dan N songacha bo'lgan har bir sonning yig'indisini topadigan dastur tuzing. Raqam har doim 0 dan katta musbat butun son bo'ladi.

// OUTPUT:

// 2 -> 3 (1 + 2);
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8);

// 1 - USUL:

const summation1 = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
onsole.log(summation1(8));

// 2 - USUL: (optimal yechim)

const summation2 = (n) => (n * (n + 1)) / 2;
console.log(summation2(8));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~