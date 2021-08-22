import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';


function Appointment() {

    
        const[loading,setLoading]=useState(true);
        const[appointmentlist,setAppointmentlist]=useState([]);
    
        useEffect(()=>{
    
            axios.get(`/api/viewappointment`).then(response=>{
                // console.log(response.data.appointment);
                if(response.data.status === 200)
                {
                    setAppointmentlist(response.data.appointment)
    
                }
                setLoading(false);
                
                
            });
    
        }, []);
    
        const deleteAppointment= (e,id)=>{
            e.preventDefault();
            const thisClicked = e.currentTarget;
            thisClicked.innerText = "Deleting";
    
            axios.delete(`/api/deleteAppointment/${id}`).then(response =>{
                if(response.data.status === 200)
                {
    
                    swal("Success",response.data.message,"success");
                    thisClicked.closest("tr").remove();
                }
                else if(response.data.status === 404)
                {
                   thisClicked.innerText = "Deleting";
    
                }
    
            });
    
        }
    
        var viewappointmentlist_TABLE= "";

        if(loading)
        {
    
            return <h1>Loading AppointmentList...</h1>
    
        }
    
        else
        {
            viewappointmentlist_TABLE=
            appointmentlist.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>
                            <Link to="/doctor/patientdetails" className="btn btn btn-info btn-sm">Details</Link>
                            <Link to="/" className="btn btn btn-primary btn-sm">Accept</Link>
                            <button type="button" onClick={ (e)=> deleteAppointment(e,item.id) } className="btn btn btn-danger btn-sm"> Reject </button>
                        </td>
                        
                    </tr>
                )
    
            });
    
        }


    return (

        <div>
        <Navbar />

        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h1> Appointment List
                   
                    </h1>


                </div>
                <div className="card-body">

                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {viewappointmentlist_TABLE}

                            </tbody>
                        </table>              

                </div>

            </div>

        </div>
    </div>
    );
}
export default Appointment;