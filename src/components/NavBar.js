import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ButtonBase onClick={() => handleClick("/")}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              George Harris
            </Typography>
          </ButtonBase>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              className={classes.button}
              onClick={() => handleClick("/blog")}
              sx={{ my: 2, display: "block" }}
            >
              Blog
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="React Frontend">
              <IconButton
                aria-label="Github"
                onClick={() =>
                  handleExternalClick(
                    "https://github.com/Georgeleeh/ReactBlogApp"
                  )
                }
              >
                <GitHubIcon className={classes.button} href="google.com" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Python Backend">
              <IconButton
                aria-label="Github"
                onClick={() =>
                  handleExternalClick(
                    "https://github.com/Georgeleeh/ReactBlogAPI"
                  )
                }
              >
                <GitHubIcon className={classes.button} href="google.com" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
