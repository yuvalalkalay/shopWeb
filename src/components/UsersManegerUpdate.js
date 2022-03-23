import React, { useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UsersManegerUpdate = ()=>{
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [inputUser, setInputUser] = useState({
        userName : '',
        firstName : '',
        lastName : '',
        password : '',
        cart : []
    });

    const usersUrl = 'http://localhost:3030/shopUsers';
    const userId = useSelector( state => state.slice.user2UpdateId ); 
    
    useEffect(async()=>{
        const userRes = await (await axios.get(`${usersUrl}/${userId}`)).data;
        setUser(userRes);
        setInputUser(({
            userName : userRes.userName,
            firstName : userRes.firstName,
            lastName : userRes.lastName,
            password : userRes.password,
            cart : userRes.cart
        }))
    },[])

    const handleInput = (e)=>{
        setInputUser({
            ...inputUser,
            [e.target.name] : e.target.value
        })
    }

    const handleUpdate = async()=>{
        await axios.put(`${usersUrl}/${userId}`, inputUser);
        alert('update secussfully :)');
        navigate('/UsersManeger');
    }

    const handleCancel = ()=>{
        navigate('/UsersManeger');
    }
    return(
        <div>
            <h1>update : {user.userName}</h1>
                user name : <input name="userName" value={inputUser.userName} onChange={(e) => {handleInput(e)}} type={'text'}/><br/>
                first name : <input name="firstName" value={inputUser.firstName} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
                last name : <input name="lastName" value={inputUser.lastName} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
                password : <input name="password" value={inputUser.password} onChange={(e) => {handleInput(e)}} type={'text'} /><br/><br/>
                <button onClick={handleUpdate}>update</button>    
                <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default UsersManegerUpdate;