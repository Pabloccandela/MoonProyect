const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, 'products.json');

module.exports = {
    getProducts:() => {
        const fileProducts = fs.readFileSync(productsFilePath, 'utf8');
        const allProducts = JSON.parse(fileProducts);
        return allProducts
    }
}