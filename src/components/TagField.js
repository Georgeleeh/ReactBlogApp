import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { Component } from "react";

class TagField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/tag", { mode: "cors" }).then((response) =>
      response.json().then((data) => {
        this.setState((state) => ({ tags: data.tags }));
      })
    );
  }

  render() {
    return (
      <Autocomplete
        multiple
        id="tags-outlined"
        onChange={this.props.handleChange}
        options={this.state.tags}
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
  }
}

export default TagField;
