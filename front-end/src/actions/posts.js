import * as api from "../api";

import {
  FETCH_ALL,
  CREATE,
  DELETE,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";
//Action Creators : are the function that returns a action

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
    //   const action = { type: "FETCH_ALL", payload: [] };
    //   dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    console.log("Actions", searchQuery)
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    console.log("Actionpost", data);
    dispatch({ type: CREATE, payload: data });
    console.log("Actions/posts", data);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post); //response -> destruct {data}
    dispatch({ type: UPDATE, payload: data });
    console.log("After the update", data);
  } catch (error) {
    console.log(error);
  }
};

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);
//     dispatch({ type: "DELETE", payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
