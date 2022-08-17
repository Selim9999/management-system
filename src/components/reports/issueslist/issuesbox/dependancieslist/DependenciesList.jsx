import { set } from "date-fns/esm";
import React, { useEffect } from "react";
import { useState } from "react";
import IssuesPulldown from "../issuespulldown/IssuesPulldown";

const DependenciesList = (props) => {
  const { title, setOpenDependanciesList, issuesList, setIssuesList, indexx } =
    props;
  const [openIssuesPulldown, setOpenIssuesPulldown] = useState(false);

  //make a new array for dependancies list inside the issuesList1
  const [dependanciesList, setDependanciesList] = useState([]);

  //set dependanciesList to the dependancies of the issue selected
  useEffect(() => {
    console.log(issuesList[indexx].dependancies);
    setDependanciesList(issuesList[indexx].dependancies);
  }, []);

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
              onClick={() => setOpenDependanciesList(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              {dependanciesList.map((dependancy, index) => {
                return (
                  <div className="d-flex gap-5 ">
                    <div key={dependancy.id}>
                      <h1>{dependancy.name}</h1>
                    </div>
                    <div className="buttons">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setOpenIssuesPulldown(true);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                );
              })}
            </form>
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

export default DependenciesList;
