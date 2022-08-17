import React, { useState } from "react";

const Help = ({ title, setHelpForm, help, setHelp }) => {
  const [description, setDescription] = useState("");

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
              onClick={() => {
                setHelpForm(false);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              <label htmlFor="Description">Description</label>
              <textarea
                className="form-control"
                id="Description"
                rows="3"
                placeholder="What is the problem?"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
              <button
                style={{ width: "10rem" }}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setHelp(help + ", " + description);
                  setHelpForm(false);
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Help;
