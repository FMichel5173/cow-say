const information = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Bonjour, mon nom est ${information.name}, je suis au campus de ${information.campus}`,
    e: "oO",
    T: "U"
}));