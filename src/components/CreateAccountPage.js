import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const CreateAccount = ()=>{
    const navigate = useNavigate();
    const url = 'http://localhost:3030/shopUsers';
    const [ input, setInput ] = useState({
        firstName : '',
        lastName : '',
        userName : '',
        password : '',
        admin : false
    })

    const handleInput = (e) =>{
        setInput({
            ...input,
            [ e.target.name ] : e.target.value
        })
    }

    const handleCreate = async()=>{
        await axios.post(url, input);
        alert('user created seccussfully');
        navigate('/shop-web');
    }

    const handleCancel = ()=>{
        navigate('/signIn');
    }

    return(
        <div>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <h1> create account page </h1>
            first name : <input name="firstName" value={input.firstName} onChange={e => handleInput(e)} type={'text'} /><br/>
            last name : <input name="lastName" value={input.lastName} onChange={e => handleInput(e)} type={'text'} /><br/>
            user name : <input name="userName" value={input.userName} onChange={e => handleInput(e)} type={'text'} /><br/>
            password : <input name="password" value={input.password} onChange={e => handleInput(e)} type={'password'} /><br/>
            <button onClick={() => {handleCreate()}}>create</button>
            <button onClick={() => {handleCancel()}}>Cancel</button>
        </div>
    )
}
export default CreateAccount;