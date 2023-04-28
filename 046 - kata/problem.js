// _________________________________________________________________

// Satr berilgan bo'lsa, uni teskari aylantiring va alifbodan tashqari barcha belgilarni chiqarib yuboring.

// Output: 

// let str = "krishan", -->  "nahsirk".
// let str = "ultr53o?n", -->  "nortlu".

// Yechim:

const getString = str => {
    let res = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i].toLowerCase () === str[i].toUpperCase ());
      else res += str[i];
    }
  
    return res;
  };
  
  console.log (getString ('ultr53o?n'));

// _________________________________________________________________
