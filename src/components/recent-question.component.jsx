import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "./card/card.component";

const RecentQuestion = ({ recentTitle, url, questions }) => {
  return (
    <Fragment>
      <h1>{recentTitle}</h1>
      <div className="row d-flex justify-content-center">
        {/* listing all question thrown in the this.props. */}
        {questions.map((question) => {
          const { _id, setTitle, subject, setQuestions, time, imageUrl } = question;
          return (
            <div key={_id} className="col-sm-3">
              <Card
                id={_id}
                imageUrl={`http://localhost:300/${imageUrl}`}
                title={setTitle}
                subject={subject}
                totalQuestions={questions.length}
                time={time}
              />
            </div>
          );
        })}
      </div>
      <Link className="btn btn-secondary m-4" to={`${url}`}>
        View All
      </Link>
    </Fragment>
  );
};

export default RecentQuestion;
