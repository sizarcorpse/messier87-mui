import React from "react";

import Menux from "./Menux";
import MenuY from "./MenuY";

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
  Divider
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TelegramIcon from "@material-ui/icons/Telegram";
import { makeStyles } from "@material-ui/core/styles";

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
  submitButton: {
    height: 40,
    background:
      "linear-gradient(54deg, rgba(88,203,255,1) 0%, rgba(55,182,255,1) 38%, rgba(80,161,251,1) 66%, rgba(81,198,249,1) 100%)"
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: 1.5,
    textTransform: "none"
  }
}));

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <nav>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<TelegramIcon />}
              style={{ marginRight: 20 }}
              onClick={handleClick2}
            >
              <Typography variant="h5" className={classes.submitButtonText}>
                Explore Imagination
              </Typography>
            </Button>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            onClick={handleClick}
          >
            Login
          </Button>
          {/*  */}

          <Menux
            handleClick={handleClick}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleClose={handleClose}
          />
          <MenuY
            handleClick2={handleClick2}
            anchorEl2={anchorEl2}
            setAnchorEl2={setAnchorEl2}
            handleClose={handleClose}
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
