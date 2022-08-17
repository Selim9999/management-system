import { format } from "date-fns";
import React from 'react';

export const COLUMNS = [
  {
    Header: "Created",
    accessor: "created",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Creator",
    accessor: "creator",
  },
  {
    Header: "Owner",
    accessor: "owner",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Project",
    accessor: "project",
  },
  {
    Header: "",
    accessor: "details",
    Cell: ({ value }) => (
      <button
        style={{
          backgroundColor: "#A4C2F4",
          border: "none",
          color: "white",
          borderRadius: "5px",
          width: "60%",
        }}
      >
        Details
      </button>
    ),
  },
];
