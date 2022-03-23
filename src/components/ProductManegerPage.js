import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slice } from "../redux/store";
import NavBar from './NavBar';

const ProductManeger = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsUrl = 'http://localhost:3030/products';
    const [ products, setProducts] = useState([]);

    useEffect( async() => {
        const productsRes = await (await axios.get(productsUrl)).data;
        setProducts(productsRes);
    },[])

    const handleUpdate = (id)=>{
        dispatch(slice.actions.product2UpdateId(id));
        navigate('/productManegerUpdate');
    }

    const handleDelete = (id)=>{
        console.log(id);
    }

    const repiter = products.map(( product, index) => {
        return(
            <div key={index}>
                <h3>{product.title}</h3>
                <img src={product.image} alt="undefine" height={100} width={100}/><br/>
                <button onClick={() => {handleUpdate(product._id)}}>update</button>
                <button onClick={() => {handleDelete(product._id)}}>delete</button>
                <br/>
                <br/>
                <br/>
            </div>
        )
    })
    return(
        <div>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <h1>product maneger</h1>
            {repiter}
        </div>
    )
}

export default ProductManeger;