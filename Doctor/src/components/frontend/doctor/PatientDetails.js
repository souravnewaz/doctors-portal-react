import React from 'react';

import Navbar from '../../../layouts/frontend/Navbar';

function PatientDetails() {
    return (

        <div>
        <Navbar/>
        <h1> patient Details </h1>
        <div className="card">
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body">
    <h5 className="card-title">Name: Bishwagit</h5>
    <h5 className="card-title">Email: bishwagit@gmail.com</h5>
    <h5 className="card-title">DOB: 02/12/1998</h5>
    <h5 className="card-title">Phone: O1703030348</h5>
    <h5 className="card-title">Address: Dhaka</h5>
    <h5 className="card-title">Country: Bangladesh</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
  {/* <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul> */}
  <div className="card-body">
      
  </div>
</div>
        </div>
    );
}
export default PatientDetails;