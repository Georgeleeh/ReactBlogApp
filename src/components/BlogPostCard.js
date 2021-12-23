import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  CardActionArea,
  CardActions,
  CardMedia,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import BookIcon from "@material-ui/icons/Book";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 320,
  },
  media: {
    height: 140,
    objectFit: "cover",
  },
  post_title: {
    fontSize: 18,
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

export const BlogPostCard = ({ blogpost }) => {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card} variant="outlined" key={blogpost.id}>
      <CardActionArea
        onClick={() => {
          history.push("/blog/" + blogpost.id);
        }}
      >
        <CardMedia
          className={classes.media}
          image={blogpost.cover_image}
          title={blogpost.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            className={classes.post_title}
            variant="h5"
            component="h2"
          >
            {blogpost.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to read later">
          <BookIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {blogpost.one_liner}
          </Typography>
          <Typography className={classes.tag}>
            {blogpost.tags.map((tag, index) => {
              return (index ? ", " : "") + tag.name;
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
