import React from "react";
import {
  render,
  within,
  fireEvent,
  cleanup,
  getByText,
} from "@testing-library/react";
import App from "../../../App";
import SuccessDialog from "./SuccessDialog";
import DialogContextProvider from "../../../contexts/dialogContext";

describe("SuccessDialog", () => {
  afterEach(cleanup);

  it("Should close the dialog after clicking the 'OK' button", () => {
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
