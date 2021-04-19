const path = require('path')
const ap = require('./aa.js');

const bodyParser = require('body-parser');
const express = require("express");
const app = express()


app.use(express.static(path.join(__dirname, "../public")))



app.use(express.json());
app.use(express.urlencoded());
app.post("" , function(request, response){

  const post = request.body.post;
  ap.post(post);
})





app.listen(8000, ()=>console.log("started"))
