import { set } from "date-fns";
import React, { useState } from "react";
import IssuesBox from "./issuesbox/IssuesBox";
import { IssuesListt } from "./IssuesListt";

const IssuesList = (props) => {
  const { title, setIssuesForm } = props;
  const [issuesList, setIssuesList] = useState(IssuesListt);
  const [issuesList1, setIssuesList1] = useState([]);
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
                          //filter the issuesList excluding the issue selected and set it to issuesList1
                          setIssuesList1(
                            issuesList.filter(
                              (issue1) => issue1.name == issue.name
                            )
                          );

                          console.log(issuesList1);

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
                issuesList1={issuesList1}
                setOpenIssueBox={setOpenIssueBox}
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
