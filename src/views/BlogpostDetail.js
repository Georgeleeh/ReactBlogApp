import React, { useEffect, useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  main_title: {},
  cover_image: {
    maxHeight: 400,
  },
  main_body: {
    marginTop: 90,
    marginBottom: 90,
  },
  feeds: {},
  text_body: {
    marginTop: 50,
  },
});

function BlogpostDetail() {
  const classes = useStyles();
  const history = useHistory();
  const [blogpost, setBlogpost] = useState([]);
  const { blogpost_id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/blogpost/" + blogpost_id).then((response) =>
      response.json().then((data) => {
        setBlogpost(data.blogpost);
      })
    );
  }, [blogpost_id]);

  function deletePost() {
    fetch("http://localhost:5000/blogpost/" + blogpost_id, {
      method: "DELETE",
    }).then(history.push("/blog"));
  }

  return (
    <div>
      <div className={classes.main_body}>
        <img
          className={classes.cover_image}
          src={blogpost.cover_image}
          title={blogpost.title}
          alt={blogpost.title}
        />
        <Typography className={classes.main_title} variant="h3" component="h1">
          {blogpost.title}
        </Typography>
        <Typography className={classes.text_body} variant="body1" component="p">
          {blogpost.content}
        </Typography>
      </div>
      <Button
        onClick={deletePost}
        variant="outlined"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
}

export default BlogpostDetail;
