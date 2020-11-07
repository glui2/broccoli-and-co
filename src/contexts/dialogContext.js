import React, { createContext, Component } from "react";

export const DialogContext = createContext();

class DialogContextProvider extends Component {
  state = {
    isFormDialogVisible: false,
    isConfirmDialogVisible: false,
  };
  toggleFormDialog = (isFormDialogVisible) => {
    this.setState((prevState, props) => {
      return { isFormDialogVisible: !prevState.isFormDialogVisible };
    });
  };

  render() {
    return (
      <DialogContext.Provider
        value={{ ...this.state, toggleFormDialog: this.toggleFormDialog }}
      >
        {this.props.children}
      </DialogContext.Provider>
    );
  }
}

export default DialogContextProvider;
