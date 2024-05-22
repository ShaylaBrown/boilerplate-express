let express = require('express');
let app = express('Hello Express');


app.get("/", (req, res) => {
    res.send("Hello Express");
  });
  
console.log("Hello World");

































 module.exports = app;
