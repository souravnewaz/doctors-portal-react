import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
    const [full_name, setFullName] = useState('');


  return (
    <div class="flex justify-center">
      
      <div class="p-5 text-center" >
      <h1 class="text-gray-600 font-bold text-2xl">Signup</h1>
        <form action="" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div class="mb-4">
          <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="full_name">
            Full Name
          </label>
          <input 
            type="text" 
            name="full_name" 
            placeholder="Full Name"
            value = {full_name}
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
            placeholder="Email"
            required
            name="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"          
          />
        </div>

        <div class="mb-4">
          <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="Password">
            Password
          </label>
          <input
            type="password"
            placeholder="password" 
            required
            name="password" 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            
        />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Signup
          </button>
            <Link to="/Login">
              <p class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">Login </p>
            </Link>
        </div>
        </form>
      </div>      
    </div>      
            
  );
}

export default Signup;