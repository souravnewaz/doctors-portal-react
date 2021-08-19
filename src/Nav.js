// import '../App.css';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";



function Nav() {
  const logout =() => {
    sessionStorage.removeItem('user');
    return <Redirect to = "/login"/>
  }
    

  if(sessionStorage.getItem('user')){
    var getUser = sessionStorage.getItem('user');
    var user_data = JSON.parse(getUser);
    if(user_data.user_type === 'admin' ){
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
              
              <Link to="/users">
                <li class="px-2">Users</li>
              </Link>
              <li class="px-2">
                <button onClick={logout()}>Logout</button>
              </li>
              <li>
                { user_data.user_type}
              </li>
                
              
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
              <li class="px-2">
                <button onClick={logout()}>Logout</button>
              </li>
              <li>
                { user_data.user_type}
              </li>
            </ul>
          </div>
            
            
        </nav>
      );
    }
  } else {
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
            <Link to="/users">
              <li class="px-2">Users</li>
            </Link>
            <Link to="/login">
              <li class="px-2">Login</li>
            </Link>
            
            {/* <li class="px-2">
              <button onClick={logout()}>Logout</button>
            </li> */}
          </ul>
        </div>
          
          
      </nav>
    );
  }
  
}

export default Nav;
