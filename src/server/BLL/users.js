const User = require('../models/users');

const GetAllUsers = ()=>{
    return new Promise((resolve, reject)=>{
        User.find({}, (err, users)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(users)
            }
        })
    })
}

const GetById = (id) => {
    return new Promise ((resolve, reject)=>{
        User.findById(id, ( err, user )=>{
            if(err){
                reject(err);
            }
            else{
                resolve(user);
            }
        })
    })
}

const AddUser = (newUser) => {
    return new Promise((resolve, reject)=>{
        const user = new User(newUser);
        user.save((err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve('added successfully');
            }
        })
    })
}

const UpdateUserById = ( id, obj)=>{
    return new Promise(( resolve, reject )=>{
        User.findByIdAndUpdate( id, obj, (err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve('update secessfully');
            }
        })
    })
}

const DeleteById = (id)=>{
    return new Promise((resolve, reject)=>{
        User.findByIdAndDelete(id, (err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve('user deleted successfully');
            }
        })
    })
}

module.exports = {
    GetAllUsers,
    GetById,
    AddUser,
    UpdateUserById,
    DeleteById
}