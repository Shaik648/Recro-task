import React from "react";
import HeaderComponent from "./HeaderComponent";

function TaskComponent(props) {
  console.log("props", props.finalColors);
  return (
    <div className="container-fluid ">
      <div
        className="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content text-center pt-4">
            <p
              className="text-right mr-4 "
              data-dismiss="modal"
              onClick={props.onClose}
            >
              X
            </p>
            <p>Task Count Down</p>
            <p>{props.timer}</p>
            <button
              type="button"
              className="btn btn-success m-2"
              data-dismiss="modal"
              onClick={props.onCreate}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <HeaderComponent />
      <div className="row justify-content-center mt-4">
        <div className=" justify-content-center">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.onStratTimer}
            data-toggle="modal"
            data-target=".bd-example-modal-sm"
          >
            Create Task
          </button>
        </div>
      </div>
      <div className="row">
        {props.finalColors.length > 0 ? (
          props.finalColors.map((item) => (
            <div
              className="col-lg-2 col-md-4 col-sm-12 d-flex mt-4 "
              key={item.id}
            >
              <div
                className={
                  item.color === "Green"
                    ? "card shadow-lg p-3 mb-5 bg-success rounded"
                    : "card shadow-lg p-3 mb-5 bg-danger rounded"
                }
              >
                <div className="card-body">
                  <h5 className="card-title ">Task hasbeen created </h5>
                  <p className="card-text">{item.color}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-2 text-center">No Task has been Created</p>
        )}
      </div>
    </div>
  );
}

export default TaskComponent;
