// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Tub sonalarni aniqlang.

// Yechim:

const getTubSon = n => {
  for (let i = 2; i <= n; i++) {
    if (i === 2 || i === 3 || i === 5) console.log (i);
    else if (!(i % 5 == 0 || i % 3 === 0 || i % 2 === 0)) console.log (i);
  }
};

console.log (getTubSon (100));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
