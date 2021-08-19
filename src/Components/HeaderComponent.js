import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-12 mt-2">
          <nav className="navbar navbar-expand-lg navbar-light bg-white rounded ">
            <a className="navbar-brand" href="#">
              Recro
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <span className="nav-item nav-link active">
                  <Link to="/">Home</Link>
                </span>
                <span className="nav-item nav-link">
                  <Link to="/task">Task</Link>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
