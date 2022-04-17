import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { slice } from "../redux/store";
import NavBar from "./NavBar";
import axios from "axios";
import '../styles/index.css';
import { useNavigate } from "react-router-dom";


const SearchPage = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const url = 'http://localhost:3030/products';
    const search = useSelector( state => state.slice.search );
    const [searchResult, setSearchResult] = useState([]);

    useEffect( async () => {
        const productsSearch = (await axios.get(url)).data;
        const searchL = search.toLowerCase();
        const filtered = productsSearch.filter( product => product.title.toLowerCase().includes(searchL)  == true)
        setSearchResult(filtered);
        console.log(filtered);
    },[search])

    const handleProDuct = (id)=>{
        dispatch( slice.actions.id(id) )
        navigate('/product');
    }

    const repiter = searchResult.map((product, index) => {
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
            <br/>
            <br/>
            <br/>
            <h1> search for "{search}"</h1>
            <div className='mainDiv'>
                {searchResult.length !== 0 ? repiter : <h1 className="oops">oops no product for "{search}"</h1>}
            </div>
        </div>
    )

}

export default SearchPage;