import React, { useState, useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  CardMedia,
  IconButton,
  CardActions
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkIcon from "@material-ui/icons/Link";
import StarsIcon from "@material-ui/icons/Stars";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 320,
    maxHeight: 300,
    margin: "auto auto"
  },
  media: {
    height: 300,
    width: "100%",
    objectFit: "cover"
  },
  CardHeader: {
    position: "relative",
    bottom: 180
  },
  CardHeadOption: {
    position: "relative",
    bottom: 440
  },
  IconLike: {
    fontSize: 25
  },
  ButtonLike: {
    marginRight: "auto"
  },
  headText: {
    fontSize: 30,
    letterSpacing: 0,
    wordSpacing: 4,
    fontWeight: 700,
    fontStyle: "normal",
    fontVariant: "normal",
    color: "#FFFFFF",
    display: "flex",
    marginBottom: 10
  },
  neckText: {
    fontSize: 16,
    fontWeight: 500,
    fontStyle: "normal",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "flex-start"
  },
  neckText2: {
    fontSize: 13,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#FFFFFF",
    display: "flex",
    textAlign: "left"
  },
  neckText3: {
    fontSize: 12,
    fontWeight: 500,
    fontStyle: "normal",
    color: "#FFFFFF",
    marginRight: 5
  },
  StatusIcon: {
    fontSize: 20
  },
  ButtonStatus: {
    height: 20,
    width: 20,
    margin: "auto 2px"
  },
  span: {
    marginRight: 10
  }
}));

const SkillCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://firebasestorage.googleapis.com/v0/b/messier87-production.appspot.com/o/newSKill_firebase.jpg?alt=media&token=e3d78007-d5a4-4a62-9d85-b3aa9e31e080"
      />

      <CardHeader
        className={classes.CardHeader}
        title={
          <Typography variant="h5" className={classes.headText}>
            Firebase
            <span className={classes.span} />
            <IconButton className={classes.ButtonStatus}>
              <FavoriteIcon className={classes.StatusIcon} />
            </IconButton>
            <IconButton className={classes.ButtonStatus}>
              <StarsIcon className={classes.StatusIcon} />
            </IconButton>
            <IconButton className={classes.ButtonStatus}>
              <LinkIcon className={classes.StatusIcon} />
            </IconButton>
          </Typography>
        }
        subheader={
          <>
            <Typography variant="h5" className={classes.neckText}>
              Experience Intermedaite
            </Typography>
            <Typography variant="p" className={classes.neckText2}>
              Cloud Firestore | Realtime Database | Functions | Authentication
            </Typography>
          </>
        }
      />
      <CardActions className={classes.CardHeadOption}>
        <IconButton className={classes.ButtonLike}>
          <ThumbUpIcon className={classes.IconLike} />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default SkillCard;
