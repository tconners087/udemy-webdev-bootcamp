const catMe = require('cat-me');
const joke = require('knock-knock-jokes');
const faker = require('faker');

console.log("============================\nWelcome To My Shop!\n============================")
for(var i = 0; i < 10; i++) {
  console.log(faker.fake("{{hacker.adjective}} {{hacker.ingverb}} {{hacker.noun}} -- ${{finance.amount}}"));
}

// console.log(catMe());
// console.log(joke());