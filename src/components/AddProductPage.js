import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = ()=>{
    const productsUrl = 'http://localhost:3030/products';
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        title : '',
        price : '',
        description : '',
        image : '',
        category : '',
    });

    const [rating, setRating] = useState({
        rate : 0,
        count : 0
    })

    const handleInput = (e)=>{
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value
        })
    }

    const handleRating = (e)=>{
        setRating({
            ...rating,
            [e.target.name] : e.target.value
        })
    }

    const handleAdd = async ()=>{
        const obj = {
            ...userInput,
            rating:{
                ...rating
            }
        }

        await axios.post(productsUrl, obj);
        alert('product added seccussfully');
        navigate('/productManeger');
    }

    const handleCancel = ()=>{
        navigate('/productManeger');
    }

    return(
        <div>
            <h1> add new product </h1>
            title : <input  name="title" value={userInput.title} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
            price : <input name='price'  value={userInput.price} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
            description : <input name="description" value={userInput.description} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
            image : <input name="image" value={userInput.image} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
            rate : <input name="rate" value={rating.rate} onChange={(e) => {handleRating(e)}} type={'number'} min={0}/><br/>
            count : <input name="count" value={rating.count} onChange={(e) => {handleRating(e)}} type={'number'} min={0} /><br/>

            <select name="category" value={userInput.category} onChange={(e) => {handleInput(e)}}>
                <option value={"men's clothing"}>men's clothing</option>
                <option value={"women's clothing"}>women's clothing</option>
                <option value={"jewelery"}>jewelery</option>
                <option value={"electronics"}>electronics</option>
            </select>
            <br/>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default AddProduct;