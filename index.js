const info = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
  text: `Hi, I'm ${info.name}, from the campus of ${info.campus}!`,
  e: 'Oo',
  T: 'V'
}));