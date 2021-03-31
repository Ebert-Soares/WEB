const laugh = require('./notes.js');
const validator = require('validator');
const arg = process.argv[2];
const arg1 = process.argv[3];


if(arg==='add'){
  var split = arg1.split(":");
  if (split[0] === "title"){
    console.log(split[1]);

  };


}
else if(arg==='remove'){

}
