import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TaskForm from "../taskform/TaskForm";
import TaskGroup from "../taskgroup/TaskGroup";
import PersonalProject from "../personalproject/PersonalProject";
import NewGroupProject from "../newgroupproject/NewGroupProject";
import AssignessForm from "../assigneesform/AssignessForm";
import UsecaseForm from "../usecaseform/UsecaseForm";

const Home = () => {
  const [openTaskForm, setTaskForm] = useState(false);
  const [openTaskGroup, setTaskGroup] = useState(false);
  const [openPersonalProjet, setPersonalProjet] = useState(false);
  const [openGroupProject, setGroupProject] = useState(false);
  const [openAssignees, setAssignees] = useState(false);
  const [openUsecaseForm, setUsecaseForm] = useState(false);
  return (
    <>
      <div className="home container-fluid">
        <div>
          <h1 style={{ color: "#f21344", fontWeight: "900" }}>Home</h1>
        </div>
        <div className="add-buttons d-flex gap-3">
          <div className="add-task">
            <button
              style={{ backgroundColor: "#a6a5a4", color: "white" }}
              className="btn"
              onClick={() => setTaskForm(true)}
            >
              <AddIcon className="me-3" /> New Task
            </button>
          </div>
          <div className="add-task-group">
            <button
              style={{ backgroundColor: "#a6a5a4", color: "white" }}
              className="btn"
              onClick={() => setTaskGroup(true)}
            >
              <AddIcon className="me-3" /> New Task Group
            </button>
          </div>
          <div className="add-personal-project">
            <button
              style={{ backgroundColor: "#a6a5a4", color: "white" }}
              className="btn"
              onClick={() => setPersonalProjet(true)}
            >
              <AddIcon className="me-3" /> New Personal Project
            </button>
          </div>
          <div className="add-group-project">
            <button
              style={{ backgroundColor: "#a6a5a4", color: "white" }}
              className="btn"
              onClick={() => setGroupProject(true)}
            >
              <AddIcon className="me-3" /> New Group Project
            </button>
          </div>
          <div className="add-assignees">
            <button
              style={{ backgroundColor: "#a6a5a4", color: "white" }}
              className="btn"
              onClick={() => setAssignees(true)}
            >
              <AddIcon className="me-3" /> New Assignees
            </button>
          </div>
          <div className="add-usecase">
            <button
              style={{ backgroundColor: "#a6a5a4", color: "white" }}
              className="btn"
              onClick={() => setUsecaseForm(true)}
            >
              <AddIcon className="me-3" /> New Use Case
            </button>
          </div>
        </div>
      </div>
      {openTaskForm === true ? (
        <TaskForm title="Task Form" setTaskForm={setTaskForm} />
      ) : (
        ""
      )}
      {openTaskGroup === true ? (
        <TaskGroup title="Task Group" setTaskGroup={setTaskGroup} />
      ) : (
        ""
      )}
      {openPersonalProjet === true ? (
        <PersonalProject
          title="Personal Project"
          setPersonalProjet={setPersonalProjet}
        />
      ) : (
        ""
      )}
      {openGroupProject === true ? (
        <NewGroupProject
          title="Group Project"
          setGroupProject={setGroupProject}
        />
      ) : (
        ""
      )}
      {openAssignees === true ? (
        <AssignessForm title="Assignees" setAssignees={setAssignees} />
      ) : (
        ""
      )}
      {openUsecaseForm === true ? (
        <UsecaseForm title="Use Case" setUsecaseForm={setUsecaseForm} />
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
