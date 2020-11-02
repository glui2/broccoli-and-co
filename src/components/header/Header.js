import React from "react";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import "./Header.css";

const Header = () => {

    return (
        <div className="header">
            <AppBar 
                className="header" 
                color="primary"
            >
                <Toolbar>
                    <Typography variant="h6" color="secondary">Broccoli &amp; Co.</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header; 