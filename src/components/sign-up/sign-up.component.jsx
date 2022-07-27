import { useState } from "react";
import axios from "axios";
import React from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
// import "./sign-up-form.style.scss";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");


  const registerUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password doesn't matched!!");
      return;
    }

    const data = {
      displayName: displayName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    console.log(data);

    axios.post("http://localhost:300/users/register", data)
      .then((response) => {
        if ((response.data.msg = "Registered")) {
          alert("User registered successfully");
          window.location.reload("login");
        } else {
          alert("Failed to register");
        }
        console.log(response);
      })
      .catch();
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <h1>Register</h1>

          {/* <p>{message}</p> */}
          {/* <form>
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
                </form> */}

          <p>{message}</p>

          <form>
            <FormInput
              label="Full Name"
              //    passing input options as an object by extracting/d-structuring in it
              inputOptions={{
                type: "text",
                onChange: (e) => {
                  setDisplayName(e.target.value);
                },
                name: "displayName",
                value: displayName,
                required: true,
                autoFocus: false,
              }}
            />
            <FormInput
              label="Email"
              inputOptions={{
                type: "email",
                onChange: (e) => {
                  setEmail(e.target.value);
                },
                name: "email",
                value: email,
                required: true,
              }}
            />
            <FormInput
              label="Phone Number"
              inputOptions={{
                type: "text",
                onChange: (e) => {
                  setPhoneNumber(e.target.value);
                },
                name: "phoneNumber",
                value: phoneNumber,
                required: true,
              }}
            />
            <FormInput
              label="Password"
              inputOptions={{
                type: "password",
                onChange: (e) => {
                  setPassword(e.target.value);
                },
                name: "password",
                value: password,
                required: true,
              }}
            />
            <FormInput
              label="ConfirmPassword"
              inputOptions={{
                type: "password",
                onChange: (e) => {
                  setConfirmPassword(e.target.value);
                },
                name: "confirmPassword",
                value: confirmPassword,
                required: true,
              }}
            />

            <Button type="button" onClick={registerUser}>
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

// setting default form feilds to pass the data to and from models for db
// const defaultFormFields ={
//     displayName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: ''
// }
// const SignUpForm = () => {

//     // setting formfeilds and initalizing them
//     const [formFields , setFormFields ] = useState(defaultFormFields);

//     // changeing form felids to extract and pass the data
//     const { displayName, email, phoneNumber, password, confirmPassword } = formFields;

//     console.log(formFields);

//     const resetFormFields = () => {
//         setFormFields(defaultFormFields);
//     }

//     const submitHandler = async(event) => {
//         // restricts all the default funcationality of the form so the we can handle submit form as we desire
//         event.preventDefault()

//         if (password !== confirmPassword) {
//             alert("Password doesn't matched!!");
//             return;
//         }

//         try {
//             // registering into firebase authentication
//             // and accessing user form response UserImp
//             const {user} = await createAuthUserWithEmailAndPassword(email, password);
//             // creating userDoc into db form authenticaiton giving extracted user from above and ADDING additional infromation to spread into the user doc
//             // here displayname and phoneNumber from the input fields to add inthe db
//             const newUser = await createUserDocumentfromAuth(user, {displayName, phoneNumber, password})
//             if (newUser) {
//                 console.log(newUser);
//                 alert("User Successfully Registered");
//             }
//             resetFormFields();

//         } catch(err) {
//             if (err.code === "auth/email-already-in-use"){
//                 alert("Couldn't register User, Email Address already exits!!")
//             }
//             console.log("Error while signing up with email and password", err.message)

//         }
//     }

//     // function
//     // to keep track of any changes in the form feilds
//     // const changeHandler = (event) => {
//     //     // object d-structuring for the event's name and value
//     //     // name gives the specified name in the input field name="eventName"
//     //     const { name, value } = event.target;

//     //     // only updating one field at a time so spreading the form fields
//     //     setFormFields({...formFields, [name]: value});
//     // }

//     return (
//         <div className="sign-up-container">
//             <h2>Don't have an account?</h2>
//             <span>Sign up with Email/Password</span>
//             {/* // set the changing variables into value so that they update the inpute fields as types go onChange */}
//             {/* // once the form is being submitted trigger the below onSubmit function */}
//             <form onSubmit={submitHandler}>
//                <FormInput label="Full Name"
//             //    passing input options as an object by extracting/d-structuring in it
//                inputOptions={{
//                 type:"text",
//                 onChange:changeHandler,
//                  name:"displayName",
//                   value:displayName ,
//                   required: true,
//                   autoFocus: false
//                }}/>
//                <FormInput label="Email"
//                  inputOptions={{
//                     type:"email",
//                     onChange:changeHandler,
//                      name:"email",
//                       value:email ,
//                       required: true
//                    }}/>
//                <FormInput label="Phone Number"
//                  inputOptions={{
//                     type:"text",
//                     onChange:changeHandler,
//                      name:"phoneNumber",
//                       value:phoneNumber ,
//                       required: true
//                    }}/>
//                <FormInput label="password"    inputOptions={{
//                 type:"password",
//                 onChange:changeHandler,
//                  name:"password",
//                   value:password ,
//                   required: true
//                }}/>
//                <FormInput label="confirmPassword"  inputOptions={{
//                 type:"password",
//                 onChange:changeHandler,
//                  name:"confirmPassword",
//                   value:confirmPassword ,
//                   required: true
//                }}/>

//                 <Button type="submit">Register</Button>
//             </form>
//         </div>
//     );
// }

// export default SignUpForm;
