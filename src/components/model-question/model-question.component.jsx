
import React from 'react';
// import Card from '../card/card.component';

const ModelQuestions = ({ models }) => {
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
            {models}
            {/* <div className="col-lg-3">
                {models.map((model) => {
                    <Card title={model.setTitle} subject={model.subject} totalQuestion={model.setQuestion.length} time={model.time}/>
                })}
                </div> */}
            </div>
            
            
        </div>
    );
};

export default ModelQuestions;

