import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  TextField,
  FormControl,
  InputAdornment,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Avatar,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Input,
  CardMedia,
  IconButton,
  CardActions,
  TextareaAutosize,
  GridList,
  GridListTile
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TelegramIcon from "@material-ui/icons/Telegram";
import InfoIcon from "@material-ui/icons/Info";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import CodeIcon from "@material-ui/icons/Code";
import { BorderAllRounded } from "@material-ui/icons";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    padding: 20,
    paddingBottom: 100,
    background:
      "url(https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/wave.svg?alt=media&token=dead2046-9e45-4d55-a0ea-effb9435d89b)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    height: 763
  },
  avatar: {
    height: 110,
    width: 110
  },
  CardHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 0
  },
  headText: {
    letterSpacing: -0.5,
    wordSpacing: 1,
    fontWeight: 600,
    textDecoration: "none",
    fontStyle: "normal",
    fontVariant: "normal",
    textTransform: "none",
    fontFamily: "Arial",
    fontSize: 25,
    marginBottom: 5
  },
  neckText: {
    fontSize: 15,
    fontWeight: 500,
    fontStyle: "normal",
    color: "#132743",
    marginBottom: 10
  },
  neckText2: {
    fontSize: 15,
    fontWeight: 700,
    fontStyle: "normal",
    color: "#132743"
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: 1.5,
    textTransform: "none",
    color: "#132743"
  },
  submitButton: {
    width: 144,
    marginLeft: 30
    // background:
    //   "linear-gradient(54deg, rgba(88,203,255,1) 0%, rgba(55,182,255,1) 38%, rgba(80,161,251,1) 66%, rgba(81,198,249,1) 100%)"
  },
  card2: {
    boxShadow: "inset 0px 0px 0.5px 0.5px #dbdbdb"
  },
  neckText3: {
    fontSize: 11,
    fontWeight: 700,
    fontStyle: "normal",
    color: "#696969",
    display: "flex",
    paddingLeft: 20,
    // fontVariant: "small-caps"
    textTransform: "uppercase"
  },
  neckTextMore: {
    fontSize: 13,
    fontWeight: 700,
    fontStyle: "normal",
    color: "#696969"
  }
}));
const Profile = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <CardHeader
            className={classes.CardHeader}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img
                  src="https://static.highsnobiety.com/thumbor/Be530Ob8QTa6U2zPM90eZYuU4Fs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/10/08114400/breaking-bad-main.jpg"
                  alt=""
                  style={{ height: 110 }}
                />
              </Avatar>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CardHeader
            className={classes.CardHeader}
            title={
              <Typography variant="h5" className={classes.headText}>
                Walter White
              </Typography>
            }
            subheader={
              <>
                <Typography variant="h5" className={classes.neckText}>
                  Back-End & Front-End Web Developer | NodeJS, Firebase,
                  ReactJS, MongoDB, AWS
                </Typography>

                <IconButton
                  aria-label="share"
                  style={{ marginTop: 0, padding: 0 }}
                >
                  <LocationOnIcon style={{ fontSize: 15, marginTop: 2 }} />
                  <Typography variant="h5" className={classes.neckText2}>
                    Jessore, Bangladesh
                  </Typography>
                </IconButton>
              </>
            }
          />

          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.submitButton}
                  startIcon={<InfoIcon style={{ color: "#132743" }} />}
                >
                  <Typography variant="h5" className={classes.submitButtonText}>
                    Info
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ width: 144, marginRight: 30 }}
                  startIcon={<TelegramIcon />}
                >
                  <Typography variant="h5" className={classes.submitButtonText}>
                    Message
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <IconButton aria-label="share">
                  <FacebookIcon style={{ fontSize: 25 }} />
                </IconButton>
                <IconButton aria-label="share">
                  <GitHubIcon style={{ fontSize: 25 }} />
                </IconButton>
                <IconButton aria-label="share">
                  <TwitterIcon style={{ fontSize: 25 }} />
                </IconButton>
              </Grid>
            </Grid>
            <Divider
              style={{
                marginTop: "20px",
                marginBottom: "10px"
              }}
            />
          </CardContent>
          <CardContent>
            <Card className={classes.card2}>
              <CardHeader
                avatar={
                  <IconButton
                    aria-label="share"
                    style={{ marginTop: 0, padding: 0 }}
                  >
                    <CodeIcon
                      style={{
                        fontSize: 20,
                        marginTop: 0,
                        marginRight: 10,
                        color: "#132743"
                      }}
                    />
                    <Typography variant="h5" className={classes.neckText2}>
                      Web Develop
                    </Typography>
                  </IconButton>
                }
              />
              <CardContent style={{ padding: 0, marginBottom: 20 }}>
                <Typography variant="body2" className={classes.neckText3}>
                  Progaming Language
                </Typography>
                <Grid container spacing={1} style={{ marginTop: 10 }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      textAlign: "start",
                      marginLeft: 20
                    }}
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/javascript.svg"
                      alt=""
                      style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                      title="Firebase"
                    />
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
                      alt=""
                      style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                      title="NodeJs"
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent style={{ padding: 0, marginBottom: 20 }}>
                <Typography variant="body2" className={classes.neckText3}>
                  Top Skilled
                </Typography>
                <Grid container spacing={1} style={{ marginTop: 10 }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      textAlign: "start",
                      marginLeft: 20
                    }}
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/images%2FFIREBASE.jpg?alt=media&token=b5977f54-5d3f-4da0-94ac-200a91ebab6f"
                      alt=""
                      style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                      title="Firebase"
                    />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/images%2FNODE.jpg?alt=media&token=11f4bccf-4019-48c4-aa40-a19c1a8550ac"
                      alt=""
                      style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                      title="NodeJs"
                    />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/images%2FREACT.jpg?alt=media&token=42135124-9411-413d-9f5f-a49a9498a4ba"
                      alt=""
                      style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                      title="ReactJs"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      marginLeft: 20,
                      textAlign: "end"
                    }}
                  >
                    <IconButton
                      aria-label="share"
                      style={{ marginTop: 0, padding: 0 }}
                    >
                      <Typography variant="h5" className={classes.neckTextMore}>
                        Learn more
                      </Typography>
                      <ArrowForwardIcon
                        style={{
                          fontSize: 15,
                          marginTop: 0,
                          marginRight: 10,
                          color: "#696969"
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Profile;
