import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { BlogPostCard } from "./BlogPostCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  grid: {
    flexWrap: "nowrap",
    overflow: "scroll",
  },
  media: {
    height: 140,
  },
  post_title: {
    fontSize: 18,
  },
  feed_title: {
    fontSize: 20,
    marginBottom: 12,
  },
  tag: {
    fontSize: 14,
    marginTop: 10,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const BlogFeed = ({ blogposts, feed_name }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.feed_title} variant="h5" component="h2">
        {feed_name}
      </Typography>
      <Grid container className={classes.grid} spacing={3}>
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
};
