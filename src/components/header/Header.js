import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Icon, Typography } from "@material-ui/core";
import Logo from "../../images/broccoli_logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <AppBar className="header" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="primary" className="company-name">
            Broccoli &amp; Co.
          </Typography>
          <div className="icon-logo">
            <img src={Logo}></img>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
