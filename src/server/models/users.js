const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema   ({
    userName : String,
    firstName : String,
    lastName : String,
    password : String,
    cart : Array,
    admin : Boolean
})

module.exports = mongoose.model( 'UsersShop_DB', userSchema );