import React, { useEffect, useState} from 'react'
import axios from 'axios'
import UserNav from '../UserNav'
import { Redirect } from "react-router-dom";




function Questions() {
  const [ques, setQues] = useState([])
  const [question, setQuestion] = useState('')

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/questions")
        .then(res => {
            //console.log(res)
            setQues(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    
  
  
  
    var getUser = sessionStorage.getItem('user');
    var user_data = JSON.parse(getUser);
    var created_by = user_data.email;
    //console.log("user check:", created_by);
    
  

      const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const new_question = { question, created_by };
        fetch('http://127.0.0.1:8000/api/questions', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(new_question)
        }).then(() => {
            console.log('Question Posted Successfully');
            console.log(new_question);
        })
        
    }
      
    if(sessionStorage.getItem('user') == null) {
      return <Redirect to = "/login" />
    } else{
            return (
              <div>
                <UserNav/> 
                <div class="flex justify-center">
                  <div class="w-2/3">
                    <div class="text-center mt-5 mb-5 text-3xl font-bold">
                      <h1 class="">Questions Here</h1>
                    </div>
                    <div>
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {handleSubmit}>
                      <div class="mb-4">
                        <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="full_name">
                          Ask Something
                        </label>
                        <input 
                          type="textarea" 
                          name="question"
                          onChange = {(e) => setQuestion(e.target.value)}
                          required
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"             
                      />
                      </div>
                      <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Post
                        </button>
                      </div>
                      
                    </form>
                    </div>
                    {ques.map(q => (
                      <div class="p-5 bg-gray-100 rounded shadow">
                        <p key = {q.id} class="text-blue-400"> {q.created_by}  </p>
                        <p class="text-xl font-bold"> {q.question}  </p>
                      </div>              
                    ))}
                  </div>
                </div>
              
              </div>
              
              
              
            );
          }
}

export default Questions;
