import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Grid,
  Typography,
  Button,
  IconButton,
  Select,
  MenuItem,
  SvgIcon
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ImportExportIcon from "@material-ui/icons/ImportExport";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 4,
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
    },
    "&.MuiNativeSelect-icon": {
      color: "red"
    }
  },

  formControlz: {
    "&.MuiInput-underline::before": {
      content: "none",
      left: 100
    },
    "&.MuiInput-underline::after": {
      border: "none"
    },
    "& .MuiSelect-select": {
      paddingRight: 8,
      background: "none",
      color: "none"
    }
  },
  neckText2: {
    fontSize: 14,
    fontWeight: 500,
    fontStyle: "normal",
    color: "#132743",
    textTransform: "none"
  }
}));

const blackIcon = () => {
  return (
    <SvgIcon>
      <svg>
        <path />
      </svg>
    </SvgIcon>
  );
};

const Sort = () => {
  const classes = useStyles();
  const [sortValue, setSortValue] = React.useState("reviewCreateAt");
  const [sortOptionOpen, setSortOptionOpen] = React.useState(false);

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const handleSortClose = () => {
    setSortOptionOpen(false);
  };

  const handleSortOpen = () => {
    setSortOptionOpen(true);
  };

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <FormControl className={classes.formControl}>
          <Select
            IconComponent={blackIcon}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={sortOptionOpen}
            onClose={handleSortClose}
            onOpen={handleSortOpen}
            defaultValue="reviewCreateAt"
            onChange={handleSortChange}
            className={classes.formControlz}
            displayEmpty
          >
            <MenuItem value="reviewCreateAt" default courseSelected>
              {
                <Button
                  size="small"
                  startIcon={<DateRangeIcon style={{ fontSize: 16 }} />}
                >
                  <Typography variant="h5" className={classes.neckText2}>
                    Date Added
                  </Typography>
                </Button>
              }
            </MenuItem>

            <MenuItem value={20}>
              {" "}
              <Button
                size="small"
                startIcon={<ThumbUpAltIcon style={{ fontSize: 16 }} />}
              >
                <Typography variant="h5" className={classes.neckText2}>
                  Most Liked
                </Typography>
              </Button>
            </MenuItem>
            <MenuItem value={30}>
              {" "}
              <Button
                size="small"
                startIcon={<CommentIcon style={{ fontSize: 16 }} />}
              >
                <Typography variant="h5" className={classes.neckText2}>
                  Most Comments
                </Typography>
              </Button>
            </MenuItem>
          </Select>
        </FormControl>
        <IconButton style={{ right: 29 }}>
          <ImportExportIcon style={{ fontSize: 20, color: "#1d2d50" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Sort;
