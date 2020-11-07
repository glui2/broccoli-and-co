import { React } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { DialogContext } from "../../../contexts/dialogContext";

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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress)) {
    errorMessage =
      "Please enter an email address in the format 'email@address.com'.";
  }
  return errorMessage;
};

const FormDialog = () => {
  return (
    <DialogContext.Consumer>
      {(context) => {
        const { isFormDialogVisible, toggleFormDialog } = context;
        return (
          <Dialog className="dialog-box" open={isFormDialogVisible}>
            <DialogTitle className="dialog-title">
              Request an invitation
            </DialogTitle>
            <DialogContent>
              <DialogContentText className="dialog-text">
                Please fill in your details below, and click Submit to receive
                an invitation.
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
                onSubmit={(values, { setSubmitting, setErrors, props }) => {
                  console.log("POST values");
                  axios
                    .post(
                      "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
                      { name: values.fullName, email: values.email }
                    )
                    .then((response) => {
                      // change to a thank you modal
                      toggleFormDialog(isFormDialogVisible);
                      console.log(response);
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      console.log(error.message);
                      setErrors({
                        confirmEmail: error.response.data.errorMessage,
                      });
                      setSubmitting(false);
                    });
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
        );
      }}
    </DialogContext.Consumer>
  );
};

export default FormDialog;
