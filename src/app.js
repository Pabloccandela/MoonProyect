// express request and initialize as "app"
const express = require('express');
const app = express();

// others request
const path = require('path');
// const cookieParser = require('cookie-parser');
 
//port initialization
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log('start listening on http://localhost:' + port);
});

//middleware
app.use(express.static(path.join(__dirname,'../public')));
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ejs MVC
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'));

//Routes
const routes = require('./routes/mainRoutes');
app.use('/',routes)

