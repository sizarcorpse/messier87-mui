import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  Typography,
  Link,
  Menu,
  MenuItem,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  CardActions,
  Avatar,
  Divider,
  Paper,
  Box,
  Modal,
  Fade,
  Backdrop
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TelegramIcon from "@material-ui/icons/Telegram";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    Height: 56
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },

  menu: {
    "& .MuiMenuItem-root": {
      width: 300
    },
    "&.MuiPopover-root": {
      //background
    },

    "& .MuiPopover-paper": {
      marginTop: 50,
      top: 10
    }
  },
  root: {
    maxWidth: 345,
    border: "none"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    paddingLeft: 0,
    height: 50,
    width: 50
  },
  neckText: {
    fontSize: 16,
    fontWeight: 700,
    fontStyle: "normal",
    color: "#696969",
    display: "flex",
    justifyContent: "flex-start"
  },
  neckText2: {
    fontSize: 13,
    fontWeight: 500,
    fontStyle: "normal",
    color: "#696969",
    display: "flex",
    textAlign: "left"
  },
  neckText3: {
    fontSize: 15,
    fontWeight: 500,
    fontStyle: "normal",
    color: "#696969",
    display: "flex",
    textAlign: "left"
  },

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
  const [ani, setAni] = React.useState(0);
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
                  {/* <CreateSkill handleCloseModel={handleCloseModel} /> */}
                  <NoteAddIcon style={{ height: 30, width: 30 }} />
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
