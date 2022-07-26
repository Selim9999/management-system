import React from "react";
import { Issues } from "./Issues.js";
import { useState } from "react";

const IssuesPulldown = (props) => {
  const { title, setOpenIssuesPulldown, issues, setIssues } = props;
  const [issuesList, setIssuesList] = useState(Issues);
  const [selectedIssue, setSelectedIssue] = useState("");

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
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => {
                  setSelectedIssue(e.target.value);
                }}
              >
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
                onClick={() => {
                  setIssues(issues + " " + selectedIssue);
                  setOpenIssuesPulldown(false);
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

export default IssuesPulldown;
