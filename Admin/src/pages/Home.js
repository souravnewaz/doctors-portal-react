// import '../index.css';
import UserNav from '../UserNav.js';
import { Redirect } from "react-router-dom";
import Nav from '../Nav.js';

function Home() {
  if(sessionStorage.getItem('user')){
    var getUser = sessionStorage.getItem('user');
    var user_data = JSON.parse(getUser);
    var user_type = user_data.user_type;
  }
  
  if(sessionStorage.getItem('user') == null) {
    return <Redirect to = "/login" />
  } else if(user_type === 'admin'){
    return (
      <div>
      <Nav/> 
      <div class="flex justify-center">            
        <div>      
          <div class="text-center mt-5 mb-5 text-3xl font-bold">
            <h1 class="">Admin Home Page</h1>
            </div>      
          </div>
      </div>
    </div>
      
    );
  }else{
    
    return (
      <div>
      <UserNav/> 
      <div class="flex justify-center">            
        <div>      
          <div class="text-center mt-5 mb-5 text-3xl font-bold">
            <h1 class="">Home Page</h1>
            </div>      
          </div>
      </div>
    </div>
      
    );
  }
  // sessionStorage.getItem('user');
  //   var getUser = sessionStorage.getItem('user');
  //   var user_data = JSON.parse(getUser);
  //   console.log(user_data);
  
}

export default Home;