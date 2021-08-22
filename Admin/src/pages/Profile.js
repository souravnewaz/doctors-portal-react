// import logo from './logo.svg';
// import './App.css';
// import {  Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'
import UserNav from "../UserNav";

function Profile() {
    const [user, setUser] = useState('');
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    


    if(sessionStorage.getItem('user')){
          var getUser = sessionStorage.getItem('user');
          var user_data = JSON.parse(getUser);
          //console.log('User Found: ', user_data.email)
          var user_email = user_data.email;
        //   console.log(user_email)
        }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/users/${user_email}`)
        .then(res => {
            // console.log(res.full_name)
            setUser(res.data)
            setFullName(res.data.full_name)
            setEmail(res.data.email)
            //console.log(res.data)
            // console.log('data:',res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user_details = {full_name, email };
        fetch(`http://127.0.0.1:8000/api/users/${user_email}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user_details)
        }).then(() => {
            console.log('Successfully Updated');
            var updatedUser = new Object();
            updatedUser.email = email;
            updatedUser.user_type = 'user';
            sessionStorage.setItem('user', JSON.stringify(updatedUser));
            
        })
        
    }

    function updateUser(){
        console.warn(full_name, email);
    }

    return (
        <div>
        <UserNav/> 
        <div class="flex justify-center">                        
        <div>      
            <div class="text-center mt-5 mb-5 text-xl font-bold ">
                <h1 class="">Profile Here</h1>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit = {handleSubmit}>

                    <div class="mb-4">
                    <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="full_name">
                        Full Name
                    </label>
                    <input 
                        type="text" 
                        name="full_name" 
                        placeholder="Full Name"
                        value = { full_name }
                        onChange = {(e) => setFullName(e.target.value)}
                        required
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"             
                    />
                    </div>

                    <div class="mb-4">
                    <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value = { email }
                        onChange = {(e) => setEmail(e.target.value)}
                        required
                        
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"          
                    />
                    </div>

                    
                    <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update
                    </button>
                    </div>
                    
                    </form>
            </div>      
            </div>
        </div>
        </div>
        
        
    );
}

export default Profile;
