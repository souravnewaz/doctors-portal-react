import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Protected(props) {
    let Cmp=props.Cmp
    const history = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('auth_token'))
        {
            history.push('/login')
        }

    },[history])
    return (


        <div>
            <Cmp />
        
        </div>
    );
}
export default Protected ;