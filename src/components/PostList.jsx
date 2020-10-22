import React, { useState, useEffect } from 'react';
import edustack from '../network/EduStack';

export default function PostList(){
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const response = await edustack('/questions');
            setPosts(response.data.posts)
            setIsLoading(false);
        }
        fetchPosts();
    }, [])

    return(
        <div>
            {<h1>All Questions</h1>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (posts.map(post => (
                <div className='post' key={post._id}>
                    <span>{post.title}</span>
                    <p>{post.content}</p>
                </div>
            ))
                )}            
        </div>       
    );
}