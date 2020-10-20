import React, { useState, useRef } from "react";
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
  TextareaAutosize
} from "@material-ui/core";
import TitleIcon from "@material-ui/icons/Title";
import FaceIcon from "@material-ui/icons/Face";

const ScmuiIconText = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1d2d50",
      fontSize: "16px",
      top: 0
    },
    "& label": {
      top: 0,
      color: "#14274e"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#132743"
      },
      "&:hover fieldset": {
        borderColor: "#132743"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#7579e7"
      }
    },
    "& .MuiInputBase-input": {
      height: "3px",
      fontSize: "15px"
      // backgroundColor:'#eeeeee'
    }
  }
})(TextField);

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    maxHeight: 800,
    height: 800,
    padding: 20,
    paddingBottom: 100,
    background:
      "url(https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/wave.svg?alt=media&token=dead2046-9e45-4d55-a0ea-effb9435d89b)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom"
  },
  headText: {
    fontSize: 25,
    letterSpacing: -1.4,
    wordSpacing: 4,
    fontWeight: 700,
    fontStyle: "normal",
    fontVariant: "small-caps",
    color: "#132743"
  },
  neckText: {
    fontSize: 15,
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: 1.5,
    color: "#132743"
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
  },

  LinkUnderlineRemove: {
    textTransform: "none",
    textDecoration: "none"
  },
  textArea: {
    maxWidth: 764,
    maxHeight: 400,
    background:
      "linear-gradient(90deg, rgba(246,246,246,1) 7%, rgba(240,242,244,1) 26%, rgba(247,247,247,1) 66%, rgba(249,248,245,1) 100%)",
    fontSize: 15,
    border: "1px solid #132743",
    borderRadius: 5
  }
}));

const Review = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h5" className={classes.headText}>
            Create a Review
          </Typography>
        }
      />
      <Divider
        style={{
          marginTop: "25px",
          marginBottom: "25px"
        }}
      />{" "}
      <CardContent>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl error fullWidth>
                <ScmuiIconText
                  className={classes.margin}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    )
                  }}
                  label="Title"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error fullWidth>
                <TextareaAutosize
                  className={classes.textArea}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    )
                  }}
                  label="Title"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  rowsMin={26}
                  aria-label="maximum height"
                  placeholder="Give me a nice cool review"
                  defaultValue=""
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submitButton}
              >
                <Typography variant="h5" className={classes.submitButtonText}>
                  Review Now
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className={classes.neckText}
                style={{ marginTop: 5 }}
              >
                <Link to={"/"} className={classes.LinkUnderlineRemove}>
                  Not Now
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Review;
