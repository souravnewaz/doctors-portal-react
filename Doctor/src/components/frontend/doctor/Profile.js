import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import { useHistory } from 'react-router-dom';


function Profile() {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [profileInput, setProfileInput] = useState([]);
    const [, setError] = useState([]);
    // console.log(profileInput);
    useEffect(() => {
        // const user_id = props.match.params.id;
        const user_name = localStorage.getItem('auth_name');
        axios.get(`/api/getprofile/${user_name}`)
        .then(response => {
            // console.log(response)
            
            setProfileInput(response.data[0]);
            console.log(response.data[0]);
            // if (response.status === 200) {
            //     // setProfileInput(response.data);
            //     // console.log(profileInput);
            // }
            // else if (response.data.status === 404) {
            //     swal("error", response.data.message, "error");
            //     history.push('/doctor/profile');
            // }


            setLoading(false);
        })
    }, [history]);

    const handleInput = (e) => {
        e.persist();
        setProfileInput({ ...profileInput, [e.target.name]: e.target.value });
    }
    const updateProfile = (e) => {
        e.preventDefault();
        // const user_id = props.match.params.id;
        const data = profileInput;
        axios.put(`/api/updateprofile`, data).then(response => {
            if (response.data.status === 200) {
                swal("Success", response.data.message, "success");
                setError([]);
            }
            else if (response.data.status === 422) {
                swal("All fields are Mandetory", "", "error");
                setError(response.data.errors);
            }
            else if (response.data.status === 404) {
                swal("error", response.data.message, "error");
                history.push('doctor/profile');
            }

        });
    }


    if (loading) {
        return <h1>Loading Profile...</h1>
    }


    return (

        <div>
            <Navbar />
            <div className="container px-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h1> Doctor Profile
                            
                            <Link to="/doctor/updateprofile" className="btn btn-primary btn-sm float-end ">Edit Profile</Link>
                        </h1>

                    </div>
                    <div className="card-body">

                        <div className="container py-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h1>Profile</h1>

                                            {/* {profileInput && <h1>{profileInput}</h1>} */}
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={updateProfile} >
                                                <div className="form-group mb-3">
                                                    <label>Name</label>
                                                    <input type="text" name="name" onChange={handleInput} value={profileInput.name} className="form-control" />
                                                    {/* <span>{error.name}</span> */}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Email ID</label>
                                                    <input type="text" name="email" onChange={handleInput} value={profileInput.email} className="form-control" />
                                                    {/* <span>{error.email}</span> */}
                                                </div>
                                                {/* <div className="form-group mb-3">
                                                    <label>Password</label>
                                                    <input type="password" name="password" onChange={handleInput} value={profileInput.password} className="form-control" />
                                                    <span>{error.password}</span>
                                                </div> */}
                                                <div className="form-group mb-3">
                                                    <label>Title</label>
                                                    <input type="text" name="title" onChange={handleInput} value={profileInput.title} className="form-control" />
                                                    {/* <span>{error.title}</span> */}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Address</label>
                                                    <input type="text" name="address" onChange={handleInput} value={profileInput.address} className="form-control" />
                                                    {/* <span>{error.address}</span> */}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Country</label>
                                                    <input type="text" name="country" onChange={handleInput} value={profileInput.country} className="form-control" />
                                                    {/* <span>{error.country}</span> */}
                                                </div>
                                                {/* <div className="form-group mb-3">
                                                    <label>Image</label>
                                                    <input type="file" name="image" className="form-control" />

                                                </div> */}

                                                {/* <div className="form-group mb-3">
                                                    <button type="submit" className="btn btn-primary">Update</button>
                                                </div> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
}
export default Profile;