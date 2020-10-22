import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" className="brand-logo">EDU Stackoverflow</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/auth/signup">Sign Up</Link></li>
                        <li><Link to="/auth/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
    )
}