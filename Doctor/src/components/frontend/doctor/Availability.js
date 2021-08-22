import axios from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import { useHistory } from 'react-router-dom';

function Availability() {

    const history = useHistory();
    const [addInput, setAdd] = useState({
        sunday:'',
        monday:'',
        tuesday:'',
        wednesday:'',
        thursday:'',
        friday:'',
        saturday:'',
        
    });

    const handelInput = (e) =>{
        e.persist();
        setAdd({...addInput, [e.target.name]: e.target.value   });
    }
    const addSubmit = (e) =>{
        e.preventDefault();
        const data = {
            sunday: addInput.sunday,
            monday: addInput.monday,
            tuesday: addInput.tuesday,
            wednesday: addInput.wednesday,
            thursday: addInput.thursday,
            friday: addInput.friday,
            saturday: addInput.saturday,

        }
        
          axios.post('/api/availability',data).then(response =>{

            if(response.data.status === 200)
            {
                
                swal("Success",response.data.message,"success");
                history.push('/login');

            }
            

        });
    

}
    return (

        <div>
        <Navbar/>
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">     
                    <h1> Availability  </h1>
                </div>
                <div className="card-body">
                <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={addSubmit} >
                                        <div class="form-check">
                                        <input  className="form-check-input" name="sunday" type="checkbox" onChange={handelInput} value={addInput.sunday} />
                                         <label className="form-check-label" for="flexCheckIndeterminate">
                                         Sunday
                                            </label>
                                        </div>
                                        <div class="form-check">
                                        <input className="form-check-input" name="monday" type="checkbox" onChange={handelInput} value={addInput.monday}  />
                                         <label className="form-check-label" for="flexCheckIndeterminate">
                                         Monday
                                            </label>
                                        </div>
                                        <div class="form-check">
                                        <input className="form-check-input" name="tuesday" type="checkbox" onChange={handelInput} value={addInput.tuesday} />
                                         <label className="form-check-label" for="flexCheckIndeterminate">
                                         Tuesday
                                            </label>
                                        </div>
                                        <div class="form-check">
                                        <input className="form-check-input" name="wednesday" type="checkbox" onChange={handelInput} value={addInput.wednesday} />
                                         <label className="form-check-label" for="flexCheckIndeterminate">
                                         Wednesday
                                            </label>
                                        </div>
                                        <div class="form-check">
                                        <input className="form-check-input" name="thursday" type="checkbox" onChange={handelInput} value={addInput.thursday} />
                                         <label className="form-check-label" for="flexCheckIndeterminate">
                                         Thursday
                                            </label>
                                        </div>
                                        <div class="form-check">
                                        <input className="form-check-input" name="friday" type="checkbox" onChange={handelInput} value={addInput.friday}  />
                                         <label className="form-check-label" for="flexCheckIndeterminate">
                                         Friday
                                            </label>
                                        </div>
                                        <div class="form-check">
                                        <input className="form-check-input" name="saturday" type="checkbox" onChange={handelInput} value={addInput.saturday}  />
                                         <label className="form-check-label" for="flexCheckIndeterminate">
                                         Saturday
                                            </label>
                                        </div>
                                        <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary float-end">Submit</button>
                                        </div>
                                        
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                </div>
               
                </div>
            </div>


        </div>
        
        </div>
    );
}
export default Availability;