import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function QuestionDetails(props) {

    const history = useHistory();
    // const[loading,setLoading]=useState(true);
    const[questionInput,setQuestion]=useState([]);
    // const[error,setError]=useState([]);
    // const question_id = localStorage.getItem('auth_token')


    useEffect(()=>{

        const question_id = props.match.params.id;
        
        axios.get(`/api/getQuestion/${question_id}`).then(response =>{
            if(response.data.status === 200)
            {
                setQuestion(response.data.question);
            }
            else if(response.data.status === 404)
            {
                swal("error",response.data.message,"error");
                history.push('/doctor/blogs/viewlog');
            }
            // setLoading(false);

        });
    },[props.match.params.id,history]);

    const handleInput = (e) =>{
        e.persist();
        setQuestion({...questionInput, [e.target.name]: e.target.value   });
    }
    return (

        <div>
            <Navbar />

            <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h1>  Question
                    <Link to="/doctor/comment" className="btn btn-success btn-sm float-end ">View Comment</Link>
            
                    </h1>


                </div>
                <div className="card-body">
                <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h1>Answer Question</h1>
                                    </div>
                                    <div className="card-body">
                                        <form >
                                            {/* <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Question</label>
                                                <input type="text" name="question"  className="form-control" />
                                            </div> */}
                                            <div className="mb-3">
                                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                                <textarea className="form-control" onChange={handleInput} value={questionInput.question} id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <div className="form-group mb-3">
                                                <button type="submit" className="btn btn-primary">Reply</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                </div>
               
                </div>


            </div>


        </div>
    </div>
         
    );
}
export default QuestionDetails;