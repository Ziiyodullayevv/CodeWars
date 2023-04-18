// 6 - KATA:
// Timmi va Sara o'zlarini sevib qolishgan deb o'ylashadi, lekin ular yashaydigan joyda faqat bir gul tergandan keyingina bilishadi. Agar gullardan birining gulbarglari juft, ikkinchisining gulbarglari toq bo‘lsa, demak, ular sevib qolgan.

// Har bir gulning gulbarglari sonini oladigan funksiyani yozing va agar ular oshiq bo'lsa, rost, bo'lmasa, noto'g'ri bo'ladi.

// OUTPUT:
// (lovefunc(2,2), false);
// (lovefunc(0,1), true);
// (lovefunc(0,0), false);

// YECHIM:

// 1 - USUL:
function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0) == (flower2 % 2 === 0)) return false;
    else return true;
}
// lovefunc(1,4);

// 2 - USUL:
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}
// lovefunc(1,4);