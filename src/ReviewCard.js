import React, { useState, useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
  Box,
  GridList,
  GridListTile,
  Collapse,
  Hidden
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    padding: 20,
    paddingBottom: 20,
    marginBottom: 20
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
    display: "flex",
    lineHeight: 1
  },
  neckText: {
    fontSize: 15,
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: 1,
    color: "#132743",
    display: "flex"
  },
  avatar: {
    height: 65,
    width: 65
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
  },
  //
  //
  mc2: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "3px",
    marginTop: "10px"
  },
  mb: {
    borderRadius: "20px",
    marginLeft: 10,
    padding: "5px 10px",
    color: "black",
    display: "flex",
    maxWidth: "100%",
    width: "100%",
    background: "#efefef"
  },
  mt: {
    width: "100%",
    letterSpacing: 0,
    fontSize: 14,
    wordWrap: "break-word",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    marginRight: "20px",
    whiteSpace: "pre-line"
  },
  textArea: {
    maxWidth: "100%",
    maxHeight: 50,
    background:
      "linear-gradient(90deg, rgba(246,246,246,1) 7%, rgba(240,242,244,1) 26%, rgba(247,247,247,1) 66%, rgba(249,248,245,1) 100%)",
    fontSize: 15,
    borderRadius: 5,
    border: "1px solid #efefef"
  }
}));
const ReviewCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [f, setF] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img
                src="https://static.highsnobiety.com/thumbor/Be530Ob8QTa6U2zPM90eZYuU4Fs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/10/08114400/breaking-bad-main.jpg"
                alt=""
                style={{ height: 70 }}
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h5" className={classes.headText}>
              Walter White
            </Typography>
          }
          subheader={
            <>
              <Typography variant="h5" className={classes.neckText}>
                Breaking bad, amc, usa
              </Typography>
              <Typography variant="h5" className={classes.neckText}>
                5 minutes ago
              </Typography>
            </>
          }
        />
        <CardContent>
          <Divider
            style={{
              marginTop: "5px",
              marginBottom: "30px"
            }}
          />{" "}
          <Typography variant="body1" color="textPrimary" component="p">
            In a recent interview, Breaking Bad creator Vince Gilligan finally
            revealed whether Walter White died at the end of the show, and
            seemed to hint that the antihero will have a role in the upcoming
            Breaking Bad movie, El Camino. To many, the end of Breaking Bad was
            pretty clear-cut. Walter White gets hit by machine gunfire and
            presumably succumbs to his wounds. Of course, the series never
            confirmed that White died, leading many fans hoping that somehow he
            managed to survive — a theory that's got even stronger since the
            announcement of El Camino. Unfortunately for fans, White didn't
            survive the shootout. “Yes, Walter White is dead. Yes," Gilligan
            confirms. Watch his response around the 8.30-minute mark below.
          </Typography>
          <Divider
            style={{
              marginTop: "30px",
              marginBottom: "5px"
            }}
          />{" "}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
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
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={f ? 11 : 12}>
                  <FormControl error fullWidth>
                    <TextareaAutosize
                      className={classes.textArea}
                      label="Title"
                      variant="outlined"
                      id="custom-css-outlined-input"
                      rowsMin={3}
                      aria-label="maximum height"
                      placeholder="Give a comment"
                      defaultValue=""
                    />
                  </FormControl>
                </Grid>
                {f === true && (
                  <Grid item xs={f ? 1 : 0}>
                    <IconButton
                      variant="contained"
                      type="submit"
                      color="primary"
                      className={classes.ButtonSubmit}
                    >
                      <SendIcon />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            </form>
            <Box className={classes.mc2}>
              <Avatar
                style={{ justifyContent: "center" }}
                alt="Remy Sharp"
                src={""}
              />
              <Box className={classes.mb}>
                <Typography className={classes.mt}>
                  In a recent interview, Breaking Bad creator Vince Gilligan
                  finally revealed whether Walter White died at the end of the
                  show, and seemed to hint that the antihero will have a role in
                  the upcoming Breaking Bad movie, El Camino. To many, the end
                  of Breaking Bad was pretty clear-cut.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.mc2}>
              <Avatar
                style={{ justifyContent: "center" }}
                alt="Remy Sharp"
                src={""}
              />
              <Box className={classes.mb}>
                <Typography className={classes.mt}>
                  In a recent interview, Breaking Bad creator Vince Gilligan
                  finally.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default ReviewCard;
