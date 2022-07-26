import React from "react";
import "./Navbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="credentials">
          <img
            className="avatar me-3"
            src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
            alt="avatar"
            data-v-3e3e61f7=""
          />
          <h3 style={{ fontWeight: "900", color: "#2a2b2b" }} className="mt-2">
            Profile Name
          </h3>
        </div>
        <div className="inputs d-flex gap-3">
          <div className="search">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ backgroundColor: "#EFEFEF" }}
            />
          </div>
          <div className="settings">
            <SettingsIcon style={{ fontSize: "2rem", color: "#2a2b2b" }} />
          </div>
          <div className="account">
            <AccountBoxIcon style={{ fontSize: "2rem", color: "#2a2b2b" }} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
