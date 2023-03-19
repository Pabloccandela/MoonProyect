// imports 
const productsData = require('../data/products/products.js');
const db = require('../database/models/index');

module.exports={
    catalogue: (req,res) => {
        db.Products.findAll()
            .this(data => {
                products = data.map(data=>product);
                res.send(products)
            })
        // if(req.query.filter){
        //     console.log("hay un filtro "+req.query.filter)
        //     products = products.filter(products=>products.brand==req.query.filter)
        // }
        
        // if(req.query.search){
        //     ids = productsData.filterBySearch(req.query.search)
        //     products = productsData.filterById(ids);
        // }

        // res.render('catalogue',{
        //     title: "MoonShop", 
        //     products
        // })
    },
    addForm: (req,res)=>{
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
    add: (req,res)=>{
        if(!req.body) {
            return res.status(400).json({error: 'No hay datos'});
        }

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
        console.log(product)
        try{
            db.Products.create(product);
            res.redirect("/shop");
        }catch(err){
            res.send("ERROR: " + err);
        }
        
    },
    database: (req,res) => {
        const id = req.query.id
        db.Products.findAll()
            .then((products) => {
                console.log(products)
            })
        res.send("MIRAR CONSOLE LOG")
    }
}