import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const AddTaskForm = ({
  title,
  setAddTaskForm,
  upButtonClicked,
  downButtonClicked,
  data,
  setData,
  id,
  indexx,
}) => {
  const [newArrayData, setNewArrayData] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    username: "",
    label: "",
    sublabel: "",
    priority: "",
    duration: "",
    duration_confidence: "",
    start_date: "",
    end_date: "",
    status: "",
    complexity: "",
    task_group: "",
    description: "",
    ref: "",
    technical_dependencies: "",
    temporal_dependencies: "",
    computed_dependencies: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };

    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    let idRow;

    if (upButtonClicked === true) {
      idRow = id - 1;
    } else if (downButtonClicked === true) {
      idRow = id + 1;
    }

    const newData = {
      id: nanoid(),
      username: addFormData.username,
      label: addFormData.label,

      sublabel: addFormData.sublabel,
      priority: addFormData.priority,
      duration: addFormData.duration,
      duration_confidence: addFormData.duration_confidence,
      start_date: addFormData.start_date,
      end_date: addFormData.end_date,
      status: addFormData.status,
      complexity: addFormData.complexity,
      task_group: addFormData.task_group,
      description: addFormData.description,
      ref: addFormData.ref,
      technical_dependencies: addFormData.technical_dependencies,
      temporal_dependencies: addFormData.temporal_dependencies,
      computed_dependencies: addFormData.computed_dependencies,
    };

    if (upButtonClicked === true) {
      newArrayData.splice(indexx, 0, newData);
    } else if (downButtonClicked === true) {
      newArrayData.splice(indexx + 1, 0, newData);
    }

    setData(newArrayData);
    setAddTaskForm(false);
  };

  useEffect(() => {
    console.log(id);
  }, [id]);

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
              onClick={() => setAddTaskForm(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              <div className="form-group d-grid gap-1">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="label">Label:</label>
                <select
                  name="label"
                  id=""
                  className="form-control"
                  onChange={handleAddFormChange}
                >
                  <option value="">Select Label</option>
                  <option value="Development">Development</option>
                  <option value="Testing">Testing</option>
                  <option value="Deployment">Deployment</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="sublabel">Sublabel:</label>
                <input
                  type="text"
                  name="sublabel"
                  className="form-control"
                  id="sublabel"
                  placeholder="Sublabel"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="priority">Priority:</label>
                <select
                  name="priority"
                  id=""
                  className="form-control"
                  onChange={handleAddFormChange}
                >
                  <option value="">Select Priority</option>
                  <option value="Urgent">Urgent</option>
                  <option value="High Priority">High Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value="Low Priority">Low Priority</option>
                  <option value="Future">Future</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="duration">Duration:</label>
                <input
                  type="text"
                  name="duration"
                  className="form-control"
                  id="duration"
                  placeholder="Duration"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="Duration-confidence">
                  Duration Confidence:
                </label>
                <select
                  name="duration_confidence"
                  id=""
                  className="form-control"
                  onChange={handleAddFormChange}
                >
                  <option value="">Select Duration Confidence</option>
                  <option value="Confident">Confident</option>
                  <option value="Default">Default</option>
                  <option value="Guess/have no idea">Guess/have no idea</option>
                  <option value="Not Confident">Not Confident</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="start-date">Start Date:</label>
                <input
                  type="date"
                  name="start_date"
                  className="form-control"
                  id="start-date"
                  placeholder="Start Date"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="end-date">End Date:</label>
                <input
                  type="date"
                  name="end_date"
                  className="form-control"
                  id="end-date"
                  placeholder="End Date"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="status">Status:</label>
                <select
                  name="status"
                  id=""
                  className="form-control"
                  onChange={handleAddFormChange}
                >
                  <option value="">Select Status</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="complexity">Complexity:</label>
                <select
                  name="complexity"
                  id=""
                  className="form-control"
                  onChange={handleAddFormChange}
                >
                  <option value="">Select Complexity</option>
                  <option value="Simple">Simple</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-group">Task Group:</label>
                <input
                  type="text"
                  name="task_group"
                  className="form-control"
                  id="task-group"
                  placeholder="Task Group"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows="3"
                  placeholder="Description"
                  onChange={handleAddFormChange}
                ></textarea>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="ref">#REF!:</label>
                <input
                  type="text"
                  name="ref"
                  className="form-control"
                  id="ref"
                  placeholder="#REF!"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="technical_depencies">
                  Technical \ndependencies\nIDs:
                </label>
                <select
                  name="technical_dependencies"
                  id=""
                  className="form-control"
                  onChange={handleAddFormChange}
                >
                  <option value="">Select Technical Dependencies</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="temporal_depencies">
                  Temporal_\ndependencies\nIDs:
                </label>
                <select
                  name="temporal_dependencies"
                  id=""
                  className="form-control"
                  onChange={handleAddFormChange}
                >
                  <option value="">Select Temporal Dependencies</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="personal-project-title">
                  Computed_dependency_IDs:
                </label>
                <input
                  type="text"
                  name="computed_dependencies"
                  className="form-control"
                  id="computed-dependency"
                  placeholder="Computed_dependency_IDs"
                  onChange={handleAddFormChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleAddFormSubmit}
              type="button"
              className="btn btn-primary"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
