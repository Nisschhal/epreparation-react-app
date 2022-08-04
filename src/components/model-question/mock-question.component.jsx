import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../card/card.component";

const MockQuestions = ({ mocks }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredMosters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const newfilteredMosters = mocks.filter((mock) => {
      return mock.subject.toLocaleLowerCase().includes(searchText);
    }); // evaluates the changes using the state.searchText
    setFilteredMonsters(newfilteredMosters);
  }, [mocks, searchText]);

  const onSearchChange = (event) => {
    const searchTextField = event.target.value.toLocaleLowerCase(); // get the data from input field
    setSearchText(
      // calls the render again to update the changes
      searchTextField
    );
  };
  console.log("i am in model com ", mocks);
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h3>Mock Question</h3>
        <button className="btn btn-success">Go to Dashboard</button>
      </div>

      <div className="d-flex justify-content-between">
        <form className="d-flex my-5" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onSearchChange}

          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div className="d-flex my-5">
          <div className="bold m-2">Sort by: </div>
          <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>---------------</option>
            <option value="1">History</option>
            <option value="2">Bilogy</option>
            {/* <option value="3">Three</option> */}
          </select>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredMosters.map((mock) => {
          const { _id, setTitle, subject, questions, time, imageUrl } = mock;
          return (
            <div key={_id} className="col-lg-3">
              <Card
                title={setTitle}
                imageUrl={`http://localhost:300/${imageUrl}`}
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

export default MockQuestions;
