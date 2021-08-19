import { Redirect } from "react-router-dom";

function Logout () {
    sessionStorage.clear();
    console.log('log out')
    return(
        <Redirect to = "/login" />
    )
    
}


export default Logout;
