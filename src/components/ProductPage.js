import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

import '../styles/index.css';
import { slice } from "../redux/store";

const ProductPage = ()=>{
    const dispatch = useDispatch();
    const productsURL = 'http://localhost:3030/products';
    const usersURL = 'http://localhost:3030/shopUsers';
    const id = useSelector( state => state.slice.id );
    const userId = useSelector( state => state.slice.useId);
    const products = useSelector( state => state.slice.quantity );
    const [rating, setRating] = useState({});
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect( async ()=>{
        const productRes = await (await axios.get(`${productsURL}/${id}`)).data;
        setProduct(productRes);
        setRating(productRes.rating);
        //console.log(productRes);
    },[])
    
    const handleP = ()=>{
        setQuantity( quantity + 1 );
    }

    const handleM = ()=>{
        if(quantity > 1){
            setQuantity( quantity - 1 );
        }
    }

    const handleCart = async ()=>{
        
        const productFiltered = products.filter( product => product.id === id);
        //console.log(productFiltered);
            let newQ = 0;
            let b = false;

            if(productFiltered.length === 1){
                newQ = productFiltered[0].quantity + quantity;
            }
            else{
                newQ = quantity;
            }

        let obj = {
            id : id,
            title : product.title,
            img : product.image,
            quantity : newQ,
            price : product.price
        }

        if(productFiltered.length === 1){
            dispatch( slice.actions.removeProduct(id));
        }

        dispatch(slice.actions.quantity(obj));
        


        if( userId.length !== 0 ){
            console.log('in user :)')
                let userJson = await (await axios.get(`${usersURL}/${userId}`)).data;
                    userJson.cart.forEach( product => {
                        if(product.id === obj.id){
                            b = true;
                            product.quantity = obj.quantity;
                        }
                    });

                    if(b === false){
                        console.log('false');
                        userJson.cart.push({...obj});
                        console.log(userJson);
                        await axios.put(`${usersURL}/${userId}`, userJson);
                    }
                    else{
                        console.log('true');
                        console.log(userJson);
                        console.log(`${productsURL}/${userId}`);
                        await axios.put(`${productsURL}/${userId}`, userJson);
                    }

        }
        alert('added seccusfully to cart');
    }

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
                            <br/>
                            <button onClick={() => {handleP()}}>+</button>
                            <span>{quantity}</span>
                            <button onClick={() => {handleM()}}>-</button>
                        </div>
                        <br/>
                    <button onClick={() => {handleCart()}}>add to cart</button>
                    <button>buy now</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage;