import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductManegerUpdate = ()=>{
    const productsUrl = 'http://localhost:3030/products';
    const productId = useSelector( state => state.slice.product2UpdateId );
    const [ product, setProduct] = useState({});
    const navigate = useNavigate();
    const [ userInput, setUserInput ] = useState({
        title : '',
        price : '',
        description : '',
        category : '',
        image : ''
    });

    const [rating, setRating] = useState({
        rate : '',
        count : '',
    })

    useEffect(async()=>{
        const res = await (await axios.get(`${productsUrl}/${productId}`)).data;
        setProduct(res);
        setUserInput(res);
        setRating(res.rating);
    },[])

    const handleUpdate = async ()=>{
        const obj = {
            ...userInput,
            rating:{
                ...rating
            }
        }
        console.log(obj);
        await axios.put(`${productsUrl}/${productId}`,obj);
        alert('product updated seccussfully');
        navigate('/productManeger');
    }

    const handleCancel = ()=>{
        navigate('/productManeger');
    }

    const handleInput = (e) => {
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

    return(
        <div>
            <h1>{product.title}</h1>
            title : <input  name="title" value={userInput.title} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
            price : <input name='price'  value={userInput.price} onChange={(e) => {handleInput(e)}} type={'number'} min={1} /><br/>
            description : <input name="description" value={userInput.description} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
            image : <input name="image" value={userInput.image} onChange={(e) => {handleInput(e)}} type={'text'} /><br/>
            rate : <input name="rate" value={rating.rate} onChange={(e) => {handleRating(e)}} type={"number"}  min={0} /><br/>
            count : <input name="count" value={rating.count} onChange={(e) => {handleRating((e))}} type={"number"} min={0} /><br/>
            <select name="category" value={userInput.category} onChange={(e) => {handleInput(e)}}>
                <option value={"men's clothing"}>men's clothing</option>
                <option value={"women's clothing"}>women's clothing</option>
                <option value={"jewelery"}>jewelery</option>
                <option value={"electronics"}>electronics</option>
            </select>
            <br/>
            <button onClick={handleUpdate}>update</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default ProductManegerUpdate;