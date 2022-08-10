import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from '@mui/icons-material/Phone';

import useStyles from "./styles";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => setCurrentId(post._id)}
          >

            <MoreVertIcon />

          </IconButton>
        }
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />

      {/* <CardMedia
        className={classes.media}
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
        title={post.title}
      /> */}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
        <PhoneIcon className={classes.phone} fontSize="small" />
      </Typography>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.website}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button
          size={"small"}
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >

          <FavoriteIcon />
          &nbsp;

        </Button>
        <Button
          className={classes.btnDelete}
          size="small"
          color="secondary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
