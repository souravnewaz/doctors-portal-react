import React from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { NavDropdown } from 'react-bootstrap';


function Navbar() {

    // let user = JSON.parse(localStorage.getItem('auth_token'))
    // console.warn(user);


    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(response => {

            if (response.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", response.data.message, "success");
                history.push('/login');
            }

        });
    }

    var AuthButtons = '';

    if (!localStorage.getItem('auth_token')) {

        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link" >Signup</Link>
                </li>
            </ul>

        )

    }
    else {
        AuthButtons = (

            <ul className="navbar-nav ms-auto bg-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/doctor/dashboard" className="nav-link" >Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctor/profile" className="nav-link" >Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctor/blog" className="nav-link" >Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctor/question" className="nav-link" >Q/A</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctor/appointment" className="nav-link" > Appointment</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/doctor/availability" className="nav-link" >Availability</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctor/reviewrating" className="nav-link" >Ratings  Reviews</Link>
                </li>

                <li className="nav-item">
                    <Link to="/doctor/wallet" className="nav-link" >wallet</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/doctor/test" className="nav-link" >Test</Link>
                </li> */}

                
                <li className="nav-item">
                    <NavDropdown title="Action">
                    {/* <NavDropdown title={user && user.name}> */}
                        {/* <NavDropdown.Item onClick={logoutSubmit} >Logout</NavDropdown.Item> */}

                        <NavDropdown.Item>
                        <Link to="/doctor/wallet" className="btn btn-warning" >Deactivate</Link>
                        </NavDropdown.Item>
                       
                        <NavDropdown.Item>
                            
                        <Link to="" onClick={logoutSubmit} className="btn btn-danger" >Logout</Link>
                        
                        </NavDropdown.Item>
                        
                        
                    </NavDropdown>
                </li>
            </ul>

        )

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            <div className="container">
                <Link to="/doctor/dashboard" className="navbar-brand" >Doctor Portal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {AuthButtons}


                    </ul>
                    
                    <div>
                    
                        
                    </div>

                </div>
            </div>
        </nav>

    );

}
export default Navbar;