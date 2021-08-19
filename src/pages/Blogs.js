import '../index.css';
import UserNav from '../UserNav'
import { Redirect } from "react-router-dom";

function Blogs() {
  if(sessionStorage.getItem('user') == null) {
    return <Redirect to = "/login" />
  } else{
    return (
      <div>
        <UserNav/> 
      <div class="flex justify-center">
             
        <div>      
          <div class="text-center mt-5 mb-5 text-3xl font-bold">
              <h1 class="">Blogs Here</h1>
            </div>      
          </div>
      </div>
      </div>
      
      
    );
  }
  
}

export default Blogs;