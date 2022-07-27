import React from 'react';
import axios from 'axios';
import {  useContext  } from 'react';

import {useEffect, useState} from 'react';
import Logout from "../log-out";


import { UserContext } from '../../context/user.context';

const Dashboard=()=>{
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser)
    

    const [details, setDetails] = useState('');


    
    const config ={
        headers:{
            Authorization: "Bearer " + localStorage.getItem("ticket"),
        }
    }
    // page load hune bela mai
    useEffect(()=>{
        axios.get("http://localhost:300/users/dashboard",config)
        .then(response=>{
            setDetails(response.data)
            console.log("-----------------------",response)
        })
        .catch(e=>{
            console.log(e);
        })
    },[])

    return(
        <div className="container bg-primary">
            <div className="row">
                <div className="col-md-4">
                    {details}
                    {/* <h1> Dashboard</h1>
                    <p>Full Name  : {currentUser.displayName} </p>
                    <p>Email: {currentUser.email} </p>
                    <p>PhoneNumber: {currentUser.phoneNumber} </p> */}

                    <div>
                        <button>Update</button>
                        <button onClick={Logout}>Logout</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;