const path = require('path')
const express = require("express");
const app = express()


app.use(express.static(path.join(__dirname, "../public")))

app.get('', (req, res)=>{
  res.send(path.join());
});



app.listen(3000, ()=>console.log("started"))
