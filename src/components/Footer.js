import React from "react";
import { Box, Typography } from "@material-ui/core";

const Footer = () => {

    return (
        <Box className="footer" bgcolor="primary.main">
            <Typography variant="body2">Made with 💚 in Melbourne. </Typography>
            <Typography variant="body2">&#169; 2020 Broccoli &amp; Co. All rights reserved. </Typography>
        </Box>
    )
}

export default Footer; 