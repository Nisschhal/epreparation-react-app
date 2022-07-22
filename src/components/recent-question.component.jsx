import React, { Fragment } from 'react';
import Card from './card/card.component';

const RecentQuestion = ({recentTitle}) => {
    return (
        <Fragment>
            <h1>{recentTitle}</h1>
            <div className="d-flex justify-content-center">
            <Card title='Recent Question' subject="math" totalQuestion="5" time="50 min"/>
            <Card title='Recent Question' subject="math" totalQuestion="5" time="50 min"/>
            </div>
            <button className='btn btn-secondary m-2'>View All</button>
        </Fragment>
    );
};

export default RecentQuestion;