import React, { Fragment } from "react";
import Aboutus from "../about-us/about-us.component";
import Card from "../card/card.component";
import RecentQuestion from "../recent-question.component";

const Home = () => {
  return (
    <Fragment>
      <div className="container text-center">
        <p> working i guess</p>
        <img src="..." className="img-fluid" alt="..." />
        <div className="">
        <RecentQuestion recentTitle="Recent Model Question" url="model-question" />
        <RecentQuestion recentTitle="Recent Mock Test" url="mock-test" />
        <RecentQuestion recentTitle="Recent Quiz" url="quiz"/>
        <Aboutus />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
