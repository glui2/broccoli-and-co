import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import Body from "./Body";

describe("Body", () => {
  it("Should display form pop up when 'Request an Invite' is clicked", () => {
    // arrange
    const { getByText } = render(<Body />);

    // act
    fireEvent.click(getByText("Request an Invite", "button"));

    // assert
    expect(getByText("Submit", "button")).toBeVisible();
  });
  it("Should display the error message 'Please enter a name' error message when Full Name field is left blank", () => {
    // arrange
    // act
    // assert
  });
  it("Should display the error message 'Please enter at least 3 characters for your name, using only alphabetical letters and spaces.' when a full name is entered in an incorrect format.", () => {
    // arrange
    // act
    // assert
  });
  it("Should display the error message 'Please enter an email address' when Email field is left blank", () => {
    // arrange
    // act
    // assert
  });
  it("Should display the error message 'Please enter an email address in the format 'email@address.com'' when an email is entered in an incorrect format.", () => {
    // arrange
    // act
    // assert
  });
  it("Should display the error message 'Please enter an email address' when Confirm Email field is left blank", () => {
    // arrange
    // act
    // assert
  });
  it("Should not submit the form if validation returns an error", () => {
    // arrange
    // act
    // assert
  });
  it("Should change to the next dialog if the API returns an OK", () => {
    // arrange
    // act
    // assert
  });
  it("Should not change to the next dialog if the API returns an ERROR", () => {
    // arrange
    // act
    // assert
  });
});
