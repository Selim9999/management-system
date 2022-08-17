import { set } from "date-fns";
import React, { useState } from "react";
import IssuesBox from "./issuesbox/IssuesBox";
import { IssuesListt } from "./IssuesListt";

const IssuesList = (props) => {
  const { title, setIssuesForm, issues, setIssues } = props;
  const [issuesList, setIssuesList] = useState(IssuesListt);
  const [issueName, setIssueName] = useState("");
  const [indexx, setIndexx] = useState(0);
  const [openIssueBox, setOpenIssueBox] = useState(false);

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
              onClick={() => setIssuesForm(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              {issuesList.map((issue, index) => {
                return (
                  <div key={index} className="d-flex gap-5">
                    <div>
                      <h2>{issue.name}</h2>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          console.log(index);
                          console.log(issue.name);

                          setIssues(issue.name);
                          setIndexx(index);
                          setIssueName(issue.name);

                          setOpenIssueBox(true);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                );
              })}
            </form>
            {openIssueBox ? (
              <IssuesBox
                title="Issue Box"
                setOpenIssueBox={setOpenIssueBox}
                issuesList={issuesList}
                setIssuesList={setIssuesList}
                issueName={issueName}
                indexx={indexx}
                setIssues={setIssues}
                issues={issues}
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

export default IssuesList;
