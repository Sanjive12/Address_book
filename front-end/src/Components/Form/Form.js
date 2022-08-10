import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      website: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Forms data", postData);
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  return (
    <Container>
      <Paper className={classes.paper} elevation={"10"}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {!currentId ? "Create Contact" : "Edit Contact"}
          </Typography>
          <TextField
            name="creator"
            variant="standard"
            label="Name"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="title"
            variant="standard"
            label="Phone Number"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="standard"
            label="Address"
            fullWidth
            multiline
            rows={1}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="standard"
            label="email"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <TextField
            name="website"
            variant="standard"
            label="Website"
            fullWidth
            value={postData.website}
            onChange={(e) =>
              setPostData({ ...postData, website: e.target.value })
            }
          />
          {/* <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div> */}
          <Button
            style={{ backgroundColor: "#03C6C7", color: "#fff", margin: 10 }}
            className={classes.buttonSubmit}
            variant="contained"
            size="medium"
            type="submit"
          >
            Submit
          </Button>
          <Button
            style={{ backgroundColor: "#E83A59", color: "#fff", margin: 10 }}
            variant="contained"
            size="medium"
            onClick={clear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
