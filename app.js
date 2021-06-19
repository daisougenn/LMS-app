const express = require('express');
const fs = require('fs');
const path = require('path')
const dir = '';
const app = express();


const port = ('3000');

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('top.ejs');
});


app.listen(3000);
console.log(`サーバーは${port}で実行中です。`);
