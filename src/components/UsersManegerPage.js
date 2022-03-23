import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useNavigate} from 'react-router-dom';
import { slice } from '../redux/store';
import { useDispatch } from 'react-redux';
import axios from 'axios';


const UsersManeger = () => {
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const usersUrl = 'http://localhost:3030/shopUsers';
    const [users, setUsers] = useState([]);
    useEffect(async()=>{
        const users = await (await axios.get(usersUrl)).data;
        setUsers(users);
    },[])

    const handleUpdate = (id)=>{
        console.log(id);
        dispatch(slice.actions.user2UpdateId(id));
        navigate('/usersManegerUpdate');
    }
    
    const handleDelete = async (id)=>{
        axios.delete(`${usersUrl}/${id}`);
        const filteres = users.filter( user => user._id !== id );
        setUsers(filteres);
        alert('user deleted secussfully');
    }

    const repiter = users.map((user, index) => {
        return(
            <div key={index}>
                <span>user name : {user.userName}</span><br/>
                <span>full name : {`${user.firstName} ${user.lastName}`}</span><br />

                <button onClick={() => {handleUpdate(user._id)}}>update</button>
                <button onClick={() => {handleDelete(user._id)}}>delete</button>
                <br/><br/><br/>
            </div>
        )
    })
    return(
        <div>
            <NavBar />
            <br /><br/><br/>
            <h1>users maneger page</h1>
            {repiter}
        </div>
    )
}

export default UsersManeger;