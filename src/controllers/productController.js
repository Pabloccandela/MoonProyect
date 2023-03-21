// imports 
const db = require('../database/models/index');
const {Op} = require('sequelize');

module.exports={
    catalogue: async (req,res) => {
        try {
            let products = [];
            if(req.query.filter){
                const filter = req.query.filter;
                products = await db.Products.findAll({
                    where: {
                        brand:{
                            [Op.like]: filter
                        }
                    }
                })
            }
            else if(req.query.search){
                const search = req.query.search;
                products = await db.Products.findAll({
                    where: {
                        name:{
                            [Op.like]: "%"+search+"%"
                        }
                    }
                })
            }else{
                products = await db.Products.findAll();
            }
            return res.render('catalogue',{
                title: "MoonShop", 
                products
            })
        }catch(err){
            res.send(err);
        }
    },
    addForm: (req,res)=>{

        try{
            return res.render("addForm",{
                title:"Añadir producto"
            })
        }catch(err){
            return res.status(404).send({
                status: "Error",
                message: err
            });
        }
    },
    add: (req,res)=>{
        
        try{
           
            if(!req.body) {
                return res.status(400).send({error:'Error',message:"Empty Body"});
            }else{
                const image = req.file ? "/img/products/sneaker/"+req.file.filename:"/img/products/default-image.png";
    
                const product = {
                    name:req.body.name,
                    price:Number(req.body.price),
                    minSize:req.body.minSize,
                    maxSize:req.body.maxSize,
                    brand:req.body.brand,
                    discount:Number(req.body.descuento),
                    image
                }
                db.Products.create(product);
                return res.redirect("/catalogue/add");
            }
        }catch(err){
            return res.send(err);
        }
        
    },
    updateForm:async (req,res) => {
        try{
            const product = await db.Products.findByPk(req.params.id);
            if(!product){
                return res.status(404).send({
                    status: "Error",
                    message: "Product not found"
                });
            }else{
                return res.render("updateForm",{
                    title: "Edit Product",
                    product
                });
            }
        }catch(err){
            return res.send(err);
        }
    },
    update:async(req,res) => {
        try{
            if(!req.body) {
                return res.status(400).send({error:'Error',message:"Empty Body"});
            }
            const productSearch = await db.Products.findByPk(req.params.id)
            if(!productSearch){
                return res.status(404).send({
                    status: "Error",
                    message: "Product 'id' not found"
                });
            }else{
                const product ={
                    name:req.body.name,
                    price:Number(req.body.price),
                    minSize:Number(req.body.minSize),
                    maxSize:Number(req.body.maxSize),
                    brand:req.body.brand,
                    discount:Number(req.body.discount)
                }
                db.Products.update(product,{where:{id:req.params.id}});
                return res.redirect('/catalogue');
            }
        }catch(err){
            req.send(err);
        }
    },
    deleteForm:async(req,res) => {
        try{
            const product = await db.Products.findByPk(req.params.id)
            if(!product){
                return res.status(404).send({
                    status: "Error",
                    message: "Product not found"
                });
            }
            else{
                return res.render("deleteForm",
                {
                    title: "Delete Product",
                    product
                })
            }
        }catch(err){
            req.send(err);
        }
    },
    delete:async(req,res) => {
        try{
            const product = await db.Products.findByPk(req.params.id);
            if(!product){
                return res.status(404).send({
                    status: "Error",
                    message: "Product not found"
                });
            }
            else{
                db.Products.destroy({
                    where:{
                        id:req.params.id
                    }
                });
                return res.redirect("/catalogue");
            }
        }catch(err){
            return res.send(err);
        }
    }
}

//filter out for json
// filterBySearch: (search) => {
//     const fileProducts = fs.readFileSync(productsFilePath, 'utf8');
//     let allProducts = JSON.parse(fileProducts);
//     let ids = [];
//     search=search.toLowerCase().split(" ")

//     // FILTRADO
//     let band=false;
//     allProducts.forEach(product => {
//         const nombre = product.name.toLowerCase().split(" ");
//         for (let i = 0; i < nombre.length; i++) {
//             for (let j = 0; j < search.length; j++) {
//                 if(search[j]==nombre[i]){
//                     band=true;
//                 }               
//             }
//         }
//         if(band==true){
//             ids.push(product.id);
//             band=false;
//         }
//     })

//     console.log(ids);
//     // BUSQUEDA POR NOMBRE DE PRODUCTOS
//     return ids;
// }