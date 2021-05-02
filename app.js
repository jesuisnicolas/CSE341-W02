const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const expressHbs = require('express-handlebars');
//express exports this function with all its functionality in it.
const app = express(); 

//This will tell express the engine we want to use to produce our dinamic views,
//and where it should look for the views to work with
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main', extname: 'hbs'}));
// app.set('view engine', 'pug'); //for using pug
app.set('view engine', 'ejs'); 
app.set('views', 'views'); // this is the default. I wrote it anyway.

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router); //This adminData makes reference to the exports in the routes files
app.use(shopRouters);

app.use((req, res, next) => {
        // res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
        res.status(404).render('404', {pageTitle: 'Page not Found', path: ""}) //for pug file
});

app.listen(5000);