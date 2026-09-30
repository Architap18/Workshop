const { readProducts } = require('../database/productDatabase');
async function getProducts() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    return await readProducts();
}

async function getProdById(id) {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    const products = await readProducts();

    const product = products.find(
        product => product.id === Number(id)
    );

    return product;
}

module.exports = {
    getProducts,
    getProdById
};