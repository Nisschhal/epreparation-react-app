import {useState} from 'react';
import axios from 'axios';
import React from 'react';

const Register= () =>{
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [password, setPasword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone]= useState("");
    const [customer_image, setCust_img] = useState('');
    const [message, setMessage] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        const data = {
          username: username,
          firstname: firstname,
          lastname: lastname,
          age: age,
          email: email,
          password: password,
          customer_image: customer_image,
          phone: phone,
        };
        axios
          .post("http://localhost:90/customer/register", data)
          .then((response) => {
            if(response.data.msg="Registered"){
                setMessage("User registered successfully");
            }
            else{
                setMessage("Failed to register");
            }
            console.log(response);
          })
          .catch()
    }

    return(
        
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <h1>Register</h1>
                
                <p>{message}</p>
                <form>
                    <div className='form-group'>
                        <label>Firstname</label>
                        <input type="text" className="form-control" onChange={(e)=>{setFirstname(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <label>Lastname</label>
                        <input type="text" className="form-control" onChange={(e)=>{setLastname(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type="text" className="form-control" onChange={(e)=>{setUsername(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <label>Age</label>
                        <input type="text" className="form-control" onChange={(e)=>{setAge(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <label>password</label>
                        <input type="password" className='form-control' onChange={(e)=>{setPasword(e.target.value)}} />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" onChange={(e)=>{setPhone(e.target.value)}}/>    
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>    
                    </div>
                    <div>
                        <div className='form-group'>
                            <label>customer Image</label>
                            <input type="text" onChange={(e)=>{setCust_img(e.target.value)}}/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={registerUser}>Register</button>
                </form>
            </div>
        </div>
    </div>
    );
}


export default Register;