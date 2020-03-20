import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    // width: 100
  },
  media: {
    height: 280
  }
});

const Anchor = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Anchor target="_blank" href={props.demo}>
            Demo
          </Anchor>
        </Button>
        <Button size="small" color="primary">
          <Anchor target="_blank" href={props.code}>
            Code
          </Anchor>
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  code: PropTypes.string,
  demo: PropTypes.string
};
