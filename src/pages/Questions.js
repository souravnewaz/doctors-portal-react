// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState} from 'react'
import axios from 'axios'


function Questions() {
  const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/questions")
        .then(res => {
            console.log(res)
            setQuestions(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <div>      
        <h1 class="text-blue-400">Questions Here</h1>
        
          {questions.map(question => (
            <div class="p-5 bg-gray-100 rounded shadow">
              <p key = {question.id}> {question.created_by}  </p>
              <p class="text-2xl font-bold"> {question.question}  </p>
            </div>
              
          ))}
        

    </div>
  );
}

export default Questions;
