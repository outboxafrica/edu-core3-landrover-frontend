import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const response = await axios('http://edu-stack.herokuapp.com/questions');
            setPosts(response.data.posts)
            setIsLoading(false);
        }
        fetchPosts();
    }, [])

    return (
        <div>
            {<h1>All Questions</h1>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (posts.map(post => (
                <div className='post' key={post._id}>
                    <h3><a href={`/questions/${post._id}/${post.title.replace(/ /g,'-')}`}>{post.title}</a></h3>
                    <p>{post.content}</p>
                </div>
            ))
                )}
        </div>
    );

}