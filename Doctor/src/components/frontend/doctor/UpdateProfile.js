import axios from 'axios';
import { useForm } from "react-hook-form";
// import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import { useHistory } from 'react-router-dom';


function UpdateProfile() {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [profileInput, setProfileInput] = useState([]);
    // const [error,] = useState([]);
    const { register, handleSubmit } = useForm();
    const user_name = localStorage.getItem('auth_name');

    useEffect(()=>{
        
        axios.get(`/api/getProfile/${user_name}`).then(response =>{

            setProfileInput(response.data[0]);
            // console.log("profieIn",response.data[0]);
            // if(response.data.status === 200)
            // {
            //     setProfileInput(response.data.user);
            // }
            // else if(response.data.status === 404)
            // {
            //     swal("error",response.data.message,"error");
            //     history.push('/doctor/blogs/viewlog');
            // }
            setLoading(false);

        });
    },[user_name,history]);
    const onSubmit = (data) => {
        console.log(data);
        console.log(profileInput);
        
       
        axios.put(`/api/updateProfile/${user_name}`,data)
        .then(response =>{
            console.log(response);
            // if(response.data.status === 200)
            // {
            //     swal("Success",response.data.message,"success");
            //     setError([]);
            // }
            // else if(response.data.status === 420)
            // {
            //     swal("All fields are Mandetory","","error");
            //     setError(response.data.errors);
            // }
            // else if(response.data.status === 404)
            // {
            //     swal("error",response.data.message,"error");
            //     history.push('doctor/blogs/viewblog');
            // }

        });

        }

    
    const handleInput = (e) =>{
        e.persist();
        setProfileInput({...profileInput, [e.target.name]: e.target.value   });
    }
    // const onSubmit= (data)=>{
    //     console.log(data);
    //     console.log(profileInput);

        // e.preventDefault();
        // const user_name= props.match.params.name;
        // const data = profileInput; 
        // axios.put(`/api/updateProfile/${user_name}`,data).then(response =>{
        //     if(response.data.status === 200)
        //     {
        //         swal("Success",response.data.message,"success");
        //         setError([]);
        //     }
        //     else if(response.data.status === 420)
        //     {
        //         swal("All fields are Mandetory","","error");
        //         setError(response.data.errors);
        //     }
        //     else if(response.data.status === 404)
        //     {
        //         swal("error",response.data.message,"error");
        //         history.push('doctor/blogs/viewblog');
        //     }

        // });
    // } 


    if(loading)
    {
        return <h1>Loading Editblog...</h1>
    }
    return (

     <div>
     <Navbar />
     <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Edit Profile</h1>
                            </div>
                            <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="text" {...register("name", { required: true })} name="name"  onChange={handleInput} value={profileInput.name} className="form-control"  />
                                        {/* <span>{errors.name}</span> */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email ID</label>
                                        <input type="email" {...register("email", { required: true })} name="email"  onChange={handleInput} value={profileInput.email}  className="form-control"  />
                                        {/* <span>{error.email}</span> */}
                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" {...register("password", { required: true })} name="password" onChange={handleInput} value={profileInput.password}  className="form-control"  />
                                        <span>{error.password}</span>
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <label>Title</label>
                                        <input type="title" {...register("title", { required: true })} name="title"  onChange={handleInput} value={profileInput.title}  className="form-control"  />
                                        {/* <span>{error.title}</span> */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="address" {...register("address", { required: true })} name="address"  onChange={handleInput} value={profileInput.address}   className="form-control"  />
                                        {/* <span>{error.address}</span> */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Country</label>
                                        <input type="country" {...register("country", { required: true })} name="country" onChange={handleInput} value={profileInput.country}  className="form-control" />
                                        {/* <span>{error.country}</span> */}
                                    </div>
                                    {/* <div className="form-group mb-3">
                                      <label>Image</label>
                                     <input type="file" name="image" className="form-control" />

                                    </div> */}
                                    
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
                  
     </div>
  );
}
  export default UpdateProfile;