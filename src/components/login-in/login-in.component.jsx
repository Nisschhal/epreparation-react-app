import axios from 'axios';
import {useState} from 'react';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const Login= () =>{
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    // const [message, setMessage] = useState("");
   
    const Login=(e)=>{
        e.preventDefault();
        const data ={
            email:email,
            password:password
        }
        axios.post("http://localhost:300/users/login",data)
        .then(response=>{
            console.log(response.data.token)
            if(response.data.token){
                //it will save the token locally, so that it is available all over the component
                localStorage.setItem("ticket",response.data.token)

                //redirects to home
                window.location.replace("/home")
            }
            else{
                alert("Invalid credential !")
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    return (
        <div className="sign-in-container text-center">
          <h2>I already have an account</h2>
          <span>Sign in with Email/Password</span>
          {/* // set the changing variables into value so that they update the inpute fields as types go onChange */}
          {/* // once the form is being submitted trigger the below onSubmit function */}
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
            <form>
            <FormInput
              label="Email"
              //    passing input options as an object by extracting/d-structuring in it
              inputOptions={{
                type: "email",
                onChange: (e)=>{setEmail(e.target.value)},
                name: "email",
                value: email,
                required: true,
              }}
            />
    
            <FormInput
              label="password"
              inputOptions={{
                type: "password",
                onChange: (e)=>{setPasword(e.target.value)},
                name: "password",
                value: password,
                required: true,
              }}
            />
    
            <div className="buttons-container">
              <Button type="button" onClick={Login} >Sign In</Button>
              {/* <Button type='button' buttonType="google" onClick={signInWithGoogle}>
              Google Sign In 
              </Button> */}
            </div>
          </form>
            </div>
          </div>
        </div>
      );
}


export default Login;