import React, {useState} from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    const [showLogin, setShowLogin] = useState(true);

    let handleLogin =() =>{
        const token = localStorage.getItem('token');
        if(token){
            setShowLogin(false);
        }
        setShowLogin(true);
    }

    let handleLogout = () => {
        localStorage.removeItem('token')
        setShowLogin(true);
    }
    return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">EDU Stackoverflow</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/auth/signup">Sign Up</Link></li>
                        {showLogin ? <li><Link to="/auth/login" onClick={handleLogin}>Login</Link></li>:
                        <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li>}               
                    </ul>
                </div>
            </nav>
    )
}