import { React } from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContext } from "../../../contexts/dialogContext";

const SuccessDialog = () => {
  return (
    <DialogContext.Consumer>
      {(context) => {
        const { isSuccessDialogVisible, toggleSuccessDialog } = context;
        return (
          <Dialog open={isSuccessDialogVisible}>
            <DialogContent className="dialog-box">
              <DialogTitle className="dialog-title">All done!</DialogTitle>
              <DialogContentText className="dialog-text">
                You will be one of the first to experience Broccoli &amp; Co.
                when we launch.
              </DialogContentText>
              <div className="dialog-button">
                <Button
                  variant="contained"
                  onClick={toggleSuccessDialog}
                  fullWidth
                >
                  OK
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        );
      }}
    </DialogContext.Consumer>
  );
};

export default SuccessDialog;
