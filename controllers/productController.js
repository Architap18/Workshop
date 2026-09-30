const service = require('../services/productService');

async function all(req, res) {
    try {
        const products = await service.getProducts();
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
    }
}

async function one(req, res) {
    try {
        const { id } = req.params;
        const product = await service.getProdById(id);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
        res.status(200).json({ product });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    all,
    one
};