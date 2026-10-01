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
async function add(req, res) {
    try {
        const product = await service.add(req.body);

        cache.clear();

        res.status(201).json({ product });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

async function edit(req, res) {
    try {
        const product = await service.edit(
            req.params.id,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        cache.clear();

        res.status(200).json({ product });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        });
    }
}
async function patch(req, res) {
    try {
        const product = await service.patch(
            req.params.id,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        cache.clear();

        res.status(200).json({ product });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        });
    }
}
async function del(req, res) {
    try {
        const product = await service.del(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        cache.clear();

        res.status(200).json({ product });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        });
    }
}
module.exports = {
    all,
    one,
    add,
    edit,
    patch,
    del
};