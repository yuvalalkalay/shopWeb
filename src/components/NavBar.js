import React, { useEffect, useState } from "react";
import '../styles/index.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { slice } from '../redux/store';
import axios from "axios";

const NavBar = ()=>{
    const url = 'http://localhost:3030/shopUsers';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const useName = useSelector( state => state.slice.useName );
    const signState = useSelector( state => state.slice.SignState);
    const userId = useSelector( state => state.slice.useId);
    const adminState = useSelector( state => state.slice.adminState);


    const handleOnclick = (category)=>{
        dispatch(slice.actions.category(category));
        navigate(`/category`);
    }

    const handleOnclickHome = ()=>{
        navigate(`/shop-web`);
    }

    const handleSignState = ()=>{
        if(signState === 'Sign In'){
            navigate('/SignIn');
        }
        else{
            dispatch(slice.actions.SignState('Sign In'));
            dispatch(slice.actions.useName(''));
            dispatch(slice.actions.userId(''));
            dispatch( slice.actions.removeAllProuct());
            dispatch( slice.actions.adminState('invisible'));
            navigate('/shop-web');
        }
    }

    const handleUserManeger = ()=>{
        navigate('/usersManeger');
    }

    const handleProductManeger = ()=>{
        navigate('/productManeger');
    }

    const handleCartPage = ()=>{
        navigate('/cart');
    }

    return(
        <nav>
            <ul className="navBar">
                <li><span className="link" onClick={() => handleOnclickHome()}>Home</span></li>
                <li><span className={adminState}  onClick={() => {handleUserManeger()}}>users maneger</span></li>
                <li><span className={adminState} onClick={() => {handleProductManeger()}}>product maneger</span></li>
                <li><span className="link" onClick={() => handleOnclick("men's clothing")}>Men's Clothing</span></li>
                <li><span className="link" onClick={() => handleOnclick('jewelery')}>Jewelery</span></li>
                <li><span className="link" onClick={() => handleOnclick('electronics')}>Electronics</span></li>
                <li><span className="link" onClick={() => handleOnclick("women's clothing")}>Women's Clothing</span></li>
                <li><span className="link" onClick={() => handleOnclick('')}>Contact Us</span></li>
                <li><span className="link" onClick={() => handleOnclick('')}>Feedback</span></li>
                <li><span className="link" onClick={() => handleCartPage()}>Cart</span></li>
                <li><span className="link" onClick={() => handleSignState()}>{signState}</span></li>
                <li><span className="link" >{ useName }</span></li>
            </ul>

        </nav>
    )
}

export default NavBar;