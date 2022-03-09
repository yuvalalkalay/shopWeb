import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useSelector } from 'react-redux';

import '../styles/index.css';

const ProductPage = ()=>{
    const fakeApi = 'https://fakestoreapi.com/products';
    const id = useSelector( state => state.slice.id );
    const [rating, setRating] = useState({});
    const [product, setProduct] = useState({});
    useEffect( async ()=>{
        const productRes = await (await axios.get(`${fakeApi}/${id}`)).data;
        setProduct(productRes);
        setRating(productRes.rating);
        //console.log(productRes);
    },[])
    
    return(
        <div>
            <NavBar />
            <div className="mainProductDiv">

                <div className="titleProductDiv">
                    <h1> {product.title} </h1>
                </div>

                <div className="productImgDiv">
                    <br/>
                    <br/>
                    <br/>
                    <img className="productImg" src={product.image} alt='produt picture' /><br/>
                </div>


                <div className="productDescription">
                        <div className="ratingProductDiv">
                            <p>{product.description}</p>
                            <span>category : {product.category}</span> <br/>
                            <span>price : {`${product.price}$`}</span> <br/>
                            <span>count : {rating.count}</span><br/>
                            <span> rating : {rating.rate}</span><br/>
                        </div>
                        <br/>
                    <button>add to cart</button>
                    <button>buy now</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage;