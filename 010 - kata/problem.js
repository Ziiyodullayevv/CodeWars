// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 10 - KATA:
// Satr parametrini qabul qiluvchi va satrdagi har bir so‘zni teskari aylantiruvchi funksiyani bajaring. Satrdagi barcha bo'shliqlar saqlanishi kerak.

// OUTPUT:
// "This is an example!" --> "sihT si na !elpmaxe"
// "double  spaces"      --> "elbuod  secaps"

// YECHIM:

// 1 - USUL:
function reverseWords (str) {
  return str.split ('').reverse ().join ('').split (' ').reverse ().join (' ');
}
//console.log(reverseWords('Hello world'));

// 2 - USUL:
function reverseWords (str) {
  return str
    .split (' ')
    .map (value => value.split ('').reverse ().join (''))
    .join (' ');
}
//console.log(reverseWords('Hello world'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
