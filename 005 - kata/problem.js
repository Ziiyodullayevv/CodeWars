// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 5 - KATA:
// Futbol jamoamiz chempionatni yakunladi.
//Jamoamizning o'yin natijalari qatorlar to'plamida qayd etilgan. Har bir o'yin formatidagi satr bilan ifodalanadi "x:y", bu erda "x" jamoamizning ochkolari va "y" raqiblarimizning ochkolari.
// Agar yutgan bolsa 3 achko, durrang bolsa 1 achko, yutqazgan bolsa 0 achko

// 1 -USUL:

function points(games) {
    let total = 0;

    games.map((value) => {
        if (value[0] > value[2]) total += 3;
        else if (value[0] === value[2]) total += 1;
        else total += 0;
    });

    return total;
}
// console.log(points(['4:2','5:3']));

// 2 - USUL:(optimal yechim);

function points(games) {
    return games.reduce((output, current) => {
        let x = current[0];
        let y = current[2];
        let value = x > y ? 3 : x === y ? 1 : 0;
        return output + value;
    }, 0);
}
  // console.log(points(['4:2','5:3']));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


