
import React from 'react';
import Card from '../card/card.component';

const MockQuestions = ({ mocks }) => {
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
            <div className="col-lg-3">
                <Card title='Recent Question' subject="math" totalQuestion="5" time="50 min"/>
                </div>
            </div>
            
            
        </div>
    );
};


export default MockQuestions;

