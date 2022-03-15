import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { slice } from '../redux/store';
import NavBar from './NavBar';
import '../styles/index.css';

const HomePage = ()=>{
const navigate = useNavigate();
const dispatch = useDispatch();
const fakeApi = 'http://localhost:3030/products';
const [products , setProducts] = useState([]);
useEffect( async () => {
  let res = axios.get(fakeApi);
  res =  (await res).data;
    setProducts(res);
},[])

const handleProDuct = (id)=>{
    dispatch( slice.actions.id(id) )
    navigate('/product');
}

const repiter = products.map((product, index)=>{
        let title = '';
        if(product.title.length > 24){
            title = product.title.slice(0, 22) + '...';
        }
        else{
            title = product.title;
        }

    return(
        <div className='productDiv' key={index} onClick={()=>{handleProDuct(product._id)}} >
            <img className='image' src={product.image} width={80} height={80} alt="this is product image" />
            <h5>{title}</h5>
            <span>{`${product.price}$`}</span>
        </div>
    )
})

    return(
        <div>
            <NavBar />
            <h1 className='h1'> shop web </h1>
            <div className='mainDiv'>
                {repiter}
            </div>
        </div>
    )
}

export default HomePage;