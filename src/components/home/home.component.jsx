import React, { Fragment } from "react";
import Aboutus from "../about-us/about-us.component";
// import Card from "../card/card.component";
import RecentQuestion from "../recent-question.component";

const Home = ({models, mocks, quizes}) => {
  return (
    <Fragment>
      <div className="container text-center">
        <p> working i guess</p>
        {/* <img src="..." className="img-fluid" alt="..." /> */}
        <div className="">
        <RecentQuestion recentTitle="Recent Model Question" url="model-questions" questions={models} />
        <RecentQuestion recentTitle="Recent Mock Test" url="mock-questions" questions={mocks} />
        <RecentQuestion recentTitle="Recent Quiz" url="quiz" questions={quizes}/>
        <Aboutus />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
