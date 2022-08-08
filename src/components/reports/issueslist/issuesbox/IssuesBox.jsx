import React from "react";
import DependenciesList from "./dependancieslist/DependenciesList";
import { useState } from "react";
import IssuesPulldown from "./issuespulldown/IssuesPulldown";

const IssuesBox = (props) => {
  const { title, issuesList1, setOpenIssueBox } = props;
  const [openDependanciesList, setOpenDependanciesList] = useState(false);
  const [openIssuesPulldown, setOpenIssuesPulldown] = useState(false);

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
              onClick={() => setOpenIssueBox(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              <div className="text">
                <h5>Choose current issue or a dependancy</h5>
              </div>
              {issuesList1.map((issue, index) => {
                return (
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        setOpenIssuesPulldown(true);
                      }}
                    >
                      {issue.name}
                    </button>
                  </div>
                );
              })}
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setOpenDependanciesList(true)}
                >
                  Dependancy
                </button>
              </div>
            </form>
            {openDependanciesList ? (
              <DependenciesList
                title="Dependancies"
                issuesList1={issuesList1}
                setOpenDependanciesList={setOpenDependanciesList}
              />
            ) : (
              ""
            )}
            {openIssuesPulldown ? (
              <IssuesPulldown
                title="Issues"
                setOpenIssuesPulldown={setOpenIssuesPulldown}
              />
            ) : (
              ""
            )}
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default IssuesBox;
