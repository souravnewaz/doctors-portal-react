import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';


function Viewblog() {
    const[loading,setLoading]=useState(true);
    const[bloglist,setBloglist]=useState([]);

    useEffect(()=>{
        

        axios.get(`/api/viewblog`).then(response=>{
            // console.log(response.data.blog);
            if(response.data.status === 200)
            {
               setBloglist(response.data.blog)

            }
            setLoading(false);
            
            
        });

    }, []);

    const deleteBlog= (e,id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/deleteblog/${id}`).then(response =>{
            if(response.data.status === 200)
            {

                swal("Success",response.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(response.data.status === 404)
            {
               thisClicked.innerText = "Deleting";

            }

        });

    }

    var viewblog_TABLE= "";
    if(loading)
    {

        return <h1>Loading bloglist...</h1>

    }

    else
    {
        viewblog_TABLE=
        bloglist.map( (item) => {
            return(
                <tr key={item.id}>
                     <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>
                        <Link to={`editblog/${item.id}`} className="btn btn btn-primary btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" onClick={ (e)=> deleteBlog(e,item.id) } className="btn btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )

        });

    }

  



    return (
        <div>
            <Navbar />

            <div className="container px-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h1>Doctor BlogList
                        <Link to="/doctor/blogs/createblog" className="btn btn-success btn-sm float-end ">CreateBlog</Link>
                        <Link to="/doctor/blog" className="btn btn-primary btn-sm float-end ">ViewAllBlog</Link>
                        </h1>


                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Blog Title</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {viewblog_TABLE}

                            </tbody>
                        </table>
                        
                    
                

                    </div>


                </div>


            </div>
        </div>



    );
}
export default Viewblog;