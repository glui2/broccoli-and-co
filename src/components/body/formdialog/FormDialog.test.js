import React from "react";
import { render, waitFor, fireEvent, cleanup } from "@testing-library/react";
import FormDialog, {
  validateEmailAddress,
  validateFullName,
} from "./FormDialog";
import DialogContextProvider from "../../../contexts/dialogContext";
import axios from "axios";
import SuccessDialog from "../successDialog/SuccessDialog";

jest.mock("axios");

describe("When the FormDialog is visible to the user", () => {
  afterEach(cleanup);

  // ----------------  unit tests ---------------- //

  it("validateFullName function should return 'Please enter at least 3 characters for your name, using only alphabetical letters and spaces.' error if name input is less than 3 characters long", () => {
    // arrange
    const testName = "Na";

    // act
    const error = validateFullName(testName);

    // assert
    expect(error).toBe(
      "Please enter at least 3 characters for your name, using only alphabetical letters and spaces."
    );
  });
  it("validateFullName function should return 'Please enter a name.' error if name input is empty", () => {
    // arrange
    const testName = "";

    // act
    const error = validateFullName(testName);

    // assert;
    expect(error).toBe("Please enter a name.");
  });
  it("validateEmailAddress function should return 'Email addresses do not match.' error if inputs for Email and confirmEmail aren't identical.", () => {
    // arrange
    const email = "test@email.com";
    const confirmEmail = "test@confirmemail.com";

    // act
    const error = validateEmailAddress(email, confirmEmail);

    // assert
    expect(error).toBe("Email addresses do not match.");
  });
  it("validateEmailAddress function should return 'Please enter an email address in the format 'email@address.com'.' error if the supplied email isn't in the correct email format.", () => {
    // arrange
    const email = "corrupt@emailcom";

    // act
    const error = validateEmailAddress(email);

    // assert
    expect(error).toBe(
      "Please enter an email address in the format 'email@address.com'."
    );
  });
  it("validateEmail function should return 'Please enter an email address.' error if email input is empty", () => {
    // arrange
    const testEmail = "";

    // act
    const error = validateEmailAddress(testEmail);

    // assert
    expect(error).toBe("Please enter an email address.");
  });

  it("The form should NOT send POST request if any of the fields have a validation error.", async () => {
    // arrange
    const { getByText } = render(
      <DialogContextProvider
        initialState={{
          isSuccessDialogVisible: false,
          isFormDialogVisible: true,
        }}
      >
        <FormDialog />
      </DialogContextProvider>
    );
    const data = { Response: "Registered" };
    axios.post.mockImplementationOnce(() => Promise.resolve(data));

    // act (try to send empty form)
    fireEvent.click(getByText("Submit", "button"));

    // assert
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(0);
    });
  });

  it("The form SHOULD send POST request if all fields have been successfully validated.", async () => {
    // arrange
    const { getByText, getByTestId } = render(
      <DialogContextProvider
        initialState={{
          isSuccessDialogVisible: false,
          isFormDialogVisible: true,
        }}
      >
        <FormDialog />
      </DialogContextProvider>
    );
    const data = { Response: "Registered" };
    const fullName = getByTestId("nameField");
    const email = getByTestId("emailField");
    const confirmEmail = getByTestId("confirmEmailField");

    axios.post.mockImplementationOnce(() => Promise.resolve(data));

    // act
    fireEvent.change(fullName, { target: { value: "Foo Bar" } });
    fireEvent.change(email, { target: { value: "address@email.com" } });
    fireEvent.change(confirmEmail, { target: { value: "address@email.com" } });
    fireEvent.click(getByText("Submit", "button"));

    // assert
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
    });
  });

  // ----------------  integration test ---------------- //

  it("The form dialog should close and success dialog should show if the form is submitted successfully", async () => {
    // arrange
    const { getByText, getByTestId } = render(
      <DialogContextProvider
        initialState={{
          isSuccessDialogVisible: false,
          isFormDialogVisible: true,
        }}
      >
        <FormDialog />
        <SuccessDialog />
      </DialogContextProvider>
    );
    const data = { Response: "Registered" };
    const fullName = getByTestId("nameField");
    const email = getByTestId("emailField");
    const confirmEmail = getByTestId("confirmEmailField");
    axios.post.mockImplementationOnce(() => Promise.resolve(data));

    // act
    fireEvent.change(fullName, { target: { value: "Foo Bar" } });
    fireEvent.change(email, { target: { value: "address@email.com" } });
    fireEvent.change(confirmEmail, { target: { value: "address@email.com" } });
    fireEvent.click(getByText("Submit", "button"));

    // assert
    await waitFor(() => {
      expect(getByText("Request an invitation")).not.toBeVisible();
    });

    await waitFor(() => {
      expect(getByText("All done!")).toBeVisible();
    });
  });
});
