import React from "react";
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
  Checkbox
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FaceIcon from "@material-ui/icons/Face";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import { motion } from "framer-motion";

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
  cardRoot: {
    maxWidth: 400,
    padding: 20,
    paddingBottom: 100,
    background:
      "url(https://firebasestorage.googleapis.com/v0/b/messier87-development.appspot.com/o/wave.svg?alt=media&token=dead2046-9e45-4d55-a0ea-effb9435d89b)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    height: 763
  },

  headText: {
    fontSize: 40,
    letterSpacing: -1.4,
    wordSpacing: -3.8,
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
  // glogging: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   // width: 400,
  //   // marginLeft: 20,
  //   marginTop: 0,
  //   padding: 0
  //   // paddingLeft: 16
  // },

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
  }
}));

const Signup = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedB: true
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <motion.div animate={{ x: 100 }}>
      <Card className={classes.cardRoot}>
        <CardHeader
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          title={
            <Typography variant="h5" className={classes.headText}>
              Create Account
            </Typography>
          }
          subheader={
            <>
              {" "}
              <Typography variant="h5" className={classes.neckText}>
                Already have an account?{" "}
                <Link to={"/"} className={classes.LinkUnderlineRemove}>
                  Sign in{" "}
                </Link>
              </Typography>
            </>
          }
        />
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<AlternateEmailIcon />}
            className={classes.submitButton}
          >
            <Typography variant="h5" className={classes.submitButtonText}>
              Sign up with google
            </Typography>
          </Button>
          <Divider
            style={{
              marginTop: "25px"
            }}
          />{" "}
        </CardContent>

        <CardContent>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl error fullWidth>
                  <ScmuiIconText
                    className={classes.margin}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className={classes.icon}
                        >
                          <PersonIcon />
                        </InputAdornment>
                      )
                    }}
                    label="First Name"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl error fullWidth>
                  <ScmuiIconText
                    className={classes.margin}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      )
                    }}
                    label="Last Name"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </FormControl>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <FormControl error fullWidth>
                  <ScmuiIconText
                    className={classes.margin}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaceIcon />
                        </InputAdornment>
                      )
                    }}
                    label="Username"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl error fullWidth>
                  <ScmuiIconText
                    className={classes.margin}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      )
                    }}
                    label="Email"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl error fullWidth>
                  <ScmuiIconText
                    className={classes.margin}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      )
                    }}
                    type="password"
                    label="Password"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      style={{ color: "#a1eafb" }}
                      size="small"
                    />
                  }
                  label={
                    <Typography variant="h5" className={classes.neckText}>
                      I agree to the{" "}
                      <Link className={classes.LinkUnderlineRemove}>
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link className={classes.LinkUnderlineRemove}>
                        Privacy Policy
                      </Link>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submitButton}
              style={{ marginTop: 10 }}
            >
              <Typography variant="h5" className={classes.submitButtonText}>
                Create Now
              </Typography>
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Signup;
