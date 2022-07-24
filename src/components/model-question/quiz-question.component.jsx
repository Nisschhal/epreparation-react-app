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
                <p>search</p>
                <div className="filter ">
                    <span>Subject </span>
                    <span>Sort</span>
                </div>
            </div>

            
            <div className="row">
        {quizes.map((quiz) => {
           const {_id, setTitle, subject, setQuestions, time} = quiz;
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
            
            
        </div>
    );
};

export default QuizQuestions;
