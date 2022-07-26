import axios from "axios";
import { useState } from "react";

const defaultFormFields = {
  subject: "",
  questionType: "",
  time: "",
  totalScore: "",
  set: "",
  setTitle: "",
  setQuestions: [Object],
};

const NewSet = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [subject, questionType, time, totalScore, set, setTitle] = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    // restricts all the default funcationality of the form so the we can handle submit form as we desire
    event.preventDefault();

    try {
      // registering into firebase authentication
      // and accessing user form response UserImp
      // creating userDoc into db form authenticaiton giving extracted user from above and ADDING additional infromation to spread into the user doc
      // here displayname and phoneNumber from the input fields to add inthe db
      const newSet = await axios(
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
  };

  const changeHandler = (event) => {
    // object d-structuring for the event's name and value
    // name gives the specified name in the input field name="eventName"
    const { name, value } = event.target;

    // only updating one field at a time so spreading the form fields
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    
    <div className="container">
      <h1 className="text-center">Create a New Set</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <form onSubmit={submitHandler}>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="Science"
                onChange={changeHandler}
                value={subject}
              />
              <label for="subject">Subject</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="time"
                placeholder="30 minutes"
                value={time}
                onChange={changeHandler}


              />
              <label for="time">Total Time</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="totalScore"
                placeholder="100"
                value={totalScore}
                onChange={changeHandler}


              />
              <label for="totalScore">Total Score</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="set"
                placeholder="100"
                value={set}
                onChange={changeHandler}


              />
              <label for="set">Set no.</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="setTitle"
                placeholder="name@example.com"
                value={setTitle}
                onChange={changeHandler}


              />
              <label for="setTitle">Set Title</label>
            </div>


            <div class="form-floating mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>---------</option>
                <option value={questionType}>Model Question</option>
                <option value={questionType}>Mock Test</option>
                <option value={questionType}>Quiz</option>
              </select>
              <label for="setTitle">Question Type</label>
            </div>

            {/* <div class="d-flex">
              <label for="myfile">Select a Photo:</label>
              <input type="file" id="myfile" name="file" ></input>
            </div> */}
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSet;
