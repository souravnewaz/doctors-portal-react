import axios from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import { useHistory } from 'react-router-dom';

function Signup(){

    const history = useHistory();
    const [signupInput, setSignup] = useState({
        name:'',
        email:'',
        password:'',
        title:'',
        address:'',
        country:'',
        error_list: [],
    });

    const handelInput = (e) =>{
        e.persist();
        setSignup({...signupInput, [e.target.name]: e.target.value   });
    }
    const signupSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name: signupInput.name,
            email: signupInput.email,
            password: signupInput.password,
            title: signupInput.title,
            address: signupInput.address,
            country: signupInput.country,

        }
        axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post('/api/signup',data).then(response =>{

            if(response.data.status === 200)
            {
                localStorage.setItem('auth_token',response.data.token);
                localStorage.setItem('auth_token',response.data.username);
                swal("Success",response.data.message,"success");
                history.push('/login');

            }
            else
            {
                setSignup({...signupInput, error_list: response.data.validation_errors});

            }

        });
    }); 
        
    }
    return(
        
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>SignUp</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={signupSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="" name="name" onChange={handelInput} value={signupInput.name} className="form-control"  />
                                        <span>{signupInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email ID</label>
                                        <input type="" name="email" onChange={handelInput} value={signupInput.email} className="form-control"  />
                                        <span>{signupInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="" name="password" onChange={handelInput} value={signupInput.password} className="form-control"  />
                                        <span>{signupInput.error_list.password}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Title</label>
                                        <input type="" name="title" onChange={handelInput} value={signupInput.title} className="form-control"  />
                                        <span>{signupInput.error_list.title}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="" name="address" onChange={handelInput} value={signupInput.address}  className="form-control"  />
                                        <span>{signupInput.error_list.address}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Country</label>
                                        <input type="" name="country" onChange={handelInput} value={signupInput.country} className="form-control" />
                                        <span>{signupInput.error_list.country}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Signup</button>
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
export default Signup;