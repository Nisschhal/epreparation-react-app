import React from "react";
import Card from "../card/card.component";

const MockQuestions = ({ mocks }) => {
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
        {mocks.map((mock) => {
          const { _id, setTitle, subject, setQuestions, time } = mock;
          return (
            <div key={_id} className="col-lg-3">
              <Card
                title={setTitle}
                subject={subject}
                totalQuestions={setQuestions.length}
                time={time}
              />
            </div>
          );
        })}
      </div>

      <div className="row">
        <div className="col-4">
          <button> Create New Model Set</button>
        </div>
        <div className="col-4">
          <button> Create Mock Questions</button>
        </div>
      </div>
    </div>
  );
};

export default MockQuestions;
