import React, { useEffect, useState } from "react";
import { CssBaseline, makeStyles, Typography } from "@material-ui/core";
import NavBar from "./components/NavBar";
import { BlogFeed } from "./components/BlogFeed";

const useStyles = makeStyles({
  root: {
    justifyContent: "space-around",
    marginTop: 50,
    maxWidth: 1200,
    marginLeft: 200,
    marginRight: 200,
  },
  main_title: {},
  main_body: {
    marginTop: 80,
    marginBottom: 80,
  },
  feeds: {},
  text_body: {
    marginTop: 50,
  },
});

function App() {
  const [blogposts, setBlogposts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:5000/blogpost").then((response) =>
      response.json().then((data) => {
        console.log(data.blogposts);
        setBlogposts(data.blogposts);
      })
    );
  }, []);

  function featuredPost(blogpost) {
    return blogpost.featured;
  }

  function notFeaturedPost(blogpost) {
    return !blogpost.featured;
  }

  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <div className={classes.root}>
        <div className={classes.main_body}>
          <Typography
            className={classes.main_title}
            variant="h3"
            component="h1"
          >
            George Makes Stuff
          </Typography>
          <Typography
            className={classes.text_body}
            variant="body1"
            component="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
          <BlogFeed
            blogposts={blogposts.filter(notFeaturedPost)}
            feed_name={"🍔 Not Featured Posts"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
