import axios from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';

function CreateBlogs() {
    

    const [blogInput, setBlog] = useState({
        title:'',
        date:'',
        description:'',
        error_list: [],
        
    });

    const handleInput = (e) =>{
        e.persist();
        setBlog({...blogInput, [e.target.name]: e.target.value })
    }

    const blogSubmit = (e) =>{
        e.preventDefault();
        const data = {
            title: blogInput.title,
            date: blogInput.date,
            description: blogInput.description,
           
        }

        axios.post(`/api/createblog`, data).then(response => {

            if(response.data.status === 200)
            {
                
                swal("Success",response.data.message,"success");
                document.getElementById('CREATEBLOG_FORM');
                
                

            }
            else if(response.data.status === 400)
            {
                setBlog({...blogInput, error_list: response.data.errors});     

            }
        });

    }


    return (

        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Create Blog </h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={blogSubmit} id=" CREATEBLOG_FORM">
                                    <div className="form-group mb-3">
                                        <label>Blog Title</label>
                                        <input type="text" name="title" onChange={handleInput} value={blogInput.title} className="form-control" />
                                        <span>{blogInput.error_list.title}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Date</label>
                                        <input type="date" name="date" onChange={handleInput} value={blogInput.date} className="form-control" />
                                        <span>{blogInput.error_list.date}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <textarea  name="description" onChange={handleInput} value={blogInput.descrip} className="form-control" />
                                        <span>{blogInput.error_list.description}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default CreateBlogs;