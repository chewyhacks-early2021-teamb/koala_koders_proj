const express = require('express'),
      router = express.Router();
const { asyncErrorHandler} = require('../middleware');
const { getProducts, showProduct } = require('../controller/products');


/* GET products index /products  */
router.get('/', asyncErrorHandler(getProducts));

/* GET products show /products/:id */
router.get('/:id', asyncErrorHandler(showProduct));

module.exports = router;