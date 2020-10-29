import React from "react";
import Contents from "./Contents";
import Profile from "./Profile";
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
  Paper
} from "@material-ui/core";
function Landing() {
  return (
    <Grid container component="main" spacing={2}>
      <Grid item xs={12} xl={4} lg={4} md={5} sm={12}>
        <Profile />
      </Grid>
      <Grid item xs={12} xl={8} lg={8} md={7} sm={false}>
        <Contents />
      </Grid>
    </Grid>
  );
}

export default Landing;
