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
  Divider
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
  }
}));

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </Link>
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
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
          >
            <MenuItem onClick={handleClose}>
              <CardHeader
                style={{ paddingLeft: 0 }}
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <img
                      src="https://static.highsnobiety.com/thumbor/Be530Ob8QTa6U2zPM90eZYuU4Fs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/10/08114400/breaking-bad-main.jpg"
                      alt=""
                      style={{ height: 50 }}
                    />
                  </Avatar>
                }
                title={
                  <Typography variant="h5" className={classes.neckText}>
                    Walter White
                  </Typography>
                }
                subheader={
                  <Typography variant="p" className={classes.neckText2}>
                    breaking@bad.com
                  </Typography>
                }
              />
            </MenuItem>
            <Divider
              style={{
                marginTop: "0px",
                marginBottom: "20px"
              }}
            />
            <MenuItem onClick={handleClose}>
              {" "}
              <Typography variant="p" className={classes.neckText2}>
                Profile
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Typography variant="p" className={classes.neckText2}>
                Account Setting
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Typography variant="p" className={classes.neckText2}>
                Help
              </Typography>
            </MenuItem>
            <Divider
              style={{
                marginTop: "20px",
                marginBottom: "20px"
              }}
            />
            <MenuItem onClick={handleClose}>
              {" "}
              <Typography variant="p" className={classes.neckText2}>
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
