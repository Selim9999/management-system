import React from "react";

const AssignessForm = (props) => {
  const { title, setAssignees } = props;
  return (
    <div
      className="modal show fade"
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "block",
        overflowWrap: "break-word",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setAssignees(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              <div className="form-group d-grid gap-1">
                <label htmlFor="group-title">Group Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="group-title"
                  placeholder="Group Title"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignessForm;
