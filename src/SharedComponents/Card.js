import React from "react";

function Card(props) {
  return (
    <div className="">
      <div className=" " key={props.key}>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{props.title}</h5>
            <p className="card-text">{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
