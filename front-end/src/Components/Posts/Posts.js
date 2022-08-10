import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Lottie from "react-lottie";

import Post from "./Post/Post";
import useStyles from "./styles";
import loadingAnimation from "../../assests/loading.json";

const Posts = ({ setCurrentId }) => {
  const post = useSelector((state) => state.posts); // reducer-> index.js post:post
  const classes = useStyles();
  console.log("Posts.js", post);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return !post.length ? (
    <Lottie options={defaultOptions} height={400} width={400} />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {post.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
