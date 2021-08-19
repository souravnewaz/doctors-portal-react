import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router,Link } from 'react-router-dom';

import UserNav from "../UserNav";

function Doctors() {
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/doctors")
    .then(res => {
        console.log(res)
        setDoctors(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])
  if(sessionStorage.getItem('user') == null) {
    return <Redirect to = "/login" />
  } else{

  
    return (
      <div>
        <UserNav/> 
      <div class="flex justify-center">
            
        <div>      
          <div class="text-center mt-5 mb-5 ">
              <h1 class="text-3xl font-bold">Doctors Here</h1>
              {doctors.map(doctor => (
                      <div class="p-5 bg-gray-100 rounded shadow">
                        <a href={"/doctor/"+doctor.id}>
                          <p key = {doctor.id}> {doctor.full_name}  </p>
                          <p class=" font-bold"> {doctor.email}  </p>                          
                        </a>
                      </div>              
                    ))}
            </div>      
          </div>
      </div>
      </div>
      
      
    );
  }
}

export default Doctors;
