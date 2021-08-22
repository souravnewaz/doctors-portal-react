import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';

function Question() {
    
        
        const[loading,setLoading]=useState(true);
        const[questionlist,setQuestionlist]=useState([]);
    
        useEffect(()=>{
    
            axios.get(`/api/questionlist`).then(response=>{
                console.log(response.data.appointment);
                if(response.data.status === 200)
                {
                    setQuestionlist(response.data.question)
    
                }
                setLoading(false);
                
                
            });
    
        }, []);
    
        const deleteQuestion= (e,id)=>{
            e.preventDefault();
            const thisClicked = e.currentTarget;
            thisClicked.innerText = "Deleting";
    
            axios.delete(`/api/deletequestion/${id}`).then(response =>{
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
    
        var viewquestionlist_TABLE= "";

        if(loading)
        {
    
            return <h1>Loading QuestionList...</h1>
    
        }
    
        else
        {
            viewquestionlist_TABLE=
            questionlist.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.date}</td>
                        <td>{item.question}</td>
                        <td>
                            <Link to="/doctor/questiondetails" className="btn btn btn-info btn-sm">Details</Link>
                            <button type="button" onClick={ (e)=> deleteQuestion(e,item.id) } className="btn btn btn-danger btn-sm">Delete</button>
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
                    <h1> Question List
                    {/* <Link to="/doctor/blogs/createblog" className="btn btn-success btn-sm float-end ">Accept</Link> */}
                   
                    </h1>


                </div>
                <div className="card-body">

                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>date</th>
                                    <th>Question</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {viewquestionlist_TABLE}

                            </tbody>
                        </table>              

                </div>

            </div>

        </div>
    </div>
    );

        
}
export default Question;