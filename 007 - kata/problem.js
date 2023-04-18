// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
