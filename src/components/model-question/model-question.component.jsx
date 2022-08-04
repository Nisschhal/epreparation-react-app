import axios from "axios";
import React, { useState } from "react";
import Card from "../card/card.component";

const ModelQuestions = ({ models }) => {
  const [modelQuestions, setModelQuestions] = useState(models);

  const getHistory = () => {
    axios.get("http://localhost:300/history").then((response) => {
      setModelQuestions(response.data);
    });
  };
  console.log("i am in model com ", models);
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h3>Model Question</h3>
        <button className="btn btn-success">Go to Dashboard</button>
      </div>

      <div className="d-flex justify-content-between">
        <form className="d-flex my-5" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div className="d-flex my-5">
          <div className="bold m-2">Sort by: </div>
          <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>---------------</option>
            <option value="1" onClick={getHistory}>History</option>
            <option value="2">Bilogy</option>
            {/* <option value="3">Three</option> */}
          </select>
          </div>
        </div>
      </div>

      <div className="row">
        {models.map((model) => {
          const { _id, setTitle, subject, questions, time, imageUrl } = model;
          {
            console.log(imageUrl);
          }
          return (
            <div key={_id} className="col-lg-3">
              <Card
                id={_id}
                url={"model-questions"}
                imageUrl={`http://localhost:300/${imageUrl}`}
                title={setTitle}
                subject={subject}
                totalQuestions={2}
                time={time}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModelQuestions;
