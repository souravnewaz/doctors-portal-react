import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';


function Blog() {

    const[loading,setLoading]=useState(true);
    const[allbloglist,setAllboglist]=useState([]);

    useEffect(()=>{

        axios.get(`/api/viewAllblog`).then(response=>{
            // console.log(response.data.blog);
            if(response.data.status === 200)
            {
                setAllboglist(response.data.blog)

            }
            setLoading(false);
            
            
        });

    }, []);


    var viewAllblog_TABLE= "";
    if(loading)
    {

        return <h1>Loading bloglist...</h1>

    }

    else
    {
        viewAllblog_TABLE=
        allbloglist.map( (item) => {
            return(
                <tr key={item.id}>
                     <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    
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
                    <h1>All Doctor Bloglist
                    <Link to="/doctor/blogs/createblog" className="btn btn-success btn-sm float-end ">Create Blog</Link>
                    <Link to="/doctor/blogs/viewblog" className="btn btn-primary btn-sm float-end ">View My Blog</Link>
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
                                </tr>
                            </thead>
                            <tbody>
                            {viewAllblog_TABLE}
                               

                            </tbody>
                        </table>

               

                </div>


            </div>


        </div>
    </div>
    );
}
export default Blog;