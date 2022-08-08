import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ReadOnlyRow = ({ item, index, onDelete, handleEditClick }) => {
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
      <td>{item.new_column}</td>

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
