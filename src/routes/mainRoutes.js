const {Router} = require('express');
const router = Router();
const mainController = require('../controllers/mainControllers.js');

// home
router.get("/",mainController.home);

// contacto
router.get('/contact',mainController.contacto);

//shop
const productRoutes = require('./productRoutes');
router.use('/catalogue',productRoutes);  

//error 404
router.use((req,res,next) => {
    res.status(404).render('error404',{
        title:'Page not found 404',
    })
})

module.exports = router;

// const {body} = require('express-validator');
//login
// const validationsLogin =[
//     body('username','You must place your user').not().isEmpty(),
//     body('pass','You must place your key').not().isEmpty()
// ]
// router.get('/login',controller.login);
// router.post('/login',validationsLogin,controller.loginVerified);