const {Router} = require('express');
const router = Router();
const controller = require('../controllers/mainControllers.js');
const {body} = require('express-validator');

// home
router.get("/",controller.home);

//login

const validationsLogin =[
    body('username','You must place your user').not().isEmpty(),
    body('pass','You must place your key').not().isEmpty()
]

router.get('/login',controller.login);
router.post('/login',validationsLogin,controller.loginVerified);

//register
// router.get('/register',controller.register);
// router.post('/register',controller.register);

// contacto
router.get('/contacto',controller.contacto);

//shop
const productRoutes = require('./productRoutes');
router.use('/shop',productRoutes);  


//error 404
router.use((req,res,next) => {
    res.status(404).render('error404',{
        title:'Page not found',
    })
})

module.exports = router;