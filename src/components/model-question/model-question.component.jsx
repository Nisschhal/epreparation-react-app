import React from "react";
import Card from "../card/card.component";

const ModelQuestions = ({ models }) => {
  console.log("i am in model com ", models);
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h3>Model Question</h3>
        <button className="btn btn-success">Go to Home</button>
      </div>

      <div className="d-flex justify-content-between">
        <p>search</p>
        <div className="filter ">
          <span>Subject </span>
          <span>Sort</span>
        </div>
      </div>

      <div className="row">
        {models.map((model) => {
          const {_id, setTitle, subject, setQuestions, time, imageUrl} = model;
          {console.log(imageUrl)}
          return (
            <div key={_id} className="col-lg-3">
              <Card
                imageUrl={`http://localhost:300/${imageUrl}`}
                title={setTitle}
                subject={subject}
                totalQuestions={setQuestions.length}
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
