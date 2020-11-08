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
});
