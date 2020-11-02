import { React, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import "./Body.scss";

const Body = () => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const buttonClickHandler = () => { 
        console.log(isFormVisible);
        setIsFormVisible(true); 
    }

    return (
        <div className="body-section">
            <Grid container direction="column" className="title-container">
                <Grid item xs={12}>
                    <Box className="title-text-box">
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                <Typography variant="h3" color="secondary">A better way to enjoy every day.</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" color="secondary">Be the first to know when we launch.</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" className="inviteButton" onClick={buttonClickHandler}>Request an Invite</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Body; 