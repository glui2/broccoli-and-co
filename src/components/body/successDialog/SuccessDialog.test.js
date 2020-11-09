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
import { DialogContext } from "../../../contexts/dialogContext";

describe("SuccessDialog", () => {
  afterEach(cleanup);

  it("Should close the dialog after clicking the 'OK' button", () => {
    // arrange
    const { getByText } = render(
      <App>
        <DialogContext.Provider
          value={{
            ...this.state,
            toggleSuccessDialog: true,
          }}
        >
          <SuccessDialog />
        </DialogContext.Provider>
      </App>
    );

    // act
    fireEvent.click(getByText("OK", "span"));

    // assert
    expect(getByText("All done!")).not.toBeVisible();
  });
});
