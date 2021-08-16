import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Home from "./views/home";
import { Route, Switch } from "react-router-dom";
import Blog from "./views/blog";

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
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
