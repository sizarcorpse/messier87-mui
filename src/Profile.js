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
import { Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    padding: "20px 50px",
    paddingBottom: 100,
    background:
      "url(https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/wave.svg?alt=media&token=dead2046-9e45-4d55-a0ea-effb9435d89b)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom"
    // height: 763
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
  },
  neckTextBio: {
    fontSize: 13,
    fontWeight: 700,
    fontStyle: "normal",
    color: "#132743"
  },
  neckTextBiox: {
    fontSize: 12,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#696969",
    marginLeft: 15
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));
const Profile = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
                  fullWidth
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
                  fullWidth
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

          <CardActions style={{ display: "contents" }}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Card className={classes.card2}>
                <CardHeader
                  avatar={
                    <IconButton
                      aria-label="share"
                      style={{ marginTop: 0, padding: 0 }}
                    >
                      <FilterVintageIcon
                        style={{
                          fontSize: 20,
                          marginTop: 0,
                          marginRight: 10,
                          color: "#132743"
                        }}
                      />
                      <Typography variant="h5" className={classes.neckText2}>
                        Cloud
                      </Typography>
                    </IconButton>
                  }
                />
                <CardContent style={{ padding: 0, marginBottom: 20 }}>
                  <Typography variant="body2" className={classes.neckText3}>
                    Cloud Service Provider
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
                        src="https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/images%2Faws.jpg?alt=media&token=60d218a6-ae60-4d56-a096-39e2c962da9c"
                        alt=""
                        style={{
                          height: 35,
                          borderRadius: 5,
                          marginRight: 5
                        }}
                        title="Firebase"
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
                        src="https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/images%2Faws-eb.jpg?alt=media&token=6493023d-d217-4646-a676-7d6828812fb4"
                        alt=""
                        style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                        title="Firebase"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/images%2Fec.jpg?alt=media&token=a7454269-2603-471f-82ca-6e539da5826e"
                        alt=""
                        style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                        title="NodeJs"
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
                        <Typography
                          variant="h5"
                          className={classes.neckTextMore}
                        >
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
            <CardContent>
              <Card className={classes.card2}>
                <CardHeader
                  avatar={
                    <IconButton
                      aria-label="share"
                      style={{ marginTop: 0, padding: 0 }}
                    >
                      <FilterVintageIcon
                        style={{
                          fontSize: 20,
                          marginTop: 0,
                          marginRight: 10,
                          color: "#132743"
                        }}
                      />
                      <Typography variant="h5" className={classes.neckText2}>
                        Graphic Design
                      </Typography>
                    </IconButton>
                  }
                />

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
                        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                        alt=""
                        style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                        title="Firebase"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
                        alt=""
                        style={{ height: 35, borderRadius: 5, marginRight: 5 }}
                        title="NodeJs"
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
                        <Typography
                          variant="h5"
                          className={classes.neckTextMore}
                        >
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
              <Divider
                style={{
                  marginTop: "40px",
                  marginBottom: "0px"
                }}
              />
            </CardContent>
          </Collapse>

          <Grid container>
            <Grid item xs={12} style={{ textAlign: "start" }}>
              <IconButton aria-label="share">
                <InfoIcon
                  style={{ fontSize: 14, marginRight: 5, color: "#132743" }}
                />
                <Typography variant="h5" className={classes.neckTextBio}>
                  About me
                </Typography>
              </IconButton>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "start", maxWidth: 370 }}>
              <Typography
                variant="body1"
                coponent="p"
                className={classes.neckTextBiox}
              >
                Thank you for viewing my work. As a photographer and retoucher,
                my work is based on design, symmetry and minimalism. I am always
                looking for the opportunity to work on projects that are
                diverse, meaningful and challenging. I love to learn, solve,
                create, and improve. Because of my love for photography I
                started as an autodidact.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Profile;
