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
    },
    filterBySearch: (search) => {
        const fileProducts = fs.readFileSync(productsFilePath, 'utf8');
        let allProducts = JSON.parse(fileProducts);
        let ids = [];
        search=search.toLowerCase().split(" ")

        // FILTRADO
        let band=false;
        allProducts.forEach(product => {
            const nombre = product.name.toLowerCase().split(" ");
            for (let i = 0; i < nombre.length; i++) {
                for (let j = 0; j < search.length; j++) {
                    if(search[j]==nombre[i]){
                        band=true;
                    }               
                }
            }
            if(band==true){
                ids.push(product.id);
                band=false;
            }
        })

        console.log(ids);
        // BUSQUEDA POR NOMBRE DE PRODUCTOS
        return ids;
    }
}