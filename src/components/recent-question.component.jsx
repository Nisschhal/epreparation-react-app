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
            const { _id, setTitle, subject, setQuestions, time } = question;
            return (
              <div key={_id} className="col-sm-3">
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
      <Link className="btn btn-secondary" to={`${url}`}>
        View All
      </Link>
    </Fragment>
  );
};

export default RecentQuestion;
