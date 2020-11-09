import React from "react";
import {
  render,
  waitFor,
  fireEvent,
  cleanup,
  getByText,
} from "@testing-library/react";
import FormDialog, {
  validateEmailAddress,
  validateFullName,
} from "./FormDialog";
import DialogContextProvider from "../../../contexts/dialogContext";
import axios from "axios";

jest.mock("axios");

describe("FormDialog", () => {
  afterEach(cleanup);

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

  // test for bad input that displays red outline and red text
  // no text no  red outline
  // bad input
  // red
  // then good input
  // no red

  it("Should not send POST request if any of the fields have a validation error.", async () => {
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

  it("Should send POST request if all fields have been successfully validated.", async () => {
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
  //   it("Should change to the next dialog if the API returns an OK", () => {
  //     // arrange
  //     // act
  //     // assert
  //   });
  //   it("Should not change to the next dialog if the API returns an ERROR", () => {
  //     // arrange
  //     // act
  //     // assert
  //   });
});
