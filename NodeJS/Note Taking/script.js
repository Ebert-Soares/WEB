const notes = require('./notes.js');
const fs = require('fs');
const readline = require('readline');
const validator = require('validator');
const arg = process.argv[2];
const arg1 = process.argv[3];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




if(arg==='add'){
  var split = arg1.split(":");
  if (split[0] === "title"){
    console.log(split[1]);
    rl.question('Body ', (answer) => {
      notes.addNote(split[1], answer);
      rl.close();

    });
};


}
else if(arg==='remove'){

}
