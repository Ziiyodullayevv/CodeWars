// ______________________________________________________________________________

// Unlilarni ochirib tashlaydigan function yozing.

// 1 - usul:

function shortcut (string) {
  let wovels = ['a', 'o', 'e', 'i', 'u'];
  return string.split ('').filter (value => !wovels.includes (value)).join ('');
}
// console.log (shortcut ('hello'));

// ______________________________________________________________________________

// 2 - usul: (optimal yechim):

function shortcut (string) {
  return string.replace (/[aeiou]/g, '');
}

console.log (shortcut ('hello'));

// ______________________________________________________________________________
