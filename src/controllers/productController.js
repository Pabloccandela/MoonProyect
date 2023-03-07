const productsData = require('../data/products/products.js');

module.exports={
    shop: (req,res) => {
        const products = productsData.getProducts();
        console.log(products)
        res.render('shop',{
            title: "MoonShop", 
            products
        })
    }
}