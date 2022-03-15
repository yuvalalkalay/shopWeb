const Product = require('../models/product');

const GetAllProducts = ()=>{
    return new Promise((resolve, reject)=>{
        Product.find({}, (err, products)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(products);
            }
        })
    })
}

const GetProductById = (id)=>{
    return new Promise((resolve, reject)=>{
        Product.findById(id, (err, product)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(product);
            }
        })
    })
}

const AddProduct = (newProduct)=>{
    return new Promise((resolve, reject)=>{
        const product = new Product(newProduct);
        product.save((err, product)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(product);
            }
        })
    })
}

const UpdateProduct = (id, obj)=>{
    return new Promise((resolve, reject)=>{
        Product.findByIdAndUpdate(id, obj, (err, product)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(product);
            }
        })
    })
}

const DeleteProduct = (id)=>{
    return new Promise((resolve, reject)=>{
        Product.findByIdAndDelete(id, (err, product)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(product);
            }
        })
    })
}

const AddMany = (arr)=>{
    return new Promise((resolve, reject)=>{
        Product.insertMany(arr, (err, arr)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(arr);
            }
        })
    })
}

module.exports = {
    GetAllProducts,   
    GetProductById,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    AddMany
}