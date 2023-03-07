const {Router} = require('express');
const router = Router();
const path = require('path');

const productController = require('../controllers/productController');

const multer  = require('multer');
const storage= multer.diskStorage({
    destination:path.join(__dirname,"../../public/img/products/sneaker"),
    filename:(req,file,cb) =>{
        cb(null,"image-"+Date.now()+path.extname(file.originalname))
    },
});

const upload=multer({
    storage,
})

router.get('/',productController.shop);

// añadir producto
router.get("/add", productController.addProductsForm);
router.post("/add",upload.single("image"), productController.addProducts);


module.exports = router;