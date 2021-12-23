import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  ButtonBase,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
    color: "#FFFFFF",
  },
  button: {
    color: "#FFFFFF",
  },
}));

function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  function handleExternalClick(link) {
    window.open(link);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <ButtonBase onClick={() => handleClick("/")}>
          <Typography variant="h6" className={classes.title}>
            George Harris
          </Typography>
        </ButtonBase>
        <div className={classes.menuButton}>
          <Button
            className={classes.button}
            onClick={() => handleClick("/blog")}
          >
            Blog
          </Button>
        </div>
        <Tooltip title="React Frontend">
          <IconButton
            aria-label="Github"
            onClick={() =>
              handleExternalClick("https://github.com/Georgeleeh/ReactBlogApp")
            }
          >
            <GitHubIcon className={classes.button} href="google.com" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Python Backend">
          <IconButton
            aria-label="Github"
            onClick={() =>
              handleExternalClick("https://github.com/Georgeleeh/ReactBlogAPI")
            }
          >
            <GitHubIcon className={classes.button} href="google.com" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
