import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PersonalProject = (props) => {
  const { title, setPersonalProjet } = props;

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
              onClick={() => setPersonalProjet(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              <div className="form-group d-grid gap-1">
                <label htmlFor="personal-project-title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="personal-title"
                  placeholder="Personal Project Title"
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="group-description">Description</label>
                <textarea
                  className="form-control"
                  id="group-description"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="start-date"
                  placeholder="Start Date"
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="start-date">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="end-date"
                  placeholder="End Date"
                />
              </div>
              <div className="form-group">
                <button
                  style={{ border: " none" }}
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                >
                  Releases <ArrowForwardIosIcon style={{ fontSize: " 1rem" }} />
                </button>
              </div>
              <div className="form-group">
                <button
                  style={{ border: " none" }}
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                >
                  Milestones
                  <ArrowForwardIosIcon style={{ fontSize: " 1rem" }} />
                </button>
              </div>
              <div className="form-group">
                <button
                  style={{ border: " none" }}
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                >
                  Usecases <ArrowForwardIosIcon style={{ fontSize: " 1rem" }} />
                </button>
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

export default PersonalProject;
