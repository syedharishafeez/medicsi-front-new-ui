import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// import AddUserModal from "./AddUserModal";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {
    history.push("/details/users/add-user")
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="submit"
        style={{ float: "right" }}
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleOpen}
      >
        Add User
      </Button>

      {/* <AddUserModal
        open={open}
        setOpen={setOpen}
        setAddNewUser={props.setAddNewUser}
        addNewUser={{ ...props.addNewUser }}
        setUserData={props.setUserData}
        editUser={false}
      /> */}
    </div>
  );
}
