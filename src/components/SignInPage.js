import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { slice } from "../redux/store";

 const SignIn = () => {
    const url = 'http://localhost:3030/shopUsers';
    const [input, setInput] = useState({
        userName : '',
        Password : ''
    })
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect( async()=>{
        const usersJson = await (await axios.get(url)).data;
        setUsers(usersJson);
    },[])

    const handleInput = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleCreateAcount = ()=>{

        navigate('/createAccount');

    }

    const handleSinIn = async()=>{
        const filtered = users.filter( user => user.userName === input.userName && user.password === input.Password);
            if(filtered.length === 1){
                console.log(filtered)
                dispatch( slice.actions.userId(filtered[0]._id));
                dispatch( slice.actions.useName(filtered[0].userName));
                filtered[0].cart.forEach(product => {
                    dispatch( slice.actions.quantity(product));
                });
                dispatch( slice.actions.SignState('Sign Out'));
                navigate('/shop-web');
            }
            else{
                alert('sign in fail pleas try again');
            }
    }

     return(
         <div>
             <NavBar />
             <br/>
             <br/>
             <br/>
            <h1>Sign In</h1>
            user name : <input name="userName" value={input.userName} onChange={e => handleInput(e)} type={'text'} /> <br/>
            password : <input name="Password" value={input.Password} onChange={e => handleInput(e)} type={'password'} /><br/><br/>
            <button onClick={()=>{handleSinIn()}}>sign in</button>
            <button onClick={()=>{handleCreateAcount()}}>create acount</button>
         </div>
     )
 }

 export default SignIn;