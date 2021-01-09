const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        productName: String,
        price: { type: Int, require:true},
        category: String,
        description: String 
});
module.exports = mongoose.model("Product", ProductSchema);

db.product.insertOne(
        { "productName" :  "Dog food",
          "price" : 12 ,
          "category" : "dog",
          "description" : "a dog food"
        }
     )