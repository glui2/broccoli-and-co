import { React, useState } from "react";
import { Button, Typography, useScrollTrigger } from "@material-ui/core";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogForm from "./dialogForm/DialogForm";
import "./Body.scss";

const Body = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const inviteButtonClickHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="body-section">
      <Grid container direction="column" className="title-container">
        <Grid item xs={12}>
          <Box className="title-text-box">
            <Grid container justify="center" spacing={2}>
              <Grid item xs={10}>
                <Typography variant="h3" color="secondary">
                  A better way to enjoy every day.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="secondary">
                  Be the first to know when we launch.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className="invite-button"
                  onClick={inviteButtonClickHandler}
                >
                  Request an Invite
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Dialog className="dialog-box" open={isFormVisible}>
        <DialogTitle className="dialog-title">
          Request an invitation
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="dialog-text">
            Please fill in your details below, and click Send to receive an
            invitation.
          </DialogContentText>
          <DialogForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Body;
