import React from "react";
import {
  render,
  within,
  fireEvent,
  cleanup,
  getByText,
} from "@testing-library/react";
import FormDialog, {
  validateEmailAddress,
  validateFullName,
} from "./FormDialog";

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

    // assert
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
  //   it("Should not call the onSubmit function if any of the fields have a validation error.", () => {
  //     // arrange
  //     const mockSubmit = jest.fn() ;
  //     const { getByText } = render(<FormDialog />);

  //     // act
  //     fireEvent.click(getByText("Submit", "button"));

  //     // assert
  //     expect()
  //   });

  //   it("Should call the onSubmit function if all fields are successfully validated", () => {
  //     // arrange
  //     {
  //     }
  //     // act
  //     // assert
  //   });
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
