const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema ({
    id : Number,
    title : String,
    price : Number,
    description : String,
    category : String,
    image : String,
    rating : {
        rate : Number,
        count : Number
    }
})

module.exports = mongoose.model( 'Shop_products', productSchema );