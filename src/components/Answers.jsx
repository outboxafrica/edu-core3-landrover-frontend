import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Answers() {
    // already exisiting answers
    const [answers, setAnswers] = useState([]);
    // new answer to be posted
    const [answer, setAnswer] = useState('');

    const [post_content, setPost_content] = useState('');
    
    // getting the id and post title from url params
    let {_id, post_title} = useParams();

    const apiurl = `http://edu-stack.herokuapp.com/questions/${_id}/answers`;
    const apiurl2 = `http://edu-stack.herokuapp.com/questions/${_id}`;

    useEffect(()=>{
        const fetchAnswers = async () =>{ 
            const response = await axios.all([axios.get(apiurl),axios.get(apiurl2)]);
            setAnswers(response[0].data.answer)
            setPost_content(response[1].data.post.content)
        }
        fetchAnswers()
    },[apiurl,apiurl2])

    console.log(answers)

    const token = localStorage.getItem('token');

      function handleSubmit(e) {
         e.preventDefault();
         const answerObj ={
            answer:answer
        }; 
       
    
     axios.post(apiurl,answerObj,{headers:{Authorization: `${token}`}})  
            .then(res =>{
                window.location.reload();
            }).catch((error)=>{
                console.log(error);
            });
    
        } 

    return (
        <div>
            {<h1>{post_title}</h1>}
            {<p>{post_content}</p>}
            {<h2>Answers</h2>}
            {answers.map(answer => (
                <div className='answer' key={answer._id}>
                    <p>{answer.answer}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <label>
                    Answer:
            <input type="text" name="answer"

                        onChange={(e) => setAnswer(e.target.value)} />
                </label>

                <br />
                <button>Post your answer</button>
            </form>

        </div>
    );
}
export default Answers;