import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';

function Wallet() {
    return (

        <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col-xs-12 col-md-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Wallet
                    </h3>
                    <div className="checkbox pull-right">
                        {/* <label>
                            <input type="checkbox" />
                            Remember
                        </label> */}
                    </div>
                </div>
                <div className="panel-body">
                    <form>
                    <div className="form-group">
                        <label for="cardNumber">
                            Total Balance</label>
                            <div>
                            <label for="cardNumber">
                            10000$</label>
                            </div>
                        {/* <div className="input-group">
                            <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number"
                                required autofocus />
                            <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-xs-7 col-md-7">
                            <div className="form-group">
                                {/* <label for="expityMonth">
                                    EXPIRY DATE</label> */}
                                {/* <div className="col-xs-6 col-lg-6 pl-ziro">
                                    <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                </div>
                                <div className="col-xs-6 col-lg-6 pl-ziro">
                                    <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div> */}
                            </div>
                        </div>
                        {/* <div className="col-xs-5 col-md-5 pull-right">
                            <div className="form-group">
                                <label for="cvCode">
                                    CV CODE</label>
                                <input type="password" className="form-control" id="cvCode" placeholder="CV" required />
                            </div>
                        </div> */}
                    </div>
                    </form>
                </div>
            </div>
            {/* <ul className="nav nav-pills nav-stacked">
                <li className="active"><Link to="/"><span className="badge pull-right"><span className="glyphicon glyphicon-usd"></span>4200</span> Final Payment</Link>
                </li>
            </ul> */}
            <br/>
            {/* <Link to="http://www.jquery2dotnet.com" className="btn btn-success btn-lg btn-block" role="button">Add Money</Link> */}
            <Link to="/doctor/wallet" className="btn btn-success btn-lg btn-block" role="button">Widthdraw</Link>
        </div>
    </div>
</div>

        
	
        </div>
    );
}
export default Wallet;