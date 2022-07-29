import axios from "axios";
import React, { Fragment } from "react";
import QuestionTest from "../model-question/test.compnent";
import { Link } from "react-router-dom";
import "./card.style.css"
const Card = ({ id, title, subject, totalQuestions, time, imageUrl, url }) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };
  const deleteSet = () => {
    axios
      .delete(`http://localhost:300/model-questions/${id}`, config)
      .then((result) => {
        console.log(result);
        if (result.data.success) {
        }
        alert("Question Set Deleted Successfully!!");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  return (
    <Fragment>
      <div className="card">
        <img class="card-img-top" src={imageUrl} alt="Card image cap" />

        <div className="card-body">
          <h5 className="card-title">{capitalizeFirst(title)}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{capitalizeFirst(subject)}</h6>
          <div className="row text-muted my-1">
            <span className="col card-text">{totalQuestions}0 Questions</span>
            <span className="col card-text">{time}:00 minutes</span>
          </div>
          <div className="row">
            <div className="col bold">Free</div>
            {/* <button
              type="button"
              onClick={() => {
                console.log();
              }}
              className="col btn btn-outline-success p-0 m-0 card-link"
            >
              View
            </button> */}
            {/* <button type="button" onClick={()=> {console.log()}} className="col btn btn-outline-success p-0 m-0 card-link">
            Edit
          </button> */}

            <Link
              className="col btn btn-outline-success p-0 m-0 card-link"
              // to={`update-${url}/${id}`}
              to={`take-quiz/${id}`}
            >
              View
            </Link>
            <Link
              className="col btn btn-outline-primary p-0 m-0 card-link"
              // to={`update-${url}/${id}`}
              to={`${id}`}
            >
              Edit
            </Link>
            <button
              type="button"
              onClick={() => deleteSet()}
              className="col btn btn-outline-danger p-0 m-0 card-link"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
