import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Home from "./views/home";
import { Route, Switch } from "react-router-dom";
import Blog from "./views/blog";
import BlogpostDetail from "./views/BlogpostDetail";
import Portfolio from "./views/portfolio";

const useStyles = makeStyles({
  root: {
    justifyContent: "space-around",
    marginTop: 50,
    maxWidth: 1100,
    margin: "auto",
  },
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

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <div className={classes.root}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/blog/:blogpost_id" component={BlogpostDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
