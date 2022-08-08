import React from "react";
import { Issues } from "./Issues.js";
import { useState } from "react";

const IssuesPulldown = (props) => {
  const { title, setOpenIssuesPulldown } = props;
  const [issuesList, setIssuesList] = useState(Issues);

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
              onClick={() => setOpenIssuesPulldown(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              <select className="form-control" id="exampleFormControlSelect1">
                {issuesList.map((issue, index) => {
                  return <option>{issue.name}</option>;
                })}
              </select>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
              ></textarea>
              <button
                style={{ width: "10rem" }}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
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

export default IssuesPulldown;
