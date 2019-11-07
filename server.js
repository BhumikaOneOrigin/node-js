require('./models/db.js');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const formController = require('./controllers/formController.js');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json())
app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000, () => { console.log("Expressserver started at post : 3000");
});

app.use('/form', formController);
