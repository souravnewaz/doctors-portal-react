import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";

import UserNav from "../UserNav";

function Doctor(props) {
  const doctor_id = props.match.params.id;
  const [doctor, setDoctor] = useState('');
  const [doctors, setDoctors] = useState([])
  
  
  const [date, setDate] = useState('');


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/doctors/${doctor_id}`)
    .then(res => {
        console.log(res)
        setDoctors(res.data)
        setDoctor(res.data.full_name)
    })
    .catch(err => {
        console.log(err)
    })
}, [])
  


const handleSubmit = (e) => {
  e.preventDefault();
  const appointment = { doctor, user, date };
  fetch('http://127.0.0.1:8000/api/appointment', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(appointment)
  }).then(() => {
    console.log(appointment);
      console.log('Appointment Created Successfully');
  })
  
}

sessionStorage.getItem('user');
    var getUser = sessionStorage.getItem('user');
    var user_data = JSON.parse(getUser);
    var user_email = user_data.email;
    const [user, setUser] = useState(user_email);
    
return (
  <div class="">
    <UserNav/> 
  <div class="flex justify-center ">
    
        
    <div>      
      <div class="text-center mt-5 mb-5 ">
          {/* <h1 class="text-3xl font-bold">Doctor {props.match.params.id} Here</h1> */}
          <h1 class="text-3xl font-bold mb-5">Doctor Profile</h1>
          <div class="bg-white rounded shadow p-3">
            
            <p class="text-2xl font-bold">{doctors.full_name}</p>
            <p>{doctors.title}</p>
            <p>Contact Information:</p>
            <p>Email: {doctors.email}</p>
            <p>Phone: {doctors.phone}</p>
            <p>Chamber: {doctors.chamber}, {doctors.city}, {doctors.country} </p>
          </div>
          
          
        </div> 
        <div class="p-5 text-center" >
      <h1 class="text-gray-600 font-bold text-2xl">Make an Appointment</h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {handleSubmit}>
        <div class="mb-4">
          <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="full_name">
            Doctor Name
          </label>
          <input 
            type="text" 
            name="doctor" 
            placeholder="Doctor Name"
            value = {doctors.full_name}
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"             
         />
        </div>

        

        <div class="mb-4">
          <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="email">
            Your Email
          </label>
          <input
            type="text"
            name="user"
            placeholder="Email"
            value = { user_email }
            required
            
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"          
          />
        </div>

        <div class="mb-4">
          <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="date">
            Select Data
          </label>
          <input
            type="datetime-local" 
            id="date" 
            name="date" 
            onChange = {(e) => setDate(e.target.value)}
            required 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           />
          
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Make An Appointment
          </button>
        </div>
        
        </form>
      </div>      
        </div>     
      </div>
  </div>
  
  
  
);
}

export default withRouter(Doctor);
// export default Doctor;
