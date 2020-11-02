import React, {useState, useEffect} from 'react';
import edustack from '../network/EduStack';

export default function SearchResults({query}) {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
          const fetchData = async () =>{
            setIsError(false);
            setIsLoading(true);
            try {
              const response = await edustack.get(`/search?search_term=${query}`,);
              setResults(response.data.results);
            } catch (error) {
                setIsError(true);
            }
              setIsLoading(false);
          }
          
        fetchData();
    }, [query]);
        
         return(
            <div>
              {<h1>Search Results</h1>}
              {isError && <div>Something went wrong ...</div>}
              {isLoading ? (
                <div>Loading ...</div>
              ) : (results.map(result => (
                <div className="post card" key={result._id}>
                  <div className="card-content">
                    <span className="card-title">{result.title}</span>
                    <p>{result.content}</p>
                  </div>
                </div>
              ))
                )}
            </div>
          ); 
        
}