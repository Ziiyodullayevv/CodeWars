// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 4 - KATA:
//Raqamlar to'plami berilgan bo'lsa, har birining teskari qo'shimchasini qaytaring. Har bir ijobiy narsa salbiyga aylanadi, salbiy esa ijobiy bo'ladi.

// OUTPUT:

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5];
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5];
// invert([]) == [];

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

// 2 - USUL: (optimal yechim);

function invert(array) {
    return array.map((value) => -value);
}

  //console.log(invert([1,-2,3]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
