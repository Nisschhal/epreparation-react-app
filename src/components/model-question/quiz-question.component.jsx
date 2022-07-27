import React from 'react';
import Card from '../card/card.component';

const QuizQuestions = ({ quizes }) => {
    return (
        <div className='container'>
            <div className="d-flex justify-content-between">
                <h3>Model Question</h3>
                <button className='btn btn-success'>Go to Home</button>
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
                <div className="filter ">
                    <span>Subject </span>
                    <span>Sort</span>
                </div>
            </div>

            
            <div className="row">
        {quizes.map((quiz) => {
           const {_id, setTitle, subject, questions, time} = quiz;
          return (
            <div key={_id} className="col-lg-3">
              <Card
                title={setTitle}
                subject={subject}
                totalQuestions={questions.length}
                time={time}
              />
            </div>
          );
        })}
      </div>
            
            
        </div>
    );
};

export default QuizQuestions;
