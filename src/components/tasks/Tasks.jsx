import React, { useEffect, useState } from "react";
import TASKS_DATA from "./TASKS_DATA.json";
import AddIcon from "@mui/icons-material/Add";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { useDispatch, useSelector } from "react-redux";
import "./Tasks.css";
import Pagination from "../../utils/pagination";
import { paginate } from "../../utils/paginate";
const Tasks = () => {
  /////////////////Pagination related////////////////////////////
  const pageSize = 2;
  const totalCount = 8;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const tasks = paginate(TASKS_DATA, currentPage, pageSize);
  /////////////////////////////////////////////////////////

  const [data, setData] = useState(TASKS_DATA);
  const dispatch = useDispatch();
  const reportsList = useSelector((state) => state.reports.value);

  useEffect(() => {
    console.log(reportsList);
  }, [reportsList]);

  useEffect(() => {
    //if reportsList id is equal to data id then make data.blocked = reportsList.blocked and data.issues = reportsList.issues and data.help = reportsList.help
    data.map((item) => {
      for (let i = 0; i < reportsList.length; i++) {
        if (item.id === reportsList[i].id) {
          item.blocked = reportsList[i].blockings;
          item.issues = reportsList[i].issues;
          item.help = reportsList[i].help;
        }
      }
    });
    setData(data);
  }, [reportsList]);

  const [editDataId, setEditDataId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    id: "",
    username: "",
    blocked: "",
    issues: "",
    help: "",
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

  const onDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log(data);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditDataId(item.id);

    const formValues = {
      id: item.id,
      username: item.username,
      blocked: item.blocked,
      issues: item.issues,
      help: item.help,

      label: item.label,
      sublabel: item.sublabel,
      priority: item.priority,
      duration: item.duration,
      duration_confidence: item.duration_confidence,
      start_date: item.start_date,
      end_date: item.end_date,
      status: item.status,
      complexity: item.complexity,
      task_group: item.task_group,
      description: item.description,
      ref: item.ref,
      technical_dependencies: item.technical_dependencies,
      temporal_dependencies: item.temporal_dependencies,
      computed_dependencies: item.computed_dependencies,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedData = {
      id: editDataId,
      username: editFormData.username,
      blocked: editFormData.blocked,
      issues: editFormData.issues,
      help: editFormData.help,
      label: editFormData.label,
      sublabel: editFormData.sublabel,
      priority: editFormData.priority,
      duration: editFormData.duration,
      duration_confidence: editFormData.duration_confidence,
      start_date: editFormData.start_date,
      end_date: editFormData.end_date,
      status: editFormData.status,
      complexity: editFormData.complexity,
      task_group: editFormData.task_group,
      description: editFormData.description,
      ref: editFormData.ref,
      technical_dependencies: editFormData.technical_dependencies,
      temporal_dependencies: editFormData.temporal_dependencies,
      computed_dependencies: editFormData.computed_dependencies,
    };

    const newData = [...data];

    const index = newData.findIndex((item) => item.id === editedData.id);

    newData[index] = editedData;

    setData(newData);
    setEditDataId(null);
  };

  return (
    <div className="tasks container-fluid">
      <div>
        <h1 style={{ color: "#f21344", fontWeight: "900" }}>Tasks</h1>
      </div>
      <div className="react-table mt-5">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Actions
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Id
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Username
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Blocked
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Issues
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Help
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Label
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Sublabel
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Priority
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Duration
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Duration Confidence
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Start Date
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  End Date
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Status
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Complexity
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Task Group
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Description
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  #REF!
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Technical dependencies IDs
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Temporal dependencies IDs
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Computed dependency IDs
                </th>
                <th className="bg-primary-dark text-white p-4 text-center">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody className="bg-primary-light text-primary-dark overflow-scroll">
              {tasks.map((item, index) => (
                <>
                  {editDataId === item.id ? (
                    <EditableRow
                      item={item}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      item={item}
                      data={data}
                      setData={setData}
                      index={index}
                      onDelete={onDelete}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Tasks;
