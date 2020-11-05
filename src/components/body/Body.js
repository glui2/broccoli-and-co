import { React, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Body.scss";

const Body = () => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const buttonClickHandler = () => { 
        console.log(isFormVisible);
        setIsFormVisible(true); 
    }

    const submitButtonHandler = () => {
        // POST request to https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth

        setIsFormVisible(false);
    }

    return (
        <div className="body-section">
            <Grid container direction="column" className="title-container">
                <Grid item xs={12}>
                    <Box className="title-text-box">
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={10}>
                                <Typography variant="h3" color="secondary">A better way to enjoy every day.</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" color="secondary">Be the first to know when we launch.</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" className="invite-button" onClick={buttonClickHandler}>Request an Invite</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Dialog className="dialog-box" open={isFormVisible}>
                <DialogTitle className="dialog-title">Request an invitation</DialogTitle>
                <DialogContent>
                    <DialogContentText className="dialog-text">Please fill in your details below, and click Send to receive an invitation.</DialogContentText>
                    <TextField variant="outlined" label="Full name" margin="normal" size="small" fullWidth></TextField>
                    <TextField variant="outlined" label="Email" margin="normal" size="small" type="email" fullWidth></TextField>
                    <TextField variant="outlined" label="Confirm Email" margin="normal" type="email" size="small" fullWidth></TextField>
                </DialogContent>
                <DialogActions className="dialog-buttons">
                    <Button variant="contained" className="submit-button" onClick={submitButtonHandler}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Body; 