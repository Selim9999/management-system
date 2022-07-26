import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick1 = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    navigate("tasks");
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    navigate("/inbox");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div
          style={{ fontWeight: "bold" }}
          className="sidebar-header-title ms-3 text-center mt-2"
        >
          <h1 className="mt-3" style={{ fontWeight: "900" }}>
            Hippo Labs
          </h1>
        </div>
      </div>
      <hr style={{ marginTop: "2rem" }} />
      <div className="sidebar-body">
        <div className="sidebar-body-nav">
          <div onClick={handleClick1} className="sidebar-body-nav-item">
            <div className="sidebar-body-nav-item-icon mb-1">
              <HomeIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="sidebar-body-nav-item-title">
              <h3 style={{ fontSize: "2rem", fontWeight: "900" }}>Home</h3>
            </div>
          </div>
          <div onClick={handleClick2} className="sidebar-body-nav-item">
            <div className="sidebar-body-nav-item-icon mb-1">
              <AssignmentIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="sidebar-body-nav-item-title">
              <h3 style={{ fontSize: "2rem", fontWeight: "900" }}>Tasks</h3>
            </div>
          </div>

          <div onClick={handleClick3} className="sidebar-body-nav-item">
            <div className="sidebar-body-nav-item-icon mb-1">
              <InboxIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="sidebar-body-nav-item-title">
              <h3 style={{ fontSize: "2rem", fontWeight: "900" }}>Inbox</h3>
            </div>
          </div>
          <div className="sidebar-body-nav-item">
            <div className="sidebar-body-nav-item-icon mb-1">
              <GroupsIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="sidebar-body-nav-item-title">
              <h3 style={{ fontSize: "2rem", fontWeight: "900" }}>Teams</h3>
            </div>
          </div>
          <div className="sidebar-body-nav-item">
            <div className="sidebar-body-nav-item-icon mb-1">
              <AccountTreeIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="sidebar-body-nav-item-title">
              <h3 style={{ fontSize: "2rem", fontWeight: "900" }}>Projects</h3>
            </div>
          </div>
          <div className="sidebar-body-nav-item">
            <div className="sidebar-body-nav-item-icon mb-1">
              <AssessmentIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="sidebar-body-nav-item-title">
              <h3 style={{ fontSize: "2rem", fontWeight: "900" }}>Reports</h3>
            </div>
          </div>
          <div className="sidebar-body-nav-item">
            <div className="sidebar-body-nav-item-icon mb-1"></div>
            <div className="sidebar-body-nav-item-title">
              <h3 style={{ fontSize: "2rem", fontWeight: "900" }}>...More</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
