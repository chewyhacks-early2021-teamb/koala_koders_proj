const Product = require('../models/products');

module.exports = {

    //product index
    async getProducts(req, res, next){
        const { dbQuery } = res.locals;
        delete res.locals.dbQuery;
        let products = await Product.find({});
        // if(!product.length && res.locals.query){
        //     res.locals.error = 'No results match your search';
        // }
        res.send(products);
    },

    async showProduct(req, res, next){
        let product = await Product.findById(req.params.id);
        res.send(product);
    }
    
}