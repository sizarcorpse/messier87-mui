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
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
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

const ResetPassword = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedB: true
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <motion.div animate={{ x: 100 }}>
      <Card className={classes.card}>
        <CardHeader
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          title={
            <Typography variant="h5" className={classes.headText}>
              Reset Password
            </Typography>
          }
          subheader={
            <>
              {" "}
              <Typography variant="h5" className={classes.neckText}>
                Don't have an Account?{" "}
                <Link to={"/s"} className={classes.LinkUnderlineRemove}>
                  Sign up{" "}
                </Link>
              </Typography>
            </>
          }
        />
        <CardContent>
          <Divider
            style={{
              marginTop: "25px"
            }}
          />
        </CardContent>

        <CardContent className={classes.div}>
          <form noValidate>
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submitButton}
              style={{ marginTop: 10 }}
            >
              <Typography variant="h5" className={classes.submitButtonText}>
                Send password
              </Typography>
            </Button>
          </form>
          <Divider
            style={{
              marginTop: "25px"
            }}
          />
          <Typography
            variant="h5"
            className={classes.neckText}
            style={{ marginTop: 25 }}
          >
            Already have an account?{" "}
            <Link to={"/"} className={classes.LinkUnderlineRemove}>
              Sign in{" "}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResetPassword;
