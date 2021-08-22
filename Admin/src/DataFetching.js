import React, { useEffect, useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/questions")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
  return (
    <div>      
        <h1 class="text-blue-400">Questions Here</h1>
        <ul>
            {questions.map(question => (
                <li key = {question.id}> {question.question} </li>
            ))}
        </ul>
    </div>
  );
}

export default DataFetching;