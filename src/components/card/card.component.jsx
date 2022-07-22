import React, { Fragment } from "react";

const Card = ( {title, subject, totalQuestions, time}) => {
  return (
    <Fragment>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{subject}</h6>
          <div className="info">
            <span class="card-text">{totalQuestions}</span>
            <span class="card-text">{time}</span>
          </div>
          <button className="btn btn-primary">
          <a href="#" class="card-link">
            View
          </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
