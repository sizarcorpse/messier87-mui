import React, { useEffect, useState } from "react";

import withWidth from "@material-ui/core/withWidth";
import withStyles from "@material-ui/core/styles/withStyles";

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
  InputLabel,
  Checkbox
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CategoryIcon from "@material-ui/icons/Category";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = (theme) => ({
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
  }
});

function FeaturedSkill(props) {
  const { classes } = props;
  const [platform, setPlatform] = React.useState("");
  const [selectedPlatform, setSelectedPlatforms] = React.useState("");
  const [selectedSkills, setSelectedSkills] = React.useState([]);

  React.useEffect(() => {
    setLabelWidthY(inputLabelY.current.offsetWidth);
  }, []);

  const [labelWidthY, setLabelWidthY] = React.useState(0);
  const inputLabelY = React.useRef(null);
  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  //   console.log({
  //     name: platform,
  //     second: selectedPlatform,
  //     topskill: selectedSkills
  //   });

  return (
    <Grid container spacing={2}>
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
            <option value={"Programming Language"}>Programming Language</option>
            <option value={"Graphic Design"}>Graphic Design</option>
          </Select>
        </FormControl>
      </Grid>
      {platform === "Web Development" || platform === "Cloud" ? (
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              multiple
              size="small"
              fullWidth
              options={top100Films}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(option, { selected }) => (
                <>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </>
              )}
              onChange={(event, newSelecedSkill) => {
                setSelectedPlatforms([...newSelecedSkill]);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={
                    platform === "Web Development"
                      ? "Programing Language"
                      : platform === "Cloud"
                      ? "Cloud Service provider"
                      : null
                  }
                  placeholder="Favorites"
                />
              )}
            />
          </FormControl>
        </Grid>
      ) : null}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Autocomplete
            multiple
            size="small"
            fullWidth
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(option, { selected }) => (
              <>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </>
            )}
            onChange={(event, newSelecedSkill) => {
              setSelectedSkills([...newSelecedSkill]);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select Skill"
                placeholder="Favorites"
              />
            )}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default withStyles(useStyles)(FeaturedSkill);

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 }
];
