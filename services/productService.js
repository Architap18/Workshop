const { readProducts,writeProducts } = require('../database/productDatabase');
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
async function add(data) {
    const products = await readProducts();

    const product = {
        id: Date.now(),
        ...data
    };

    products.push(product);

    await writeProducts(products);

    return product;
}
async function edit(id, data) {
    const products = await readProducts();

    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...data
    };

    await writeProducts(products);

    return products[index];
}
async function patch(id, data) {
    const products = await readProducts();

    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...data
    };

    await writeProducts(products);

    return products[index];
}
async function del(id) {
    const products = await readProducts();

    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const deleted = products[index];

    products.splice(index, 1);

    await writeProducts(products);

    return deleted;
}
module.exports = {
    getProducts,
    getProdById,
    add,
    edit,
    patch,
    del
};