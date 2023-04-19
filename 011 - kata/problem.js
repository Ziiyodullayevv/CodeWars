// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// tosh qogoz qaychi uyinini yarating;

// YECHIM:
const rps = (p1, p2) => {
  let rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
  if (p1 === p2) return 'Drow!';
  else if (p2 === rules[p1]) return 'Player 1 won!';
  else return 'Player 2 won!';
};
//console.log(rps('paper', 'rock'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
