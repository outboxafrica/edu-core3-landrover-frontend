import React, { useState } from 'react';
import SearchList from './SearchList';
import './styles/SearchBar.css';

export default function SearchBar() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input id='search' type='search' onChange={handleQuery}/>
            </form>
            {isSubmitted && <SearchList query={query}/> }
        </React.Fragment>
    )
}
