import React from "react";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";

const Body = () => {

    return (
        <div className="body-section">
            <Grid container direction="column" className="title-container">
                <Grid item xs={12}>
                    <Box className="title-text-box">
                        <Grid container justify="center">
                            <Grid item>
                                <Typography variant="h3" color="primary">A better way to enjoy every day.</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" color="primary">Be the first to know when we launch.</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Body; 