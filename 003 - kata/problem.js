// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 - KATA:

// Ushbu oddiy topshiriqda sizga raqam beriladi va uni manfiy kerak. Lekin, ehtimol, bu raqam allaqachon manfiydir?

// YECHIM:

function makeNegative(num) {
    if (num === 0) return num;
    else if (num === -Math.abs(num)) return -Math.abs(num);
    else return -Math.abs(num);
}

console.log(makeNegative(8));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
