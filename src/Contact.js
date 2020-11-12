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
  TextareaAutosize,
  Select,
  InputLabel,
  InputBase,
  MenuItem
} from "@material-ui/core";
import TitleIcon from "@material-ui/icons/Title";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import BusinessIcon from "@material-ui/icons/Business";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LanguageIcon from "@material-ui/icons/Language";
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
    margin: theme.spacing(1),
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

const Contact = () => {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h5" className={classes.headText}>
            Lets Talk
          </Typography>
        }
        subheader={
          <Typography variant="h5" className={classes.neckText}>
            Any question ? Please contact us.
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
                  //         <PersonIcon style={{ color: "red" }} />
                  //       </InputAdornment>
                  //     ) : (
                  //       <InputAdornment position="start">
                  //         <PersonIcon />
                  //       </InputAdornment>
                  //     )
                  // }}
                  required
                  variant="outlined"
                  label="First Name"
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
                // error={
                // touched.lastName && Boolean(errors.lastName)
                // }
                fullWidth
              >
                <ScmuiIconText
                  className={classes.margin}
                  // InputProps={{
                  //   startAdornment:
                  //     touched.lastName && Boolean(errors.lastName) ? (
                  //       <InputAdornment position="start">
                  //         <PersonIcon style={{ color: "red" }} />
                  //       </InputAdornment>
                  //     ) : (
                  //       <InputAdornment position="start">
                  //         <PersonIcon />
                  //       </InputAdornment>
                  //     )
                  // }}
                  required
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  // value={values.lastName}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                // error={
                // touched.email && Boolean(errors.email)
                // }
                fullWidth
              >
                <ScmuiIconText
                  className={classes.margin}
                  // InputProps={{
                  //   startAdornment:
                  //     touched.email && Boolean(errors.email) ? (
                  //       <InputAdornment position="start">
                  //         <EmailIcon style={{ color: "red" }} />
                  //       </InputAdornment>
                  //     ) : (
                  //       <InputAdornment position="start">
                  //         <EmailIcon />
                  //       </InputAdornment>
                  //     )
                  // }}
                  required
                  variant="outlined"
                  type="email"
                  label="Email"
                  name="email"
                  id="email"
                  // value={values.email}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                // error={
                // touched.companyName && Boolean(errors.companyName)
                // }
                fullWidth
              >
                <ScmuiIconText
                  className={classes.margin}
                  // InputProps={{
                  //   startAdornment:
                  //     touched.companyName && Boolean(errors.companyName) ? (
                  //       <InputAdornment position="start">
                  //         <BusinessIcon style={{ color: "red" }} />
                  //       </InputAdornment>
                  //     ) : (
                  //       <InputAdornment position="start">
                  //         <BusinessIcon />
                  //       </InputAdornment>
                  //     )
                  // }}
                  required
                  variant="outlined"
                  type="companyName"
                  label="Company Name"
                  name="companyName"
                  id="companyName"
                  // value={values.companyName}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                // error={
                // touched.companyWebsite && Boolean(errors.companyWebsite)
                // }
                fullWidth
              >
                <ScmuiIconText
                  className={classes.margin}
                  // InputProps={{
                  //   startAdornment:
                  //     touched.companyWebsite && Boolean(errors.companyWebsite) ? (
                  //       <InputAdornment position="start">
                  //         <LanguageIcon style={{ color: "red" }} />
                  //       </InputAdornment>
                  //     ) : (
                  //       <InputAdornment position="start">
                  //         <LanguageIcon />
                  //       </InputAdornment>
                  //     )
                  // }}
                  required
                  variant="outlined"
                  type="companyWebsite"
                  label="Company Website"
                  name="companyWebsite"
                  id="companyWebsite"
                  // value={values.companyWebsite}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </FormControl>
            </Grid>

            <FormControl
              variant="outlined"
              className={classes.formControl}
              fullWidth
              required
              // error={
              //   touched.skillPlatform &&
              //   Boolean(errors.skillPlatform)
              // }
            >
              <InputLabel
                ref={inputLabel}
                className={classes.focused}
                id="organization"
              >
                What type of Organization do you work with?
              </InputLabel>
              <Select
                native
                labelId="organization"
                id="organization"
                // value={values.organization}
                // onChange={handleChange}
                labelWidth={labelWidth}
                startAdornment={
                  <InputAdornment position="start">
                    <BusinessCenterIcon />
                  </InputAdornment>
                }
                // startAdornment={
                //   touched.skillName &&
                //   Boolean(errors.skillName) ? (
                //     <InputAdornment position="start">
                //       <BusinessCenterIcon style={{ color: "red" }} />
                //     </InputAdornment>
                //   ) : (
                //     <InputAdornment position="start">
                //       <BusinessCenterIcon />
                //     </InputAdornment>
                //   )
                // }
                style={{ color: "#132743" }}
              >
                <option aria-label="None" value="" />
                <option value={1}>Profile</option>
                <option value={2}>Freelance</option>
                <option value={3}>Agency</option>
                <option value={4}>{"Startup (< 500 employees)"}</option>
                <option value={5}>{"Enterprise (>500 employees)"}</option>
                <option value={6}>University</option>
                <option value={7}>Other</option>
              </Select>
            </FormControl>

            <Grid item xs={12}>
              <FormControl
                // error={touched.contactMessage && Boolean(errors.contactMessage)}
                fullWidth
                required
              >
                <TextareaAutosize
                  required
                  className={classes.textArea}
                  variant="outlined"
                  rowsMin={8}
                  placeholder="Share something about your skill."
                  defaultValue=""
                  name="contactMessage"
                  id="contactMessage"
                  // value={values.contactMessage}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
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
                  Send
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

export default Contact;
