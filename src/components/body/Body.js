import { React, useState } from "react";
import { Button, Typography, LinearProgress } from "@material-ui/core";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import "./Body.scss";

const Body = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const inviteButtonClickHandler = () => {
    setIsFormVisible(true);
  };

  const validateFullName = (fullName) => {
    var errorMessage = "";
    if (!fullName) {
      errorMessage = "Please enter a name.";
    } else if (!/^[a-zA-Z\s]{3,}$/.test(fullName)) {
      errorMessage =
        "Please enter at least 3 characters for your name, using only alphabetical letters and spaces.";
    }
    return errorMessage;
  };

  const validateEmailAddress = (emailAddress, confirmEmailAddress = null) => {
    var errorMessage = "";
    if (confirmEmailAddress && emailAddress !== confirmEmailAddress) {
      errorMessage = "Email addresses do not match.";
    } else if (!emailAddress) {
      errorMessage = "Please enter an email address.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress)
    ) {
      errorMessage =
        "Please enter an email address in the format 'email@address.com'.";
    }
    return errorMessage;
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
            Please fill in your details below, and click Submit to receive an
            invitation.
          </DialogContentText>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              confirmEmail: "",
            }}
            validate={(values) => {
              const errors = {};
              errors.fullName = validateFullName(values.fullName);
              errors.email = validateEmailAddress(values.email);
              errors.confirmEmail = validateEmailAddress(
                values.confirmEmail,
                values.email
              );

              const errorExists = Object.values(errors).some(
                (value) => value !== ""
              );

              if (errorExists) {
                return errors;
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("POST values");
              axios
                .post(
                  "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
                  { name: values.fullName, email: values.email }
                )
                .then((response) => {
                  setIsFormVisible(false); // change to a thank you modal
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
              setSubmitting(false);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form className="invite-form">
                <Field
                  component={TextField}
                  variant="outlined"
                  size="small"
                  margin="normal"
                  name="fullName"
                  type="name"
                  label="Full Name"
                  fullWidth
                />
                <Field
                  component={TextField}
                  variant="outlined"
                  size="small"
                  margin="normal"
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                />
                <Field
                  component={TextField}
                  variant="outlined"
                  size="small"
                  margin="normal"
                  name="confirmEmail"
                  type="email"
                  label="Confirm Email"
                  fullWidth
                />
                {isSubmitting && <LinearProgress />}
                <div className="submit-button">
                  <Button
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Body;
