const {validationResult} = require('express-validator');
const productsData = require('../data/products/products.js');
// const usersData = require('../data/users/users')

module.exports={
    home : (req,res) => {
        let products = productsData.getProducts();
        products = products.filter(product => product.discount!=null)
        res.render('home',{
            title: 'Moon Proyect',
            products	
        });
    },
    contacto: (req,res) => {
        res.render('contact',{
            title: 'Contacto MOON PROYECT',
        })
    }
}

// login:(req,res) => {
//     res.render('login',{
//         title: 'Login-MOON PROYECT',
//         errors:null
//     })
// },
// loginVerified :(req,res) => {

//     //express validation errors
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         console.log(errors.array());
//         return res.render('login', {
//             title: 'Login-FASHION LIKE',
//             errors: errors.array(), //{username{},pass{}} si existe err existira el obj
//         });
//     };
//     console.log("asdasdasdasdasd")
//     //verificar si existe el usuario y pass
//     const verif = usersData.verificateUser({
//         username: req.body.username,
//         pass:req.body.pass
//     })

//     //si los datos son correctos renderizar home
//     if(verif){
//         res.render('home', {
//             title: 'Home-FASHION LIKE'
//         });
//     }else{

//         //si no existe renderizar error
//         res.render('login', {
//             title: 'Login-FASHION LIKE',
//             errors: [{msg:'Error when logging in, check the username or password'}]
//         })
//     }
// },