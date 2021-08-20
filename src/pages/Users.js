// import logo from './logo.svg';
// // import './App.css';

import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Nav from "../Nav";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users")
    .then(res => {
      //console.log(res)
      setUsers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  if(sessionStorage.getItem('user')){
    // var getUser = sessionStorage.getItem('user');
    // var user_data = JSON.parse(getUser);
    // console.log('retrievedObject: ', user_data.email);

    var getUser = sessionStorage.getItem('user');
    var user_data = JSON.parse(getUser);
    //console.log(user_data.user_type);
    if(user_data.user_type !== 'admin'){
      return <Redirect to = "/login"/>
    } else{
      return (
        <Nav> 
        <div> 
             
            <h1>Users Here</h1> 
            
            {users.map(user => (
                <div class="p-5 bg-gray-100 rounded shadow">
                  <p key = {user.id}> {user.full_name}  </p>
                  <p class=""> {user.email}  </p>
                </div>
                  
              ))}
                  
        </div>

        </Nav>
      );
    }
    //console.log('User Found: ', user_data)
  } else{
    return <Redirect to = "/login"/>
  }
  
}

export default Users;
