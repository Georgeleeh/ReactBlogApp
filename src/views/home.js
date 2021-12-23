import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { BlogFeed } from "../components/BlogFeed";

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

function Home() {
  const [blogposts, setBlogposts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/blogpost", { mode: "cors" }).then((response) =>
      response.json().then((data) => {
        setBlogposts(data.blogposts);
      })
    );
  }, []);

  function featuredPost(blogpost) {
    return blogpost.featured;
  }

  return (
    <div>
      <div className={classes.main_body}>
        <Typography className={classes.main_title} variant="h3" component="h1">
          George Makes Stuff
        </Typography>
        <Typography className={classes.text_body} variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
      <div className={classes.feeds}>
        <BlogFeed
          blogposts={blogposts.filter(featuredPost)}
          feed_name={"⭐ Featured Posts"}
        />
        <BlogFeed
          blogposts={blogposts.slice(-3, blogposts.length).reverse()}
          feed_name={"🔥 New Posts"}
        />
      </div>
    </div>
  );
}

export default Home;
