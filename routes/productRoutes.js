const express = require('express');
const controller = require('../controllers/productController');

const router = express.Router();

router.get('/products', controller.all);
router.get('/products/:id', controller.one);
router.post('/products', controller.add);
router.put('/products/:id', controller.edit);
router.patch('/products/:id', controller.patch);
module.exports = router;