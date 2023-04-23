// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Berilgan necha martadan ishlatilganini aniqlang, natija object korinishida bolishi kerak.

// Output:

// "hello" -> {h:1, e:1, l:2, o:1};

// YECHIM:

function count (string) {
  var count = {};
  string.split ('').map (s => {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
// console.log(count("helllo"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
