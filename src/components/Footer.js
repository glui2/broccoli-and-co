import React from "react";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const Footer = () => {

    return (
        <div className="footer">
            <Typography>Made with love in Melbourne. </Typography>
            <Typography>&#169; 2020 Broccoli &amp; Co. All rights reserved. </Typography>
        </div>
    )
}

export default Footer; 