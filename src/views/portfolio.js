import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { BlogPostCard } from "../components/BlogPostCard";
import TagField from "../components/TagField";

const useStyles = makeStyles({
  main_title: {},
  main_body: {
    marginTop: 90,
    marginBottom: 90,
  },
  tag_field: {
    width: 500,
    marginBottom: 20,
  },
  feeds: {},
  text_body: {
    marginTop: 50,
  },
});

function Portfolio() {
  const [blogposts, setBlogposts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/blogpost/portfolio", { mode: "cors" }).then(
      (response) =>
        response.json().then((data) => {
          setBlogposts(data.blogposts.reverse());
        })
    );
  }, []);

  return (
    <div>
      <div className={classes.main_body}>
        <Typography className={classes.main_title} variant="h3" component="h1">
          George Made This Stuff
        </Typography>
      </div>
      <Grid container spacing={3}>
        {blogposts.map((blogpost) => {
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

export default Portfolio;
