import React, { useState } from 'react';
import { useHistory, Link} from 'react-router-dom';
import edustack from "../network/EduStack";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password: password
        }

        edustack.post('/auth/login',
            payload).then(response =>{
                if (response.data.message === 'Login successful') {
                    localStorage.setItem('token',response.data.token);
                    setIsLoggedIn(true);
                    const user = JSON.parse(atob(response.data.token.split('.')[1]))
                    const id = user.id
                    history.push(`/user/${id}/profile`);              
                
                } else {
                    history.push('/auth/login')
                }   
        }) 
    }    

    let history = useHistory()
    
    return (
            <div>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={emailHandler} required />
                <br></br> <br></br>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={passwordHandler} required />
                <br></br> <br></br>
                <button type="submit">Log In</button>
                <p>Don't have an account? <Link to="/auth/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

