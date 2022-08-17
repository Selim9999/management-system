import React, { useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Timeline from "../timeline/timeline";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const ReadOnlyRow = ({
  item,
  index,
  onDelete,
  handleEditClick,
  data,
  setData,
}) => {
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [upButtonClicked, setUpButtonClicked] = useState(false);
  const [downButtonClicked, setDownButtonClicked] = useState(false);
  const [indexx, setIndexx] = useState(0);
  const [id, setId] = useState(0);

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
    <>
      <tr key={index}>
        <td>
          <div className="d-flex gap-2">
            <button
              className="btn btn-success"
              onClick={() => {
                setAddTaskForm(true);
                setUpButtonClicked(true);
                setIndexx(index);
                setId(item.id);
                console.log(index);
              }}
            >
              <ArrowDropUpIcon />
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                setAddTaskForm(true);
                setDownButtonClicked(true);
                setIndexx(index);
                setId(item.id);
              }}
            >
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
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.blocked}</td>
        <td>{item.issues}</td>
        <td>{item.help}</td>
        <td>
          <select
            name="label"
            value={item.label}
            onChange={(event) => {
              item.label = event.target.value;
              console.log(data);
            }}
          >
            <option value="DevOps">DevOps</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Deployment">Deployment</option>
          </select>
        </td>
        <td>{item.sublabel}</td>
        <td>
          <select
            name="priority"
            value={item.priority}
            onChange={(event) => {
              item.priority = event.target.value;
              console.log(data);
            }}
          >
            <option value="Urgent">Urgent</option>
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
            <option value="Future">Future</option>
          </select>
        </td>
        <td>{item.duration}</td>
        <td>
          <select
            name="status"
            value={item.status}
            onChange={(event) => {
              item.status = event.target.value;
              console.log(data);
            }}
          >
            <option value="Guess/have no idea">Guess/have no idea</option>
            <option value="Confident">Confident</option>
            <option value="Default">Default</option>
          </select>
        </td>
        <td>{item.start_date}</td>
        <td>{item.end_date}</td>
        <td>
          <select
            name="progress"
            value={item.progress}
            onChange={(event) => {
              item.progress = event.target.value;
              console.log(data);
            }}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </td>
        <td>
          <select
            name="complexity"
            value={item.complexity}
            onChange={(event) => {
              item.complexity = event.target.value;
              console.log(data);
            }}
          >
            <option value="Simple">Simple</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </td>
        <td>{item.task_group}</td>
        <td>{item.description}</td>
        <td>{item.ref}</td>
        <td>
          <select
            name="technical_dependencies"
            value={item.technical_dependencies}
            onChange={(event) => {
              item.technical_dependencies = event.target.value;
              console.log(data);
            }}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </td>
        <td>
          <select
            name="temporal_dependencies"
            value={item.temporal_dependencies}
            onChange={(event) => {
              item.temporal_dependencies = event.target.value;
              console.log(data);
            }}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </td>
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
      </tr>
      {addTaskForm === true ? (
        <AddTaskForm
          title="Add Task"
          data={data}
          setData={setData}
          indexx={indexx}
          id={id}
          setAddTaskForm={setAddTaskForm}
          upButtonClicked={upButtonClicked}
          downButtonClicked={downButtonClicked}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ReadOnlyRow;
