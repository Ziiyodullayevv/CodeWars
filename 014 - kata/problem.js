// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Musbat butun sonning bo'luvchilar sonini hisoblang .

// Output:
// 4 --> 3 (1, 2, 4);
// 5 --> 2 (1, 5);
// 12 --> 6 (1, 2, 3, 4, 6, 12);
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30);

function getDivisorsCnt (n) {
  let d = 0;
  for (let i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  return d;
}

//console.log(getDivisorsCnt(10));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
