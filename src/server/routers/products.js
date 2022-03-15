const express = require('express');
const BLLProducts = require('../BLL/products');
const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const result = await BLLProducts.GetAllProducts();
        res.send(result);
    }
    catch(error){
        res.send(error);
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const result = await BLLProducts.GetProductById(id);
        res.send(result)
    } catch (error) {
        res.send(error);
    }
})

router.post('/', async(req,res)=>{
    try {
        const product = req.body;
        const result = await BLLProducts.AddProduct(product);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
})

router.post('/array', async(req, res)=>{
    try {
        const arr = req.body;
        const result = await BLLProducts.AddMany(arr);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const productUpdated = req.body;
        const id = req.params.id;
        const result = await BLLProducts.UpdateProduct(id, productUpdated);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const result = await BLLProducts.DeleteProduct(id);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;