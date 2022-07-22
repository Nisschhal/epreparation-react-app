import React, { Fragment } from "react";
import Card from "../card/card.component";

const Home = () => {
  return (
    <Fragment>
        <p> working i guess</p>
      <img src="..." class="img-fluid" alt="..." />
      {/* <RecentQuestion /> */}
      <Card title='Recent Question' subject="math" totalQuestion="5" time="50 min"/>
    </Fragment>
  );
};

export default Home;
