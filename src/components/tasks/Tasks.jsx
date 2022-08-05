import React, { useEffect, useMemo, useState } from "react";
import TASKS_DATA from "./TASKS_DATA.json";
import { useTable, useRowSelect } from "react-table";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "./Tasks.css";

const Tasks = () => {
  const COLUMNS = [
    {
      Header: "Id",
      Max_width: 100,
      Footer: "Id",
      accessor: "id",
    },
    {
      Header: "Username",
      Footer: "Id",
      accessor: "task_id",
    },
    {
      Header: "Label",
      Footer: "Label",
      accessor: "label",
    },
    {
      Header: "Sublabel",
      Footer: "Sublabel",
      accessor: "sublabel",
    },
    {
      Header: "Priority",
      Footer: "Priority",
      accessor: "priority",
    },
    {
      Header: "Duration",
      Footer: "Duration",
      accessor: "duration",
    },
    {
      Header: "Duration Confidence",
      Footer: "Duration Confidence",
      accessor: "duration_confidence",
    },
    {
      Header: "Start Date",
      Footer: "Start Date",
      accessor: "start_date",
    },
    {
      Header: "End Date",
      Footer: "End Date",
      accessor: "end_date",
    },
    {
      Header: "Status",
      Footer: "Status",
      accessor: "status",
    },

    {
      Header: "Complexity",
      Footer: "Complexity",
      accessor: "complexity",
    },
    {
      Header: "Task Group",
      Footer: "Task Group",
      accessor: "task_Group",
    },
    {
      Header: "Description",
      Footer: "Description",
      accessor: "description",
    },
    {
      Header: "#REF!",
      Footer: "#REF!",
      accessor: "ref",
    },
    {
      Header: "Technical \ndependencies\nIDs",
      Footer: "Technical \ndependencies\nIDs",
      accessor: "Technical_\ndependencies\nIDs",
    },
    {
      Header: "Temporal \ndependencies\nIDs",
      Footer: "Temporal \ndependencies\nIDs",
      accessor: "Temporal_\ndependencies\nIDs",
    },
    {
      Header: "Computed dependency IDs",
      Footer: "Computed dependency IDs",
      accessor: "Computed_dependency_IDs",
    },
  ];

  const columns = useMemo(() => COLUMNS, []);

  let data = useMemo(() => TASKS_DATA, []);

  const [bassa, setBassa] = useState(TASKS_DATA);

  // when delete button is clicked, delete the row from the table

  const deleteRow = (id) => {
    const newData = data.filter((row) => row.id !== id);

    data = newData;

    setBassa(data);

    console.log(data);
  };

  //display the table without the deleted row

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        ...columns,
        {
          id: "control",
          Header: () => null,
          Cell: ({ row }) => {
            return (
              <div className="controls d-flex gap-3">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    console.log();
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    console.log(row.original.id);
                    deleteRow(row.original.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            );
          },
        },
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="tasks container-fluid">
      <div>
        <h1 style={{ color: "#f21344", fontWeight: "900" }}>Tasks</h1>
      </div>
      <div className="add-button">
        <button
          style={{ backgroundColor: "#a6a5a4", color: "white" }}
          className="btn"
        >
          <AddIcon className="me-3" /> New Task
        </button>
      </div>
      <div className="react-table mt-5">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="bg-primary-dark text-white p-4 text-center"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-primary-light text-primary-dark overflow-scroll"
          >
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
