// import axios from 'axios';
// import swal from 'sweetalert';
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../../layouts/frontend/Navbar';
// import { useHistory } from 'react-router-dom';


// function Test() {

//     const history = useHistory();
//     const[loading,setLoading]=useState(false);
//     const[profileInput,setProfile]=useState([]);
//     const[error,setError]=useState([]);
//     // const user_name = props.match.params.name;
//     const user_name = localStorage.getItem('auth_name');
    

//     useEffect(()=>{
        
        
//         axios.get(`/api/edittest/${user_name}`).then(response =>{
            
//             if(response.data.status === 200)
//             {
//                 setProfile(response.data.user);
//             }
//             else if(response.data.status === 404)
//             {
//                 swal("error",response.data.message,"error");
//                 history.push();
//             }
//             setLoading(false);

//         });
//     },[user_name,history]);

//     const handleInput = (e) =>{
//         e.persist();
//         setProfile({...profileInput, [e.target.name]: e.target.value });
//     }
//     const updateProfile= (e)=>{
//         e.preventDefault();
//         const data = profileInput;
         
//         axios.put(`/api/updatetest/${user_name}`,data).then(response =>{
//             if(response.data.status === 200)
//             {
//                 swal("Success",response.data.message,"success");
//                 setError([]);
//             }
//             else if(response.data.status === 420)
//             {
//                 swal("All fields are Mandetory","","error");
//                 setError(response.data.errors);
//             }
//             else if(response.data.status === 404)
//             {
//                 swal("error",response.data.message,"error");
//                 history.push('');
//             }

//         });
//     } 


//     if(loading)
//     {
//         return <h1>Loading Editblog...</h1>
//     }

//     return (

//         <div>
//         <Navbar/>
//         <div>
//             <div className="container py-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h1>Edit Profile</h1>
//                             </div>
//                             <div className="card-body">
//                             <form onSubmit={updateProfile}>
//                                     <div className="form-group mb-3">
//                                         <label>Full Name</label>
//                                         <input type="text"  name="name"  onChange={handleInput} value={profileInput.name} className="form-control"  />
//                                         <span>{error.name}</span>
//                                     </div>
//                                     <div className="form-group mb-3">
//                                         <label>Email ID</label>
//                                         <input type="email" name="email"  onChange={handleInput} value={profileInput.email}  className="form-control"  />
//                                         <span>{error.email}</span>
//                                     </div>
//                                     {/* <div className="form-group mb-3">
//                                         <label>Password</label>
//                                         <input type="password" {...register("password", { required: true })} name="password" onChange={handleInput} value={profileInput.password}  className="form-control"  />
//                                         <span>{error.password}</span>
//                                     </div> */}
//                                     <div className="form-group mb-3">
//                                         <label>Title</label>
//                                         <input type="title" name="title"  onChange={handleInput} value={profileInput.title}  className="form-control"  />
//                                         <span>{error.title}</span>
//                                     </div>
//                                     <div className="form-group mb-3">
//                                         <label>Address</label>
//                                         <input type="address" name="address"  onChange={handleInput} value={profileInput.address}   className="form-control"  />
//                                         <span>{error.address}</span>
//                                     </div>
//                                     <div className="form-group mb-3">
//                                         <label>Country</label>
//                                         <input type="country" name="country" onChange={handleInput} value={profileInput.country}  className="form-control" />
//                                         <span>{error.country}</span>
//                                     </div>
//                                     {/* <div className="form-group mb-3">
//                                       <label>Image</label>
//                                      <input type="file" name="image" className="form-control" />

//                                     </div> */}
                                    
//                                     <div className="form-group mb-3">
//                                         <button type="submit" className="btn btn-primary">Update</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         </div>
//     );
// }
// export default Test;