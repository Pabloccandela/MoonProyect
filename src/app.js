const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
 
//port
// const port = process.env.PORT || 3000;
// app.listen(port,() => {
//     console.log('start listening on http://localhost:' + port);
// });

//middleware
app.use(express.static(path.join(__dirname,'../public')));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//cookie de carrito

//ejs MVC
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'));

//Routes
const routes = require('./routes/mainRoutes');
app.use('/',routes)

module.exports = app;