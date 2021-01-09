const faker = require('faker');
const Product = require('./models/product');

async function seedsProducts() {
    await Product.deleteMany({});

    for(const i of new Array(100)){
        const product = {
            name: faker.commerce.productName(),
            category: '',
            description: faker.commerce.productDescription(),
            price: faker.commerce.price()
        }
        await Product.create(product);
    }

    console.log('100 new products created!!');
}

module.exports = seedsProducts;