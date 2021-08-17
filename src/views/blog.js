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

function Blog() {
  const [blogposts, setBlogposts] = useState([]);
  const [visBlogposts, setVisBlogposts] = useState([]);
  const [tags, setTags] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:5000/blogpost").then((response) =>
      response.json().then((data) => {
        setBlogposts(data.blogposts.reverse());
        setVisBlogposts(data.blogposts);
      })
    );
  }, []);

  function handleTagsChange(event, values) {
    const mappedValues = values.map((v) => {
      return v.name;
    });

    setTags(mappedValues);

    if (mappedValues.length < 1) {
      setVisBlogposts(blogposts);
    } else {
      setVisBlogposts(
        blogposts.filter((blogpost) => {
          return blogpost.tags
            .map((t) => {
              return t.name;
            })
            .some((r) => mappedValues.includes(r));
        })
      );
    }
  }

  return (
    <div>
      <div className={classes.main_body}>
        <Typography className={classes.main_title} variant="h3" component="h1">
          George Talks Stuff
        </Typography>
      </div>
      <div className={classes.tag_field}>
        <TagField handleChange={handleTagsChange} />
      </div>
      <Grid container spacing={3}>
        {visBlogposts.map((blogpost) => {
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
