import React from "react";
import '../styles/index.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { slice } from '../redux/store';

const NavBar = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleOnclick = (category)=>{
        dispatch(slice.actions.category(category));
        navigate(`/category`);
    }

    const handleOnclickHome = ()=>{
        navigate(`/shop-web`);
    }

    const handleSignIn = ()=>{
        navigate('/SignIn');
    }

    return(
        <nav>
            <ul className="navBar">
                <li><span className="link" onClick={() => handleOnclickHome()}>Home</span></li>
                <li><span className="link" onClick={() => handleOnclick("men's clothing")}>Men's Clothing</span></li>
                <li><span className="link" onClick={() => handleOnclick('jewelery')}>Jewelery</span></li>
                <li><span className="link" onClick={() => handleOnclick('electronics')}>Electronics</span></li>
                <li><span className="link" onClick={() => handleOnclick("women's clothing")}>Women's Clothing</span></li>
                <li><span className="link" onClick={() => handleOnclick('')}>Contact Us</span></li>
                <li><span className="link" onClick={() => handleOnclick('')}>Feedback</span></li>
                <li><span className="link" onClick={() => handleSignIn()}>Sign In</span></li>
            </ul>
        </nav>
    )
}

export default NavBar;