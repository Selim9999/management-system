import { set } from "date-fns";
import React, { useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./Columns";
import DATA from "./Data.json";
import "./Usecase.css";
const Usecase = () => {
  const [sorted, setSorted] = useState(false);

  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
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
    <div className="usecase">
      <div className="container-fluid d-grid gap-4">
        <h3 className="mt-3">Use cases</h3>
        <div className="inputs d-flex gap-2">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            style={{ width: "15%", backgroundColor: "#EFEFEF" }}
          />
          <div className="dropdown-filters">
            <select
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              style={{ backgroundColor: "#EFEFEF" }}
            >
              <option>Filters</option>
              <option>Use Case 1</option>
              <option>Use Case 2</option>
              <option>Use Case 3</option>
            </select>
          </div>
          <div className="dropdown-sort">
            <button
              style={{ backgroundColor: "#EFEFEF" }}
              type="button"
              className="btn"
              onClick={(e) => {
                //make the button sort the table adc and desc
                setSorted(!sorted);

                if (sorted) {
                  tableInstance.setSortBy([{ id: "name", desc: true }], {
                    manual: true,
                  });
                } else {
                  tableInstance.setSortBy([{ id: "name", asc: true }], {
                    manual: true,
                  });
                }
              }}
            >
              Sort
            </button>
          </div>
        </div>
        <div className="table"></div>
        <table>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr id="tr" {...row.getRowProps()}>
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

export default Usecase;
