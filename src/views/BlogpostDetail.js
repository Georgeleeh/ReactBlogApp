import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

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
  const [blogpost, setBlogpost] = useState([]);
  const { blogpost_id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/blogpost/" + blogpost_id).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setBlogpost(data.blogpost);
      })
    );
  }, [blogpost_id]);

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
    </div>
  );
}

export default BlogpostDetail;
