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
  GridList,
  GridListTile
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    padding: 20,
    paddingBottom: 20
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
  }
}));
const ReviewCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
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
          revealed whether Walter White died at the end of the show, and seemed
          to hint that the antihero will have a role in the upcoming Breaking
          Bad movie, El Camino. To many, the end of Breaking Bad was pretty
          clear-cut. Walter White gets hit by machine gunfire and presumably
          succumbs to his wounds. Of course, the series never confirmed that
          White died, leading many fans hoping that somehow he managed to
          survive — a theory that's got even stronger since the announcement of
          El Camino. Unfortunately for fans, White didn't survive the shootout.
          “Yes, Walter White is dead. Yes," Gilligan confirms. Watch his
          response around the 8.30-minute mark below.
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
    </Card>
  );
};

export default ReviewCard;
