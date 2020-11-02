import axios from 'axios';
import React, { useState} from "react";

function Signup(){
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 function handleSubmit(e) {
     e.preventDefault();
    
        const userObj ={
            email:email,
            password:password
        };


 
const apiurl = 'https://edu-stack.herokuapp.com/auth/signup';

 axios.post(apiurl,userObj)
          
        .then(res =>{
            console.log(res);
            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        });

    }
   
  return(
        <form onSubmit={handleSubmit}>
            <label>
                Email:
            <input type="text" name="email"
             value={email} 
            onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <br/>
            <label>
                Password:
              <input type="password" name="password"
             value={password} 
            onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <br/>
            <button>Signup</button>
        </form>
  );
}
export default Signup;