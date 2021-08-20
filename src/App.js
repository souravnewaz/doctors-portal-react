import './index.css';
import Home from './pages/Home';
// import Nav from './Nav';
import Blogs from './pages/Blogs';
import Doctors from './pages/Doctors';
import Questions from './pages/Questions';
import Users from './pages/Users';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Logout from './Logout';
import Profile from './pages/Profile';
import Doctor from './pages/Doctor';
import Appointments from './pages/Appointments';



function App() {
  return (
    
    <Router>
      <div className="App">
          
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/appointments" exact component={ Appointments } />
          <Route path="/blogs" exact component={ Blogs } />
          <Route path="/questions" exact component={ Questions } />
          <Route path="/doctors" exact component={ Doctors } />
          <Route path="/doctor/:id" exact component={ Doctor } />
          <Route path="/users" exact component={ Users } />
          <Route path="/profile" exact component={ Profile } />
          <Route path="/login" exact component = { Login } />
          <Route path="/logout" exact component = { Logout } />
          <Route path="/signup" exact component = { Signup } />
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
