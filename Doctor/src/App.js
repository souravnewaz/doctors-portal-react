import React from 'react';
import axios from 'axios';
import Protected from './Protected';
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';
// import MasterLayout from './layouts/doctor/MasterLayout';
// import Doctor_portal from './components/frontend/Doctor_portal';
import Login from './components/frontend/auth/Login';
import Signup from './components/frontend/auth/Signup';
import Profile from './components/frontend/doctor/Profile';
import UpdateProfile from './components/frontend/doctor/UpdateProfile';
import Wallet from './components/frontend/doctor/Wallet';
import Question from './components/frontend/doctor/Question';
import Viewblog from './components/frontend/doctor/Viewblog';
import Editblog from './components/frontend/doctor/Editblog';
import Blog from './components/frontend/doctor/Blog';
import CreateBlogs from './components/frontend/doctor/CreateBlogs';
import Appointment from './components/frontend/doctor/Appointment';
import QuestionDetails from './components/frontend/doctor/QuestionDetails';
import PatientDetails from './components/frontend/doctor/PatientDetails';
import Dashboard from './components/frontend/doctor/Dashboard';
import Availability from './components/frontend/doctor/Availability';
import RR from './components/frontend/doctor/RR';
// import Test from './components/frontend/doctor/Test';
import Comment from './components/frontend/doctor/Comment';
// import Widthdraw from './components/frontend/doctor/Widthdraw';



axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;

});

function App() {
  return (
    <div className="App">
      
     <Router>
       <Switch>
         {/* <Route exact path="/doctor/portal" component={Doctor_portal} /> */}

         <Route path="/login">
           {localStorage.getItem('auth_token') ? <Redirect to='/doctor/dashboard'/> : < Login /> }
         </Route>
         <Route path="/signup">
           {localStorage.getItem('auth_token') ? <Redirect to='/doctor/dashboard'/> : < Signup /> }
         </Route>
         {/* <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} /> */}
         <Route path="/doctor/dashboard">
           <Protected Cmp={Dashboard}/>
         </Route>
         <Route path="/doctor/profile">
           <Protected Cmp={Profile}/>

         </Route>
         <Route path="/doctor/updateprofile">
           <Protected Cmp={UpdateProfile}/>

         </Route>
         <Route path="/doctor/appointment">
           <Protected Cmp={Appointment}/>

         </Route>
         <Route path="/doctor/wallet">
           <Protected Cmp={Wallet}/>

         </Route>
         <Route path="/doctor/patientdetails">
           <Protected Cmp={PatientDetails}/>

         </Route>
         <Route path="/doctor/question">
           <Protected Cmp={Question}/>

         </Route>
        
         <Route path="/doctor/blog">
           <Protected Cmp={Blog}/>

         </Route>
         <Route path="/doctor/blogs/createblog">
           <Protected Cmp={CreateBlogs}/>

         </Route>
         <Route path="/doctor/blogs/viewblog">
           <Protected Cmp={Viewblog}/>

         </Route>
         <Route path="/doctor/availability">
           <Protected Cmp={Availability}/>

         </Route>
         <Route path="/doctor/reviewrating">
           <Protected Cmp={RR}/>

         </Route>
         {/* <Route path="/doctor/test">
           <Protected Cmp={Test}/>

         </Route> */}
         {/* <Route  path="/doctor/dashboard" component={Dashboard}/> 
         <Route  path="/doctor/profile" component={Profile}/>
         <Route  path="/doctor/editprofile" component={Profile}/>
         <Route  path="/doctor/updateprofile" component={UpdateProfile}/>
         
         <Route  path="/doctor/wallet" component={Wallet}/>
         <Route  path="/doctor/appointment" component={Appointment}/>
         <Route  path="/doctor/patientdetails" component={PatientDetails}/>
         <Route  path="/doctor/question" component={Question}/>
         <Route  path="/doctor/questiondetails" component={QuestionDetails}/>
         <Route  path="/doctor/blog" component={Blog}/>
         <Route  path="/doctor/blogs/createblog" component={CreateBlogs}/>   
         <Route  path="/doctor/blogs/viewblog" component={Viewblog}/> */}
         <Route  path="/doctor/blogs/editblog/:id" component={Editblog}/>
         {/* <Route  path="/doctor/test" component={Test}/>  */}
         <Route  path="/doctor/comment" component={Comment}/>
         <Route  path="/doctor/questiondetails" component={QuestionDetails}/>
         {/* <Route  path="/doctor/widthdraw" component={Widthdraw}/> */}

         


         {/* <Route path="/doctor" name="Doctor" render={(props) => <MasterLayout{...props}/>  }  /> */}
         

       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
