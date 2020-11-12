import React from "react";
import Skill from "./Skill";
import {
  Menu,
  Grid,
  IconButton,
  Paper,
  Modal,
  Fade,
  Backdrop
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
const useStyles = makeStyles((theme) => ({
  MenuBox: {
    width: 300,
    maxWidth: 300,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  MenuPaper: {
    margin: 5
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: 1.5,
    textTransform: "none"
  },
  CreateIcon: {
    height: 30,
    width: 30
  },
  submitButton: {
    height: 83,
    width: 83,
    borderRadius: 0
  }
}));

export default function MenuY(props) {
  const { handleClick2, anchorEl2, setAnchorEl2, handleClose } = props;

  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  const handleOpenModel = () => {
    setOpenModal(true);
  };
  const handleOpenModel2 = () => {
    setOpenModal2(true);
  };
  const handleCloseModel = () => {
    setOpenModal(false);
    setOpenModal2(false);
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl2}
      keepMounted
      open={Boolean(anchorEl2)}
      onClose={handleClose}
      className={classes.menu}
    >
      <Grid container className={classes.MenuBox}>
        <Paper className={classes.MenuPaper} onClick={handleOpenModel}>
          <IconButton className={classes.submitButton}>
            <CreateIcon className={classes.CreateIcon} />
            <Modal
              className={classes.modal}
              open={openModal}
              onClose={handleCloseModel}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500
              }}
            >
              <Fade in={openModal}>
                <div className={classes.paper}>
                  {/* <CreateSkill handleCloseModel={handleCloseModel} /> */}
                  <CreateIcon className={classes.CreateIcon} />
                </div>
              </Fade>
            </Modal>
          </IconButton>
        </Paper>

        <Paper className={classes.MenuPaper} onClick={handleOpenModel2}>
          <IconButton className={classes.submitButton}>
            <NoteAddIcon style={{ height: 30, width: 30 }} />
            <Modal
              className={classes.modal}
              open={openModal2}
              onClose={handleCloseModel}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500
              }}
            >
              <Fade in={openModal2}>
                <div className={classes.paper}>
                  <Skill handleCloseModel={handleCloseModel} />
                </div>
              </Fade>
            </Modal>
          </IconButton>
        </Paper>

        <Paper className={classes.MenuPaper}>
          <IconButton className={classes.submitButton}>
            <AddAPhotoIcon style={{ height: 30, width: 30 }} />
          </IconButton>
        </Paper>

        <Paper className={classes.MenuPaper}>
          <IconButton className={classes.submitButton}>
            <EventAvailableIcon style={{ height: 30, width: 30 }} />
          </IconButton>
        </Paper>
      </Grid>
    </Menu>
  );
}
