import React from "react";
import HeaderComponent from "./HeaderComponent";

function HomeComponent(props) {
  console.log("props", props.responseList);
  return (
    <div className="container-fluid  ">
      <HeaderComponent />
      <div className="row">
        {props.responseList ? (
          props.responseList.map((item) => (
            <div
              className="col-lg-2 col-md-4 col-sm-12 d-flex mt-4 "
              key={item.id}
            >
              <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Details Found</p>
        )}
      </div>
      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error!</p>}
      <div ref={props.loader} />
    </div>
  );
}

export default HomeComponent;
