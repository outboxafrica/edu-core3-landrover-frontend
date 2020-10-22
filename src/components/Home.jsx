import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Link to="/questions">Questions</Link>
            <h1>I am home</h1>
        </div>
    )
}
