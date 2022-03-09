const express = require('express');
const usersBLL = require('../BLL/users');

const router = express.Router();

router.get('/',async (req, res)=>{
    try{
        const allUsers = await usersBLL.GetAllUsers();
        res.send(allUsers);
    }
    catch(error){
        res.send(error);
    }
})

router.get('/:id',async (req, res)=>{
    try{
        const id  = req.params.id;
        const user = await usersBLL.GetById(id);
        res.send(user);
    }
    catch(error){
        res.send(error);
    }
})

router.post('/',async (req, res)=>{
    try{
        const user = req.body;
        const result = await usersBLL.AddUser(user);
        res.send(result);
    }
    catch(error){
        res.send(error);
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const user2Update = req.body;
        const result = await usersBLL.UpdateUserById(id, user2Update);
        res.send(result);
    }
    catch(error){
        res.send(error);
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const result = await usersBLL.DeleteById(id);
        res.send(result);
    }
    catch(error){
        res.send(error);
    }
})

module.exports = router;