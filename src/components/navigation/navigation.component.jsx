import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  // checking if the user is logged in
  var menu;
  if (localStorage.getItem("ticket")) {
    menu = (
      <>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/dash">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profileU">
              Profile Update
            </a>
          </li>
        </ul>
      </>
    );
  } else {
    menu = (
      <>
        <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="/signup">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        </ul>
      </>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            epraparation
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about-us">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="model-question">
                  Model Question
                </Link>
              </li>

              {/* MOCK QUESTION NAV LINKS */}

              <li className="nav-item">
                <Link className="nav-link" to="mock-question">
                  Mock Test
                </Link>
              </li>

              {/* Quiz QUESTION NAV LINKS */}

              <li className="nav-item">
                <Link className="nav-link" to="quiz">
                  Quiz
                </Link>
              </li>
              {/* For Admin access to add new Set */}

              <li className="nav-item">
                <Link className="nav-link" to="new-set">
                  Add Set
                </Link>
              </li>
              {/* For Admin access to add new Questions Set */}

              <li className="nav-item">
                <Link className="nav-link" to="quiz">
                  Add Set Questions
                </Link>
              </li>

              {/* QUIZ QUESTION DROP DOWN NAV LINKS */}

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  QUIZ
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="contact-us">
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
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

            {menu}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
