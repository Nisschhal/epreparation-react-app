import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from './card/card.component';

const RecentQuestion = ({recentTitle}) => {
    return (
        <Fragment>
            <h1>{recentTitle}</h1>
            <div className="d-flex justify-content-center">
            <Card title='Recent Question' subject="math" totalQuestion="5" time="50 min"/>
            <Card title='Recent Question' subject="math" totalQuestion="5" time="50 min"/>
            </div>
            <Link className='btn btn-secondary' to='model-question'>View All</Link>
        </Fragment>
    );
};

export default RecentQuestion;