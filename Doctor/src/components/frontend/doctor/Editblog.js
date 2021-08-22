import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import { useHistory } from 'react-router-dom';


function Editblog(props) {

    const history = useHistory();
    const[loading,setLoading]=useState(true);
    const[blogInput,setBlog]=useState([]);
    const[error,setError]=useState([]);
    // const blog_id = props.match.params.id;

    useEffect(()=>{

        const blog_id = props.match.params.id;

        axios.get(`/api/editblog/${blog_id}`).then(response =>{
            if(response.data.status === 200)
            {
                setBlog(response.data.blog);
            }
            else if(response.data.status === 404)
            {
                swal("error",response.data.message,"error");
                history.push('/doctor/blogs/viewlog');
            }
            setLoading(false);

        });
    }, [props.match.params.id, history]);

    const handleInput = (e) =>{
        e.persist();
        setBlog({...blogInput, [e.target.name]: e.target.value   });
    }
    const updateBlog= (e)=>{
        e.preventDefault();
        const blog_id = props.match.params.id;
        const data = blogInput; 
        axios.put(`/api/updateblog/${blog_id}`,data).then(response =>{
            if(response.data.status === 200)
            {
                swal("Success",response.data.message,"success");
                setError([]);
            }
            else if(response.data.status === 420)
            {
                swal("All fields are Mandetory","","error");
                setError(response.data.errors);
            }
            else if(response.data.status === 404)
            {
                swal("error",response.data.message,"error");
                history.push('doctor/blogs/viewblog');
            }

        });
    } 


    if(loading)
    {
        return <h1>Loading Editblog...</h1>
    }
    return (

        <div>
        <Navbar/>
        <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Edit Blog</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateBlog}>
                                    <div className="form-group mb-3">
                                        <label>Blog Title</label>
                                        <input type="text" name="title" onChange={handleInput} value={blogInput.title} className="form-control" />
                                        <span>{error.title}</span>
                                       
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Date</label>
                                        <input type="date" name="date" onChange={handleInput} value={blogInput.date} className="form-control" />
                                        <span>{error.date}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <textarea  name="description" onChange={handleInput} value={blogInput.description} className="form-control" />
                                        <span>{error.description}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">UpdatePost</button>
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
export default Editblog;