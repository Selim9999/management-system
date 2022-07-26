import React from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const { title, setTaskForm } = props;

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
              onClick={() => setTaskForm(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-3">
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-name">Task Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="task-name"
                  placeholder="Task Name"
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-description">Task Description:</label>
                <textarea
                  className="form-control"
                  id="task-description"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="duration">Duration:</label>
                <div className="duration-inputs">
                  <div className="duration-input">
                    <input
                      type="number"
                      className="form-control"
                      id="duration-hours"
                      placeholder="Hours"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="duration">Dependencies:</label>
                <div className="dependencies-inputs">
                  <div className="dependencies-input">
                    <input
                      type="text"
                      className="form-control"
                      id="dependencies-name"
                      placeholder="Task Name"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-priority">Task Priority:</label>
                <select className="form-control" id="task-priority">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-status">Task Status:</label>
                <select className="form-control" id="task-status">
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-assignee">Task Assignee:</label>
                <select className="form-control" id="task-assignee">
                  <option>John Doe</option>
                  <option>Jane Doe</option>
                  <option>Jack Doe</option>
                </select>
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-start-date">Task Start Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="task-start-date"
                />
              </div>
              <div className="form-group d-grid gap-1">
                <label htmlFor="task-end-date">Task End Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="task-end-date"
                />
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

export default TaskForm;
