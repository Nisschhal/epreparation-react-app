import axios from 'axios';
import {useState} from 'react';
import React from 'react';

const Login= () =>{
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [message, setMessage] = useState("");
   
    const Login=(e)=>{
        e.preventDefault();
        const data ={
            email:email,
            password:password
        }
        axios.post("http://localhost:300/login",data)
        .then(response=>{
            console.log(response.data.token)
            if(response.data.token){
                //it will save the token locally, so that it is available all over the component
                localStorage.setItem("ticket",response.data.token)

                //redirects to home
                window.location.replace("/dash")
            }
            else{
                setMessage("Invalid credential !")
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    return(
            
        <section className="text-center">
        
        <div className="backimg p-5 bg-image"></div>
        

        <div className="mirrorlog card mx-4 mx-md-5 shadow-5-strong" >
            <div className="card-body py-5 px-md-5">

            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Login</h2>
                <form >
                    {/* <!-- Email input --> */}
                    <div className="form-outline  mb-4">
                    <input type="email" id="form3Example3" className="form-control"
                    onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email address" />
                    
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" 
                    onChange={(e)=>{setPasword(e.target.value)}} placeholder="Password" />
                   
                    </div>

                    
                    <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
                    <label className="form-check-label" htmlFor="form2Example33">
                        Remember Me
                    </label>
                    </div> 

                    {/* <!-- Login button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={Login}>
                    Sign In
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                        
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
        

            
    );
}


export default Login;