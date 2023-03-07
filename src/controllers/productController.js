const productsData = require('../data/products/products.js');
let carrito = []
module.exports={
    shop: (req,res) => {
        let products = productsData.getProducts();
        if(req.query.filter){
            products = products.filter(products=>products.marca==req.query.filter)
        }
        if(req.query.carrito){
            if(req.cookies.carritoArrays){
                carrito.push(req.query.carrito);
                req.cookies.carritoArrays=carrito;
            }
            else{
                res.cookie('carritoArrays',[])
                carrito.push(req.query.carrito);
                req.cookies.carritoArrays=carrito;
            }
            console.log(req.cookies.carritoArrays)
        }

        res.render('shop',{
            title: "MoonShop", 
            products
        })
    },
    addProductsForm: (req,res)=>{
        if(req.query.pass && req.query.pass == "kv7nulvjwc"){
            res.render("addProducts",{
            title:"Añadir producto"
            })
        } else{
            res.render("error404",{
                title: "Paginga no encontrada"
            })
        }
    },
    addProducts: (req,res)=>{
        if(!req.body) {
            return res.status(400).json({error: 'No hay datos'});
        }

        const image = req.file ? "/img/products/sneaker/"+req.file.filename:"/img/products/default-image.png";

        const product = {
            id:Date.now(),
            name:req.body.name,
            price:Number(req.body.price),
            talla:req.body.talla,
            marca:req.body.marca,
            discount:Number(req.body.descuento),
            image
        }
        console.log(product)
        productsData.saveProduct(product);
        res.redirect("/shop");
    }
}