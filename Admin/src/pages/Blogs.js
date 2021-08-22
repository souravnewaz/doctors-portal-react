import React, { useEffect, useState} from 'react'
import axios from 'axios'
import UserNav from '../UserNav'
import { Redirect } from "react-router-dom";




function Blogs() {
  const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/questions")
        .then(res => {
            //console.log(res)
            setBlogs(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    if(sessionStorage.getItem('user') == null) {
      return <Redirect to = "/login" />
    } else{
            return (
              <div>
                <UserNav/> 
                <div class="flex justify-center">
                  <div class="w-2/3">
                    <div class="text-center mt-5 mb-5 text-3xl font-bold">
                      <h1 class="">Blogs Here</h1>
                    </div>
                    {blogs.map(blog => (
                      <div class="p-5 bg-gray-100 rounded shadow mb-2">
                        <p key = {blog.id} class="text-blue-400"> {blog.created_by}  </p>
                        <p class="">{blog.created_at} </p>
                        <p class="text-xl font-bold"> {blog.question}  </p>
                      </div>              
                    ))}
                  </div>
                </div>
              
              </div>
              
              
              
            );
          }
}

export default Blogs;
