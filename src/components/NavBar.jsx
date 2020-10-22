import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";


export default function NavBar() {
    const [token,setToken] = useState(null)

    useEffect(()=>{
        const getToken =  () =>{
            setToken(localStorage.getItem('token'));
        }
        getToken();
    })
    

    let history = useHistory();

    const handleSignIn = () =>{
        history.push('/auth/signup');
    }

    const handleLogin = () =>{
        history.push('/auth/login');
    }

    const handleLogout = () =>{
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
            <nav>
                <div className=""nav-wrapper>
                    <Link to="/" className="brand-logo" >EDU Stackoverflow</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        {(token !== null) ? '' :<button onClick={handleSignIn}>Sign Up</button>}
                        {(token == null) ? <button onClick={handleLogin}>Login</button> :
                        <button onClick={handleLogout}>Logout</button>}
                    </ul>
                </div>
            </nav>
    )
}