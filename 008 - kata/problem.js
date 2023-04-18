// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 8 - KATA:
//Ushbu kichik topshiriqda sizga bo'sh joy ajratilgan raqamlar qatori berilgan va eng yuqori va eng past raqamni qaytarishingiz kerak.

// OUTPUT:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// YECHIM:

function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//highAndLow("1 9 3 4 -5");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
