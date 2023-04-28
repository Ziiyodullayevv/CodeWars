// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Berilgan raqamni matn tarzida yozib beradigan funksiya yozing

function resolt (n) {
  let str = String (n);
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
  return res.trim ();
}
// console.log(resolt(123456));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
