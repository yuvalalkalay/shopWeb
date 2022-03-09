import React from "react";
const CreateAccount = ()=>{
    return(
        <div>
            <h1> create account page </h1>
            first name : <input type={'text'} /><br/>
            last name : <input type={'text'} /><br/>
            user name : <input type={'text'} /><br/>
            password : <input type={'password'} /><br/>
            <button>create</button>
            <button>Cancel</button>
        </div>
    )
}
export default CreateAccount;