const express = require('express');
const controller = require('../controllers/productController');
const { cacheGet } = require('../middleware/cache');
const router = express.Router();

router.get('/products', cacheGet, controller.all);
router.get('/products/:id', cacheGet, controller.one);
router.post('/products', controller.add);
router.put('/products/:id', controller.edit);
router.patch('/products/:id', controller.patch);
router.delete('/products/:id', controller.del);
module.exports = router;