const express = require('express');
const controller = require('../controllers/productController');

const router = express.Router();

router.get('/products', controller.all);
router.get('/products/:id', controller.one);
router.post('/products', controller.add);
module.exports = router;