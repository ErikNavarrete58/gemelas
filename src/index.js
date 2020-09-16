var express = require('express');
var app = express();
const path = require('path');
var fb = require('./routers/index');
const morgan = require('morgan');
const puerto = 4000;
const pool = require('./database');


app.use(morgan('tiny'));
app.use(fb);

app.use(express.static(path.join(__dirname,'../../public')));
app.set('views' , path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

// Correr el servidor con el puerto 8989.
app.listen(puerto, function () {
  console.log(`corriendo puerto ${puerto}`);
});