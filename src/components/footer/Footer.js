import React from "react";
import { Box, Typography } from "@material-ui/core";
import "./Footer.scss";

const Footer = () => {

    return (
        <Box className="footer" bgcolor="secondary.main">
            <Typography variant="body2">Made with 💚 in Melbourne. </Typography>
            <Typography variant="body2">&#169; 2020 Broccoli &amp; Co. All rights reserved. </Typography>
        </Box>
    )
}

export default Footer; 