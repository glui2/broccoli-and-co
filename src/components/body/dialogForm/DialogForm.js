import { React } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const DialogForm = () => {
  const validateFullName = (fullName) => {
    var errorMessage = "";
    if (!fullName) {
      errorMessage = "Please enter a name.";
    } else if (!/^[a-zA-Z\s]{3,}$/.test(fullName)) {
      errorMessage =
        "Please enter at least 3 characters for your name, containing only alphabetical letters and spaces.";
    }
    return errorMessage;
  };

  const validateEmailAddress = (emailAddress, confirmEmailAddress = null) => {
    var errorMessage = "";
    if (confirmEmailAddress && emailAddress !== confirmEmailAddress) {
      errorMessage = "Email addresses do not match.";
      console.log("dont match");
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
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        confirmEmail: "",
      }}
      validate={(values) => {
        const errors = {};
        errors.name = validateFullName(values.fullName);
        errors.email = validateEmailAddress(values.email);
        errors.confirmEmail = validateEmailAddress(values.confirmEmail);

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
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
          <Button variant="contained" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DialogForm;
