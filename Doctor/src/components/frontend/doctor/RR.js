import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';

function RR() {
    return (

        <div>
        <Navbar/>
        <div className="container">
	<div className="card">
	    <div className="card-body">
	        <div className="row">
        	    <div className="col-md-2">
        	        {/* <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/> */}
        	        <p className="text-secondary text-center"></p>
        	    </div>
        	    <div className="col-md-10">
        	        <p>
        	            <Link className="float-left" to="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>BISHWAGIT DAS</strong></Link>
        	            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                        <span className="float-right"><i className="text-warning fa fa-star"></i></span>
        	            <span className="float-right"><i className="text-warning fa fa-star"></i></span>
        	            <span className="float-right"><i className="text-warning fa fa-star"></i></span>

        	       </p>
        	       <div className="clearfix"></div>
        	        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        	        <p>
        	            <Link className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply"></i> Reply</Link>
        	            <Link className="float-right btn text-white btn-danger"> <i className="fa fa-heart"></i> Like</Link>
        	       </p>
        	    </div>
	        </div>
	        	
            <div className="card card-inner">
            	    <div className="card-body">
            	        <div className="row">
                    	    <div className="col-md-2">
                    	        {/* <img  src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/> */}
                    	        <p className="text-secondary text-center"></p>
                    	    </div>
                    	    <div className="col-md-10">
                    	        <p><Link to=""><strong>BISHWAGIT DAS</strong></Link></p>
                    	        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    	        <p>
                    	            <Link className="float-right btn btn-outline-primary ml-2">  <i className="fa fa-reply"></i> Reply</Link>
                    	            <Link className="float-right btn text-white btn-danger"> <i className="fa fa-heart"></i> Like</Link>
                    	       </p>
                    	    </div>
            	        </div>
            	    </div>
	            </div>
                <div className="card card-inner">
            	    <div className="card-body">
            	        <div className="row">
                    	    <div className="col-md-2">
                    	        {/* <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/> */}
                    	        <p className="text-secondary text-center"></p>
                    	    </div>
                    	    <div className="col-md-10">
                    	        <p><Link to="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>BISHWAGIT DAS</strong></Link></p>
                    	        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    	        <p>
                    	            <Link className="float-right btn btn-outline-primary ml-2">  <i className="fa fa-reply"></i> Reply</Link>
                    	            <Link className="float-right btn text-white btn-danger"> <i className="fa fa-heart"></i> Like</Link>
                    	       </p>
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
export default RR;