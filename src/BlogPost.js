import React, { useState, useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
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
  GridListTile,
  Paper,
  Box
} from "@material-ui/core";
import TitleIcon from "@material-ui/icons/Title";
import FaceIcon from "@material-ui/icons/Face";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

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
  },
  uploadImageButton: {
    border: "1px solid #132743",
    marginTop: "15px",
    height: 50,
    top: -15
  },
  upAndPreviewCard: {
    background:
      "linear-gradient(90deg, rgba(246,246,246,1) 7%, rgba(240,242,244,1) 26%, rgba(247,247,247,1) 66%, rgba(249,248,245,1) 100%)",
    maxHeight: 120,
    minHeight: 120,
    maxWidth: 120,
    margin: 5,
    padding: 0
  },
  previewCard: {
    maxHeight: 120,
    maxWidth: 120,
    height: 120,
    width: "100%",
    objectFit: "cover"
  },
  GridList: {
    overflow: "scroll"
  }
}));

const BlogPost = () => {
  const classes = useStyles();
  const [skillCoverPhoto, setSkillCoverPhoto] = useState(null);
  const [previewCoverPhoto, setPreviewCoverPhoto] = useState([]);
  const imp = useRef();

  const handlePhotoUpload = (e) => {
    if (e.target.files) {
      let file = e.target.files;
      var xx = [];
      for (let i = 0; i < file.length; i++) {
        xx.push(URL.createObjectURL(file[i]));
      }
      setPreviewCoverPhoto((cv) => [...cv, xx]);
    }
  };

  const photosz = [];

  if (previewCoverPhoto) {
    previewCoverPhoto.map((pt) => {
      console.log("image", pt);

      let cons = { src: pt, key: Math.random() };
      photosz.push(cons);
    });
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h5" className={classes.headText}>
            Whats in your Mind ?
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
                  rowsMin={13}
                  aria-label="maximum height"
                  placeholder="Give me a nice cool review"
                  defaultValue=""
                />
              </FormControl>
            </Grid>
            {previewCoverPhoto.length > 0 ? (
              <Grid item xs={12} style={{ overflow: "auto", maxHeight: 250 }}>
                <GridList cellHeight={120} spacing={0} cols={4}>
                  {previewCoverPhoto.map((pc) => (
                    <GridListTile cols={1} spacing={0}>
                      <Link>
                        <Card className={classes.upAndPreviewCard}>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image={pc}
                            onClick={() => imp.current.click()}
                            className={classes.previewCard}
                          />
                        </Card>
                      </Link>
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  onClick={() => imp.current.click()}
                  fullWidth
                  className={classes.uploadImageButton}
                >
                  <AddPhotoAlternateIcon />
                  <Typography style={{ marginLeft: "3px", marginRight: "5px" }}>
                    Choose
                  </Typography>
                </Button>
              </Grid>
            )}
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
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                inputProps={{
                  className: classes.UpInput,
                  ref: imp,
                  multiple: true
                }}
                required
                name="skillCoverPhoto"
                label="skillCoverPhoto"
                type="file"
                id="skillCoverPhoto"
                style={{ visibility: "hidden" }}
                onChange={handlePhotoUpload}
              />
            </FormControl>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
