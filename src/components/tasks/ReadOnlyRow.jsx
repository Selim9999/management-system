import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Timeline from "../timeline/timeline";

const ReadOnlyRow = ({ item, index, onDelete, handleEditClick }) => {
  let classes = "progress-bar progress-bar-striped progress-bar-animated bg-";
  let today = new Date();
  let date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  const todate = new Date(date);
  const endDate = new Date(item.end_date);
  const statDate = new Date(item.start_date);
  let valNow =
    ((today.getDate() - statDate.getDate() + 1) /
      (endDate.getDate() - statDate.getDate() + 1)) *
    100;

  if (item.status.toLowerCase() === "in progress" && endDate > todate) {
    classes += "success";
    valNow = valNow.toString() + "%";
  } else if (item.status.toLowerCase() === "not started") {
    classes += "primary";
    valNow = "1%";
  } else if (item.status.toLowerCase() === "issue") {
    classes += "warning";
    valNow = valNow.toString() + "%";
  } else if (item.status === "finished") {
    classes += "success";
    valNow = "100%";
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
        <br />
        <Timeline item={item} />
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
