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
  Typography,
  Button,
  Input,
  TextareaAutosize,
  Select,
  InputLabel
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import CategoryIcon from "@material-ui/icons/Category";

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
    }
  }
})(TextField);

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
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
  uploadImageButton: {
    border: "1px solid #132743"
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
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#132743"
      }
    },
    "& .MuiOutlinedInput-input": {
      padding: 11,
      fontSize: 15
    },
    "& label": {
      marginRight: 120,
      top: 0,
      color: "#14274e"
    },
    "& .MuiInputLabel-outlined": {
      marginRight: 20
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(1)
  },
  InputLabel: {
    top: 0,
    color: "#132743"
  }
}));

const Skill = () => {
  const classes = useStyles();

  const [skillCoverPhoto, setSkillCoverPhoto] = useState(null);
  const [previewCoverPhoto, setPreviewCoverPhoto] = useState(null);
  const imp = useRef();

  const [experiance, setExperiance] = React.useState("");
  const [platform, setPlatform] = React.useState("");

  const handleExperianceChange = (event) => {
    setExperiance(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const [labelWidthX, setLabelWidthX] = React.useState(0);
  const inputLabelX = React.useRef(null);
  React.useEffect(() => {
    setLabelWidthX(inputLabelX.current.offsetWidth);
    setLabelWidthY(inputLabelY.current.offsetWidth);
  }, []);

  const [labelWidthY, setLabelWidthY] = React.useState(0);
  const inputLabelY = React.useRef(null);

  const handlePhotoUpload = (e) => {
    if (e.target.files[0]) {
      setSkillCoverPhoto(e.target.files[0]);
      setPreviewCoverPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h5" className={classes.headText}>
            Create Skill
          </Typography>
        }
        subheader={
          <Typography variant="h5" className={classes.neckText}>
            Acquire new skills ? Lets share.
          </Typography>
        }
      />
      <Divider
        style={{
          marginTop: "25px",
          marginBottom: "25px"
        }}
      />
      <CardContent>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl
                // error={
                // touched.firstName && Boolean(errors.firstName)
                // }
                fullWidth
              >
                <ScmuiIconText
                  className={classes.margin}
                  // InputProps={{
                  //   startAdornment:
                  //     touched.firstName && Boolean(errors.firstName) ? (
                  //       <InputAdornment position="start">
                  //         <AddBoxIcon style={{ color: "red" }} />
                  //       </InputAdornment>
                  //     ) : (
                  //       <InputAdornment position="start">
                  //         <AddBoxIcon />
                  //       </InputAdornment>
                  //     )
                  // }}
                  required
                  variant="outlined"
                  label="Skill Name"
                  name="firstName"
                  id="firstName"
                  // value={values.firstName}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
                required
              >
                <InputLabel
                  ref={inputLabelX}
                  className={classes.focused}
                  id="skillExperiance"
                >
                  Experiance
                </InputLabel>
                <Select
                  native
                  labelId="skillExperiance"
                  id="skillExperiance"
                  value={experiance}
                  onChange={handleExperianceChange}
                  labelWidth={labelWidthX}
                  startAdornment={
                    <InputAdornment position="start">
                      <BusinessCenterIcon />
                    </InputAdornment>
                  }
                  style={{ color: "#132743" }}
                >
                  <option aria-label="None" value="" />
                  <option value={"Hands On"}>Hands On</option>
                  <option value={"Beginner"}>Beginner</option>
                  <option value={"Intermediate"}>Intermediate</option>
                  <option value={"Professional"}>Professional</option>
                  <option value={"Expert"}>Expert</option>
                  <option value={"Specialist"}>Specialist</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
                required
              >
                <InputLabel
                  ref={inputLabelY}
                  className={classes.focused}
                  id="skillPlatform"
                >
                  Platform
                </InputLabel>
                <Select
                  native
                  labelId="skillPlatform"
                  id="skillPlatform"
                  value={platform}
                  onChange={handlePlatformChange}
                  labelWidth={labelWidthY}
                  startAdornment={
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  }
                  style={{ color: "#132743" }}
                >
                  <option aria-label="None" value="" />
                  <option value={"Web Development"}>Web Development</option>
                  <option value={"Web Application"}>Web Application</option>
                  <option value={"Web Design"}>Web Design</option>
                  <option value={"Database"}>Database</option>
                  <option value={"Cloud"}>Cloud</option>
                  <option value={"Web Framework"}>Web Framework</option>
                  <option value={"Tools"}>Tools</option>
                  <option value={"Programming Language"}>
                    Programming Language
                  </option>
                  <option value={"Graphic Design"}>Graphic Design</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                // error={
                // touched.skillWebsite && Boolean(errors.skillWebsite)
                // }
                fullWidth
              >
                <ScmuiIconText
                  className={classes.margin}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WebAssetIcon />
                      </InputAdornment>
                    )
                  }}
                  required
                  variant="outlined"
                  label="Website"
                  name="skillWebsite"
                  id="skillWebsite"
                  // value={values.skillWebsite}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={() => imp.current.click()}
                fullWidth
                className={classes.uploadImageButton}
              >
                {previewCoverPhoto ? (
                  <>
                    <img
                      src={previewCoverPhoto}
                      alt=""
                      style={{ height: 40 }}
                    />{" "}
                  </>
                ) : (
                  <>
                    <AddPhotoAlternateIcon />
                    <Typography
                      style={{ marginLeft: "3px", marginRight: "5px" }}
                    ></Typography>
                  </>
                )}
              </Button>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                // error={
                // touched.skillDescription && Boolean(errors.skillDescription)
                // }

                fullWidth
                required
              >
                <TextareaAutosize
                  required
                  variant="outlined"
                  className={classes.textArea}
                  rowsMin={8}
                  aria-label="maximum height"
                  placeholder="Share something about your skill."
                  defaultValue=""
                  name="skillDescription"
                  id="skillDescription"
                  // value={values.skillDescription}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Divider
            style={{
              marginTop: "25px",
              marginBottom: "25px"
            }}
          />{" "}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submitButton}
            >
              <Typography variant="h5" className={classes.submitButtonText}>
                Create Skill
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
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                inputProps={{
                  className: classes.UpInput,
                  ref: imp
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
export default Skill;
