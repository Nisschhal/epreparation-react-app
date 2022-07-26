import React, { Fragment } from "react";
import QuestionTest from "../model-question/test.compnent";

const Card = ( {title, subject, totalQuestions, time, imageUrl}) => {
  return (
    <Fragment>
      <div className="card" >
      <img class="card-img-top" src={imageUrl} alt="Card image cap"/>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subject}</h6>
          <div className="row">
            <span className="col card-text">{totalQuestions} question</span>
            <span className="col card-text">{time}</span>
          </div>
         <div className="row">
          <div className="col">Free</div>
          <button type="button" onClick={()=> {console.log()}} className="col btn btn-outline-success p-0 m-0 card-link">
            View
          </button>
         </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
