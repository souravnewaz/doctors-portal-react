import React from 'react';
import Navbar from '../../../layouts/frontend/Navbar';

function Comment() {
    return (

        <div>
        <Navbar/>
        <div className="row d-flex justify-content-center">
  <div className="col-md-8 col-lg-6">
    <div className="card shadow-0 border">
      <div className="card-body p-4">
        <div className="form-outline mb-4">
          <input
            type="text"
            id="addANote"
            className="form-control"
            placeholder="Type comment..."
          />
          <br></br>
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
        
        <div className="card mb-4">
          <div className="card-body">
            <p>Type your note, and hit enter to add it</p>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                {/* <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                  alt="avatar"
                  width="25"
                  height="25"
                /> */}
                <p className="small mb-0 ms-2">Bishwagit Das</p>
              </div>
              <div className="d-flex flex-row align-items-center">
                <p className="small text-muted mb-0"></p>
                <i
                  className="far fa-thumbs-up mx-2 fa-xs text-black"
                 
                ></i>
                <p className="small text-muted mb-0"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <p>Type your note, and hit enter to add it</p>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                {/* <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  alt="avatar"
                  width="25"
                  height="25"
                /> */}
                <p className="small mb-0 ms-2">Bishwagit Das</p>
              </div>
              <div className="d-flex flex-row align-items-center">
                <p className="small text-muted mb-0"></p>
                <i
                  className="far fa-thumbs-up mx-2 fa-xs text-black"
                  
                ></i>
                <p className="small text-muted mb-0"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <p>Type your note, and hit enter to add it</p>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                {/* <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                  alt="avatar"
                  width="25"
                  height="25"
                /> */}
                <p className="small mb-0 ms-2">Bishwagit Das</p>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <p className="small mb-0"></p>
                <i className="fas fa-thumbs-up mx-2 fa-xs"></i>
                <p className="small mb-0"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <p>Type your note, and hit enter to add it</p>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                {/* <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  alt="avatar"
                  width="25"
                  height="25"
                /> */}
                <p className="small mb-0 ms-2">Bishwagit Das</p>
              </div>
              <div className="d-flex flex-row align-items-center">
                <p className="small text-muted mb-0"></p>
                <i
                  className="far fa-thumbs-up ms-2 fa-xs text-black"
                 
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
        </div>
    );
}
export default Comment;