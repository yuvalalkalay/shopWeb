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
        navigate(`/`);
    }

    return(
        <nav>
            <ul className="navBar">
                <li><span className="link" onClick={() => handleOnclickHome()}>Home</span></li>
                <li><span className="link" onClick={() => handleOnclick('men')}>men's clothing</span></li>
                <li><span className="link" onClick={() => handleOnclick('jewelery')}>jewelery</span></li>
                <li><span className="link" onClick={() => handleOnclick('electronics')}>electronics</span></li>
                <li><span className="link" onClick={() => handleOnclick('women')}>women's clothing</span></li>
                <li><span className="link" onClick={() => handleOnclick('')}>contact us</span></li>
                <li><span className="link" onClick={() => handleOnclick('')}>feedback</span></li>
            </ul>
        </nav>
    )
}

export default NavBar;