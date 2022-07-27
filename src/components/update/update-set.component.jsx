import axios from "axios";
import {useParams} from 'react-router-dom';
import React, { Fragment, useEffect, useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const UpdateSet = () => {
    const {id} = useParams();
    console.log(id);
  const [subject, setSubject] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [time, setTime] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const [set, setSet] = useState("");
  const [setTitle, setSetTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:300/model-questions/${id}`).then((response) => {
      console.log(response.data);
      setSubject(response.data.subject);
      setQuestionType(response.data.questionType);
      setTime(response.data.time);
      setTotalScore(response.data.totalScore);
      setSet(response.data.set);
      setSetTitle(response.data.setTitle);
      setImageUrl(response.data.imageUrl);
    });
  }, []);

  const updateSetHandler = (e) => {
    e.preventDefault();
    // const data ={
    //   name: name,
    //   price: price,
    //   description: description,
    //   qty: qty,
    //   userId: userId,
    // }

    const data = new FormData();
    data.append("subject", subject);
    data.append("questionType", questionType);
    data.append("time", time);
    data.append("totalScore", totalScore);
    data.append("set", set);
    data.append("setTitle", setTitle);
    data.append("imageUrl", imageUrl);
    console.log("passing:",data);

    


    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ticket"),
      },
    };

    axios.patch(`http://localhost:300/model-questions/${id}`, data, config)
      .then((response) => {
        console.log(response);
        alert("Set Updated Successfully!!");
        window.location.reload("/model-questions");
        return;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //   const resetFormFields = () => {
  //       setFormFields(defaultFormFields);
  //   }

  //   const submitHandler = async(event) => {
  //       // restricts all the default funcationality of the form so the we can handle submit form as we desire
  //       event.preventDefault()
  //       console.log("working upto here")

  //       try {
  //          // registering into firebase authentication
  //          // and accessing user form response UserImp
  //          // creating userDoc into db form authenticaiton giving extracted user from above and ADDING additional infromation to spread into the user doc
  //          // here displayname and phoneNumber from the input fields to add inthe db
  //          const newSet = await axios.post(
  //            "http://localhost:300/model-questions/insert",
  //            formFields
  //          );
  //          if (newSet) {
  //            console.log(newSet);
  //            alert("Question Set Successfully Registered");
  //          }
  //          resetFormFields();
  //        } catch (err) {
  //          // if (err.code === "auth/email-already-in-use"){
  //          //     alert("Couldn't register User, Email Address already exits!!")
  //          // }
  //          console.log(
  //            "Error while setting question set",
  //            err.message
  //          );
  //        }
  //   }

  // function
  // to keep track of any changes in the form feilds
  //   const changeHandler = (event) => {
  //       // object d-structuring for the event's name and value
  //       // name gives the specified name in the input field name="eventName"
  //       const { name, value } = event.target;

  //       // only updating one field at a time so spreading the form fields
  //       setFormFields({...formFields, [name]: value});
  //       console.log(formFields);
  //   }

  //   const fileHandler = (event) => {
  //    imageUrl: event.target.file[0];
  //    console.log(imageUrl);

  //   }
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <div className="sign-up-container">
          <h2>Update Set</h2>
          {/* <span>Sign up with Email/Password</span> */}
          {/* // set the changing variables into value so that they update the inpute fields as types go onChange */}
          {/* // once the form is being submitted trigger the below onSubmit function */}
          <form>
            <FormInput
              label="Enter a Subject"
              //    passing input options as an object by extracting/d-structuring in it
              inputOptions={{
                type: "text",
                onChange: (e) => {
                  setSubject(e.target.value);
                },
                name: "subject",
                value: subject,
                required: true,
                autoFocus: false,
              }}
            />
            <FormInput
              label="Enter a Questoin Type"
              //    passing input options as an object by extracting/d-structuring in it
              inputOptions={{
                type: "text",
                onChange: (e) => {
                  setQuestionType(e.target.value);
                },
                name: "questionType",
                value: questionType,
                required: true,
                autoFocus: false,
              }}
            />
            <FormInput
              label="Enter total Test Time"
              inputOptions={{
                type: "number",
                onChange: (e) => {
                  setTime(e.target.value);
                },
                name: "time",
                value: time,
                required: true,
              }}
            />
            <FormInput
              label="Enter total Score"
              inputOptions={{
                type: "number",
                onChange: (e) => {
                  setTotalScore(e.target.value);
                },
                name: "totalScore",
                value: totalScore,
                required: true,
              }}
            />
            <FormInput
              label="Enter a Set no."
              inputOptions={{
                type: "number",
                onChange: (e) => {
                  setSet(e.target.value);
                },
                name: "set",
                value: set,
                required: true,
              }}
            />
            <FormInput
              label="Enter Set Title"
              inputOptions={{
                type: "text",
                onChange: (e) => {
                  setSetTitle(e.target.value);
                },
                name: "setTitle",
                value: setTitle,
                required: true,
              }}
            />
            <div className="form-group">
              <label>Add Set Photo</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => {
                  setImageUrl(e.target.files[0]);
                }}
              />
            </div>

            <Button type="button" onClick={updateSetHandler}>
              Update Set
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSet;
