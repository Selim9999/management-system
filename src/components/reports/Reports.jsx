import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReport, deleteReport } from "../../features/reports/Reports";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IssuesList from "../reports/issueslist/IssuesList.jsx";

const Reports = () => {
  const dispatch = useDispatch();
  const reportsList = useSelector((state) => state.reports.value);

  const [work, setWork] = useState("");
  const [hours, setHours] = useState("");
  const [issues, setIssues] = useState("");
  const [blockings, setBlockings] = useState("");
  const [next, setNext] = useState("");
  const [statistics, setStatistics] = useState("");

  const [issuesForm, setIssuesForm] = useState(false);

  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="d-flex justify-content-start">
        <h1 style={{ color: "#f21344", fontWeight: "900" }}>Reports</h1>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "10%" }}
          onClick={(e) => {
            e.preventDefault();
            setClicked(true);
          }}
        >
          See All Reports
        </button>
      </div>

      <div className="row">
        <div className="col">
          <form className="mt-5 d-grid gap-3">
            <div className="card" style={{ width: "60%" }}>
              <div className="card-body">
                <h5 className="card-title">Submit Daily Report</h5>
                <hr />
                <p className="card-text">here the user email</p>
              </div>
            </div>
            <div className="card" style={{ width: "60%" }}>
              <div className="card-body d-grid gap-4">
                <h5 className="card-title">What did I work on today</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your answer"
                  id="work"
                  name="work"
                  onChange={(e) => setWork(e.target.value)}
                />
              </div>
            </div>
            <div className="card" style={{ width: "60%" }}>
              <div className="card-body d-grid gap-4">
                <h5 className="card-title">Total hours worked</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your answer"
                  id="hours"
                  name="hours"
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
            </div>
            <div className="card" style={{ width: "60%" }}>
              <div className="card-body d-grid gap-4">
                <h5 className="card-title">Unknowns/Issues</h5>
                <div className="add-button">
                  <AddCircleOutlinedIcon
                    style={{
                      fontSize: "3rem",
                      cursor: "pointer",
                      color: "#4d4c4c",
                    }}
                    onClick={(e) => {
                      e.preventDefault();

                      setIssuesForm(true);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "60%" }}>
              <div className="card-body d-grid gap-4">
                <h5 className="card-title">Things that are blocking me</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your answer"
                  id="blocking"
                  name="blocking"
                  onChange={(e) => setBlockings(e.target.value)}
                />
              </div>
            </div>
            <div className="card" style={{ width: "60%" }}>
              <div className="card-body d-grid gap-4">
                <h5 className="card-title">What am i going to do next</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your answer"
                  id="next"
                  name="next"
                  onChange={(e) => setNext(e.target.value)}
                />
              </div>
            </div>
            <div className="card" style={{ width: "60%" }}>
              <div className="card-body d-grid gap-4">
                <h5 className="card-title">Statistics</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your answer"
                  id="statistics"
                  name="statistics"
                  onChange={(e) => setStatistics(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-25"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  addReport({
                    id: reportsList[reportsList.length - 1].id + 1,
                    work,
                    hours,
                    issues,
                    blockings,
                    next,
                    statistics,
                  })
                );
                console.log(reportsList);
              }}
            >
              Submit
            </button>
          </form>
          {issuesForm === true ? (
            <IssuesList title="Issues" setIssuesForm={setIssuesForm} />
          ) : (
            ""
          )}
        </div>
        <div className="col">
          {clicked ? (
            <div className="mt-5">
              <div className="mt-5">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Work</th>
                      <th>Hours</th>
                      <th>Issues</th>
                      <th>Blockings</th>
                      <th>Next</th>
                      <th>Statistics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsList.map((report) => (
                      <tr key={report.work}>
                        <td>{report.work}</td>
                        <td>{report.hours}</td>
                        <td>{report.issues}</td>
                        <td>{report.blockings}</td>
                        <td>{report.next}</td>
                        <td>{report.statistics}</td>
                        <td>
                          <button
                            style={{ width: "8rem" }}
                            type="delete"
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(deleteReport({ id: report.id }));
                            }}
                          >
                            Delete Report
                          </button>
                        </td>
                        <td>
                          <button
                            style={{ width: "9rem" }}
                            type="edit"
                            className="btn btn-primary"
                          >
                            Update Report
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Reports;
