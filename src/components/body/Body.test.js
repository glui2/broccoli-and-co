import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import Body from "./Body";
import DialogContextProvider from "../../contexts/dialogContext";

describe("Body", () => {
  it("Should display form pop up when 'Request an Invite' is clicked", () => {
    // arrange
    const { getByText } = render(
      <DialogContextProvider
        initialState={{
          isSuccessDialogVisible: false,
          isFormDialogVisible: false,
        }}
      >
        <Body />
      </DialogContextProvider>
    );

    // act
    fireEvent.click(getByText("Request an Invite", "button"));

    // assert
    expect(getByText("Submit", "button")).toBeVisible();
  });
});
