import React, { createContext, Component } from "react";

export const DialogContext = createContext();

class DialogContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = props.initialState
      ? props.initialState
      : {
          isFormDialogVisible: false,
          isSuccessDialogVisible: false,
        };
  }

  toggleFormDialog = () => {
    this.setState((prevState, props) => {
      return { isFormDialogVisible: !prevState.isFormDialogVisible };
    });
  };

  toggleSuccessDialog = () => {
    this.setState((prevState, props) => {
      return { isSuccessDialogVisible: !prevState.isSuccessDialogVisible };
    });
  };

  render() {
    return (
      <DialogContext.Provider
        value={{
          ...this.state,
          toggleFormDialog: this.toggleFormDialog,
          toggleSuccessDialog: this.toggleSuccessDialog,
        }}
      >
        {this.props.children}
      </DialogContext.Provider>
    );
  }
}

export default DialogContextProvider;
