const {Router} = require('express');
const router = Router();

const productController = require('../controllers/productController');

router.get('/',productController.shop);

module.exports = router;