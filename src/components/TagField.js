import { Chip, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export const TagField = () => {
  const [tags, setTags] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:5000/tag").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setTags(data.tags);
      })
    );
  }, []);

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={tags}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Tags"
            placeholder="Tags"
          />
        )}
      />
    </div>
  );
};
