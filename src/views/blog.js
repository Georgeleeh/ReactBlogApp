import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { BlogPostCard } from "../components/BlogPostCard";

const useStyles = makeStyles({
  main_title: {},
  main_body: {
    marginTop: 90,
    marginBottom: 90,
  },
  feeds: {},
  text_body: {
    marginTop: 50,
  },
});

function Blog(tag) {
  const [blogposts, setBlogposts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:5000/blogpost").then((response) =>
      response.json().then((data) => {
        setBlogposts(data.blogposts);
      })
    );
  }, []);

  return (
    <div>
      <div className={classes.main_body}>
        <Typography className={classes.main_title} variant="h3" component="h1">
          George Talks Stuff
        </Typography>
      </div>
      <Grid container spacing={3}>
        {blogposts.reverse().map((blogpost) => {
          return (
            <Grid key={blogpost.id} item>
              <BlogPostCard blogpost={blogpost} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Blog;
