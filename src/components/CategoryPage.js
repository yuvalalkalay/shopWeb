import React from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/index.css';
import NavBar from "./NavBar";

const CategoryPage = ()=>{
    const navigate = useNavigate();
    return(
        <div>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <h1>category page</h1>
        </div>
    )
}

export default CategoryPage;