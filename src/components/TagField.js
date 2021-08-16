import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect, useState } from "react";

export const TagField = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tag").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setTags(data.tags);
      })
    );
  }, []);

  return (
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
  );
};
