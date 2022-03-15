import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from 'react-redux';
import { slice } from '../redux/store';
import '../styles/index.css';

const Cart = ()=>{
    const [user, setUser] = useState({});

    useEffect( async() => {
        const user = await (await axios.get(`${usersURL}/${userId}`)).data;
        setUser(user);
    },[])

    const usersURL = 'http://localhost:3030/shopUsers';
    const products = useSelector( state => state.slice.quantity);
    const dispatch = useDispatch();
    const userId = useSelector( state => state.slice.useId );


    const handleRemove = async(id)=>{
        if( typeof(userId) !== "undefined" && userId.length !== 0){
            const cart = user.cart.filter(product => product.id !== id);
            let userObj = {...user};
            userObj.cart = [...cart];
            setUser({... userObj});
            await axios.put(`${usersURL}/${userId}`, userObj);
        }
        dispatch(slice.actions.removeProduct(id));
    }

    const repiter = products.map(( product, index ) => {
        let title = '';
        if(product.title.length > 44){
            title = product.title.slice(0, 42) + '...';
        }
        else{
            title = product.title;
        }
        return(
            <div className="productCartDiv" key={index}>
                <img className="imgProductCart" src={product.img} alt="product image" />
                <span className="productCartSpan"> x{product.quantity} </span>
                <span className="productCartSpan">{`${product.price*product.quantity}$ ${title}`}</span>
                <button className="cartBuyButton">buy</button>
                <button className="cartRemoveButton" onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
        )
    })
    
    return(
        <div>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <h1> cart page </h1>
            <br/>
            {repiter}
        </div>
    )
}

export default Cart