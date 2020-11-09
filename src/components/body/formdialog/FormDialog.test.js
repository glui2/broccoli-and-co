import React from "react";
import {
  render,
  within,
  fireEvent,
  cleanup,
  getByText,
} from "@testing-library/react";
import FormDialog from "./FormDialog";

describe("FormDialog", () => {
  afterEach(cleanup);

  it("Should not call the onSubmit function if any of the fields have a validation error.", () => {
    // arrange
    const { getByText } = render(<FormDialog />);

    // act
    fireEvent.click(getByText("Submit", "button"));
  });

  it("Should call the onSubmit function if all fields are successfully validated", () => {
    // arrange
    {
    }
    // act
    // assert
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
