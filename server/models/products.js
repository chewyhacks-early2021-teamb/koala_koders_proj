const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        productName: String,
        price: String,
        category: String,
        description: String 
});
module.exports = mongoose.model("Product", ProductSchema);
