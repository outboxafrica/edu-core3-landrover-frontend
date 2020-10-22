import React, { useState } from 'react';
import { useHistory, Link} from 'react-router-dom';
import edustack from "../network/EduStack";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    localStorage.setItem('token',response.data.token)
                    setTimeout(()=>{
                        history.push('/')
                    }, 5000)
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
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/auth/signup">Signup</Link></p>
            </form>
        </div>
    )
}

