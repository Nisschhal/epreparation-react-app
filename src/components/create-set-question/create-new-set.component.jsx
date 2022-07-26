import axios from 'axios';
import React, { Fragment, useState } from 'react';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    subject: "",
    questionType: "",
    time: "",
    totalScore: "",
    set: "",
    setTitle: "",
    imageUrl: ""
  };

const CreateNewSet = () => {
     // setting formfeilds and initalizing them
     const [formFields , setFormFields ] = useState(defaultFormFields);

     // changeing form felids to extract and pass the data
     const {subject, questionType, time, totalScore, set, setTitle, imageUrl} = formFields;

     console.log(formFields);
 
     const resetFormFields = () => {
         setFormFields(defaultFormFields);
     } 
 
     const submitHandler = async(event) => {
         // restricts all the default funcationality of the form so the we can handle submit form as we desire 
         event.preventDefault()
         console.log("working upto here")
         
         try {
            // registering into firebase authentication
            // and accessing user form response UserImp
            // creating userDoc into db form authenticaiton giving extracted user from above and ADDING additional infromation to spread into the user doc
            // here displayname and phoneNumber from the input fields to add inthe db
            const newSet = await axios.post(
              "http://localhost:300/model-questions/insert",
              formFields
            );
            if (newSet) {
              console.log(newSet);
              alert("Question Set Successfully Registered");
            }
            resetFormFields();
          } catch (err) {
            // if (err.code === "auth/email-already-in-use"){
            //     alert("Couldn't register User, Email Address already exits!!")
            // }
            console.log(
              "Error while setting question set",
              err.message
            );
          }
     }
 
     // function 
     // to keep track of any changes in the form feilds
     const changeHandler = (event) => {
         // object d-structuring for the event's name and value
         // name gives the specified name in the input field name="eventName"
         const { name, value } = event.target;
 
         // only updating one field at a time so spreading the form fields
         setFormFields({...formFields, [name]: value});
         console.log(formFields);
     }

   //   const fileHandler = (event) => {
   //    imageUrl: event.target.file[0];
   //    console.log(imageUrl);  

   //   } 
     return (
        <div className="row d-flex justify-content-center">
          <div className="col-6">
          <div className="sign-up-container">
             <h2>Create a new Set</h2>
             {/* <span>Sign up with Email/Password</span> */}
             {/* // set the changing variables into value so that they update the inpute fields as types go onChange */}
             {/* // once the form is being submitted trigger the below onSubmit function */}
             <form onSubmit={submitHandler}>
                <FormInput label="Enter a Subject"  
             //    passing input options as an object by extracting/d-structuring in it
                inputOptions={{
                 type:"text",
                 onChange:changeHandler,
                  name:"subject",
                   value:subject ,
                   required: true, 
                   autoFocus: false
                }}/> 
                <FormInput label="Enter a Questoin Type"  
             //    passing input options as an object by extracting/d-structuring in it
                inputOptions={{
                 type:"text",
                 onChange:changeHandler,
                  name:"questionType",
                   value:questionType ,
                   required: true, 
                   autoFocus: false
                }}/> 
                <FormInput label="Enter total Test Time"  
                  inputOptions={{
                     type:"number",
                     onChange:changeHandler, 
                      name:"time",
                       value:time ,
                       required: true
                    }}/> 
                <FormInput label="Enter total Score"  
                  inputOptions={{
                     type:"number",
                     onChange:changeHandler,
                      name:"totalScore",
                       value:totalScore ,
                       required: true
                    }}/> 
                <FormInput label="Enter a Set no."    inputOptions={{
                 type:"number",
                 onChange:changeHandler,
                  name:"set",
                   value:set ,
                   required: true
                }}/> 
                <FormInput label="Enter Set Title"  inputOptions={{
                 type:"text",
                 onChange:changeHandler,
                  name:"setTitle",
                   value:setTitle ,
                   required: true
                }}/> 
                <FormInput  inputOptions={{
                 type:"file",
                 onChange:changeHandler,
                  name:"imageUrl",
                   value:imageUrl,
                   required: true
                }}/> 
                
              
                 <Button type="submit">Create</Button>
             </form>
         </div>
          </div>
        </div>
     );
  };
  
  export default CreateNewSet;




