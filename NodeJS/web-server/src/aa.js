const ap = require('./app.js');
const express = require("express");

const fs = require('fs');
const app = express()





function post(post){
  console.log(post);
  fs.appendFile("aa.txt", post + '     ',  (err) => {
  if (err) console.log('The "data to append" was appended to file!');});

}

module.exports = {
  post: post
}
