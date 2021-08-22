import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory();

  



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const user = {email, password}
  //   fetch('http://127.0.0.1:8000/api/login',{
  //     method: 'POST',
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(user)
  //   }). then((response) => {
  //     //console.log(response.status)
  //     if(response.status === 200) {
        
  //       console.log(data.email)
  //       console.log('Login Successful')
  //     } else{
  //       //console.log(response)
  //       console.log('Login Failed')
  //     }
  //   })
  // }

  const handleSubmit = (e) => {
    // POST request using fetch with error handling
    e.preventDefault();
    const user = {email, password}


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch('http://127.0.0.1:8000/api/login', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            } else {
              console.log('Login successful')
              //store user data to session
              var user = new Object();
              user.email = data.email;
              user.user_type = data.user_type;
              sessionStorage.setItem('user', JSON.stringify(user));
              console.log(user)

              
              history.push('/')

              //get session data
              // if(sessionStorage.getItem('user')){
              //   var getUser = sessionStorage.getItem('user');
              //   var user_data = JSON.parse(getUser);
              //   console.log('User Found: ', user_data)
              // }
              // var getUser = sessionStorage.getItem('user');
              // var user_data = JSON.parse(getUser);
              // console.log('retrievedObject: ', user_data);
            }

            
        })
        .catch(error => {
            //console.log( error.toString() );
            console.error('There was an error!', error);
        });
}

  return (
    <div class="flex justify-center">
      
      <div class="p-5 text-center" >
      <h1 class="text-gray-600 font-bold text-2xl">Login</h1>
        <form onSubmit = {handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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

        <div class="mb-4">
          <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="Password">
            Password
          </label>
          <input
            type="password"
            name="password" 
            placeholder="password"
            value = { password }
            onChange = {(e) => setPassword(e.target.value)} 
            required
            
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            
        />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
          <Link to="/signup">
              <p class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">Signup </p>
            </Link>
        </div>
        </form>
      </div>      
    </div>      
            
  );
}

export default Login;