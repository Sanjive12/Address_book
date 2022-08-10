import {
  FETCH_ALL,
  CREATE,
  DELETE,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";
// state in the place posts
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  console.log(posts);
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; //actual post
    case CREATE:
      return [...posts, action.payload]; //new post get stored in it
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
