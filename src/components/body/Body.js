import { React, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormDialog from "./formdialog/FormDialog";
import SuccessDialog from "./successDialog/SuccessDialog";
import { DialogContext } from "../../contexts/dialogContext";
import "./Body.scss";

const Body = () => {
  return (
    <DialogContext.Consumer>
      {(context) => {
        const { toggleFormDialog } = context;
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
                        onClick={toggleFormDialog}
                      >
                        Request an Invite
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <FormDialog />
            <SuccessDialog />
          </div>
        );
      }}
    </DialogContext.Consumer>
  );
};

export default Body;
