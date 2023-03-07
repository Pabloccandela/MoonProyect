const path = require('path');
const fs = require('fs');
const { carrito } = require('../../controllers/productController');

const productsFilePath = path.join(__dirname, 'products.json');

module.exports = {
    getProducts: () => {
        const fileProducts = fs.readFileSync(productsFilePath, 'utf8');
        const allProducts = JSON.parse(fileProducts);
        return allProducts
    },
    saveProduct(product) {
        const products = this.getProducts();
        products.push(product);
        const productsFileContent = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
    },
    filterById: (carrito) => {
        const fileProducts = fs.readFileSync(productsFilePath, 'utf8');
        const allProducts = JSON.parse(fileProducts);
        let products=[]
        const car = carrito;
        for (let i = 0; i < car.length; i++) {
            allProducts.forEach(product => {
                if(product.id==carrito[i]){
                    products.push(product);
                }
            });
        }
        console.log(products)
        return products;
    }
}