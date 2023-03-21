const {Router} = require('express');
const router = Router();

const path = require('path');


// Use the multer to save images in public folder and use it in request for the controller 
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

// routes
// import controllers for the routes
const productController = require('../controllers/productController');
//base route "Catalogue"
router.get('/',productController.catalogue);
//Route to create a new product
router.get("/add", productController.addForm);
router.post("/add",upload.single("image"), productController.add);
//Route to update a product
router.get("/update/:id", productController.updateForm);
router.post("/update/:id",productController.update);
//Route to delete a product
router.get("/delete/:id", productController.deleteForm);
router.post("/delete/:id",productController.delete);

// export routes
module.exports = router;