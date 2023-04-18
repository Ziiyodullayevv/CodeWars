// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 - KATA:

// "Siz banjo o'ynayapsizmi?" Degan savolga javob beradigan funksiya yarating.
// Agar ismingiz "R" harfi yoki kichik "r" harfi bilan boshlansa, siz banjo o'ynayapsiz!

// OUTPUT:
// name + " plays banjo"
// name + " does not play banjo"

// YECHIM:

// 1 - USUL
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r") return name + " plays banjo";
    else return name + " does not play banjo";
}
// console.log(areYouPlayingBanjo('Anna'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 - USUL (optimal yechim)

function areYouPlayingBanjo(name) {
    return (
        name +
        (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
        " banjo"
    );
}
  // console.log(areYouPlayingBanjo('Anna'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


