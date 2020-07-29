const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

const app = express();

//DB
mongoose.connect('mongodb://localhost/estudiantes')
    .then(db => console.log('conectada'))
    .catch(err => console.log(err));
    
//importing routes
const indexRoutes = require('./routes/index');
const { urlencoded } = require('express');

//settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middelewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/',indexRoutes);

//start server
app.listen(app.get('port'), ()=> {
    console.log(`Working on port ${app.get('port')}`)
});