// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Array ichida sonlar berilgan shu sonlarni yegindisini toping ?

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1) usul: (optimal yechim);

const getTotal1 = arr => {
  return eval (arr.join ('+'));
};
// console.log(getTotal1(numArray));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2) usul:

const getTotal2 = arr => {
  let res = 0;

  for (value of arr) {
    res += value;
  }
  return res;
};
// console.log(getTotal2(numArray));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3) usul:

const getTotal3 = arr => {
  return arr.reduce ((total, value) => total + value, 0);
};
// console.log(getTotal3(numArray));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4) usul:

const getTotal4 = arr => {
  let res = 0;
  arr.map (value => (res += value));
  return res;
};
// console.log(getTotal4(numArray));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 5) usul:

const getTotal5 = arr => {
  let res = 0;
  arr.forEach (value => (res += value));
  return res;
};
// console.log(getTotal5(numArray));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
