// import '../App.css';
import { Link } from 'react-router-dom';
// import  { useState } from 'react';




function UserNav() {   
  
  if(sessionStorage.getItem('user') == null){
    return (
  
      <nav  class="bg-blue-400 text-white p-5 flex justify-evenly">
        <div>
          <Link to="/">
            <h3>Doctors Portal</h3>
          </Link>
          
        </div>
        <div>
          <ul class="flex flex-wrap">
          <Link to="/blogs">
              <li class="px-2">Blogs</li>
          </Link>
          <Link to="/questions">
          <li class="px-2">Questions</li>
          </Link>
          <Link to="/doctors">
          <li class="px-2">Doctors</li>
          </Link>
          <Link to="/profile">
          <li class="px-2">Profile</li>
          </Link>            
          <Link to="/login">
          <li class="px-2">Login</li>
          </Link>
          </ul>
        </div>
      </nav>
    );
  } else{
    return (
  
      <nav  class="bg-blue-400 text-white p-5 flex justify-evenly">
        <div>
          <Link to="/">
            <h3>Doctors Portal</h3>
          </Link>
          
        </div>
        <div>
          <ul class="flex flex-wrap">
          <Link to="/blogs">
              <li class="px-2">Blogs</li>
          </Link>
          <Link to="/questions">
          <li class="px-2">Questions</li>
          </Link>
          <Link to="/doctors">
          <li class="px-2">Doctors</li>
          </Link>
          <Link to="/profile">
          <li class="px-2">Profile</li>
          </Link>
          
          <Link to="/logout">
          <li class="px-2">Logout</li>
          </Link>
          </ul>
        </div>
          
          
      </nav>
    );
  }
  
  
      
  
  
}

export default UserNav;
