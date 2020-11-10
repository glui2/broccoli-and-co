import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Body from "./Body";
import DialogContextProvider from "../../contexts/dialogContext";

describe("When the landing page is visible to the user", () => {
  afterEach(cleanup);

  // ----------------  integration tests ---------------- //

  it("The form pop up dialog should show when 'Request an Invite' is clicked", () => {
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
