// import '../index.css';
import UserNav from '../UserNav.js';
import { Redirect } from "react-router-dom";

function Home() {
  if(sessionStorage.getItem('user') == null) {
    return <Redirect to = "/login" />
  } else{
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