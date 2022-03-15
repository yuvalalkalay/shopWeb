import React , { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

import { slice } from '../redux/store';
import '../styles/index.css';

const CategoryPage = ()=>{
    const dispatch = useDispatch();
    const fakeApi = 'http://localhost:3030/products';
    const navigate = useNavigate();
    const category = useSelector( state => state.slice.category);
    const [ products, setProducts ] = useState([]);

    useEffect( async() => {
        let productRespod = await axios.get(fakeApi);
        productRespod = await productRespod.data;
        setProducts(productRespod);
    },[])

    const filteredProducts = products.filter( product => product.category === category);
    
    const handleProDuct = (id)=>{
        dispatch( slice.actions.id(id) )
        navigate('/product');
    }

    const repiter = filteredProducts.map((product, index) => {

        let title = '';
        if(product.title.length > 24){
            title = product.title.slice(0, 22) + '...';
        }
        else{
            title = product.title;
        }

        return(
        <div className='productDiv' key={index} onClick={()=>{handleProDuct(product._id)}}>
            <img className='image' src={product.image} width={80} height={80} alt="this is product image" />
            <h5>{title}</h5>
            <span>{`${product.price}$`}</span>
        </div>
        )
    })

    const handleB = () => {
        console.log(filteredProducts);
    }


    return(
        <div>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <h1>category page</h1>
            <div className='mainDiv'>
                {repiter}
            </div>
        </div>
    )
}

export default CategoryPage;