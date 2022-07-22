import React, { Fragment } from "react";

const Card = ( {title, subject, totalQuestions, time}) => {
  return (
    <Fragment>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subject}</h6>
          <div className="info">
            <span className="card-text">{totalQuestions}</span>
            <span className="card-text">{time}</span>
          </div>
          <button className="btn btn-primary">
          <a href="#" className="card-link text-white">
            View
          </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
