import axios from 'axios';
import React, {useState} from "react";


function PostQuestion(){
 const [title, setTitle] = useState('');
 const [content, setContent] = useState('');


const token = localStorage.getItem('token');

const user = (JSON.parse(atob(token.split('.')[1])));

const user_id= user.id;
const apiurl = `https://edu-stack.herokuapp.com/user/${user_id}/questions`;

 function handleSubmit(e) {
     e.preventDefault();
     const questionObj ={
        title:title,
        content:content
    };
   

 axios.post(apiurl,questionObj,{headers:{Authorization: `${token}`}})  
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
           
            onChange={(e)=> setTitle(e.target.value)}/>
            </label>
            <br/>
            <label>
                Question:
              <input type="text" name="question"
            
            onChange={(e)=> setContent(e.target.value)}/>
            </label>
            <br/>
            <button>Post question</button>
        </form>
  
        </div>
  );
}

export default PostQuestion;
