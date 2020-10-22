import axios from 'axios';
import React, { useState,useEffect} from "react";

function PostQuestion(){
 const [subject, setSubject] = useState('');
 const [question, setQuestion] = useState('');
// const [post, setPost] = useState('');


 const questionObj ={
    subject:subject,
    question:question
};

const apiurl = 'https://edu-stack.herokuapp.com/questions';

 function handleSubmit(e) {
     e.preventDefault();
    
       

 axios.post(apiurl,questionObj)  
        .then(res =>{
            console.log(res);
            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        });

       

    }

  return(
      <div>
        <form onSubmit={handleSubmit}>
            <label>
                Subject:
            <input type="text" name="title"
             value={subject} 
            onChange={(e)=> setSubject(e.target.value)}/>
            </label>
            <br/>
            <label>
                Question:
              <input type="text" name="question"
             value={question} 
            onChange={(e)=> setQuestion(e.target.value)}/>
            </label>
            <br/>
            <button>Upload</button>
        </form>
  <p>{post}</p>
        </div>
  );
}
export default PostQuestion;