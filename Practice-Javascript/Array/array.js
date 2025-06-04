var family = ['father', 'mother', 'sister', 'brother', 'grandfather', 'grandmother'];
console.log(family[1]);
family[1] = 'wife';
console.log(family[1]);

var cricket = [['sachin', 'dhoni', 'kohli'], ['dhawan', 'rohit', 'rahul']];
console.log(cricket[1][1]);

family.forEach(function (members) {
  console.log(members);
});