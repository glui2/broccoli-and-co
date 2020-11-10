import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SuccessDialog from "./SuccessDialog";
import DialogContextProvider from "../../../contexts/dialogContext";

describe("When the success dialog is visible to the user", () => {
  afterEach(cleanup);

  // ----------------  integration test ---------------- //

  it("The success dialog should close after clicking the 'OK' button", () => {
    // arrange
    const { getByText } = render(
      <DialogContextProvider
        initialState={{
          isSuccessDialogVisible: true,
          isFormDialogVisible: false,
        }}
      >
        <SuccessDialog />
      </DialogContextProvider>
    );

    // act
    fireEvent.click(getByText("OK", "span"));

    // assert
    expect(getByText("All done!")).not.toBeVisible();
  });
});
