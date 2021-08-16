import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  ButtonBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
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
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
