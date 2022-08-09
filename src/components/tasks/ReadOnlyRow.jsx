import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ReadOnlyRow = ({ item, index, onDelete, handleEditClick }) => {
  let classes = "progress-bar progress-bar-striped progress-bar-animated bg-";
  let today = new Date();
  let date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  const todate = new Date(date);
  const endDate = new Date(item.end_date);
  let valNow = (endDate.getDate() - today.getDate()) * 10;

  if (item.status.toLowerCase() === "in progress" && endDate > todate) {
    classes += "success";
    valNow = valNow.toString() + "%";
    console.log(valNow);
  } else if (
    item.status.toLowerCase() === "not started" ||
    item.status.toLowerCase() === "issue"
  ) {
    classes += "warning";
  } else {
    classes += "danger";
  }

  return (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.username}</td>
      <td>{item.label}</td>
      <td>{item.sublabel}</td>
      <td>{item.priority}</td>
      <td>{item.duration}</td>
      <td>{item.duration_confidence}</td>
      <td>{item.start_date}</td>
      <td>{item.end_date}</td>
      <td>{item.status}</td>
      <td>{item.complexity}</td>
      <td>{item.task_group}</td>
      <td>{item.description}</td>
      <td>{item.ref}</td>
      <td>{item.technical_dependencies}</td>
      <td>{item.temporal_dependencies}</td>
      <td>{item.computed_dependencies}</td>
      <td>
        <div className="progress">
          <div
            className={classes}
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: valNow }}
          ></div>
        </div>
      </td>
      <td>
        <div className="d-flex gap-2">
          <button className="btn btn-success">
            <ArrowDropUpIcon />
          </button>
          <button className="btn btn-success">
            <ArrowDropDownIcon />
          </button>
          <button
            onClick={(event) => handleEditClick(event, item)}
            className="btn btn-primary"
          >
            <EditIcon />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              onDelete(item.id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
