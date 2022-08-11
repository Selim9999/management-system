import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
