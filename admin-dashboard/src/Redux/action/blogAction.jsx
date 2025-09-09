import axios from "axios";
import {
  BLOG_REQUEST,
  BLOG_SUCCESS,
  BLOG_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
} from "../constants/blogconstantds";

export const basename =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000/"          
    : "https://login2kashi.onrender.com/"; 

// CREATE or UPDATE Blog
export const createOrUpdateBlog = (blogData, id = null) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_REQUEST });

    const formData = new FormData();
    Object.keys(blogData).forEach((key) => formData.append(key, blogData[key]));

    const res = id
      ? await axios.put(`${basename}/api/auth/blogs/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      : await axios.post(`${basename}/api/auth/blogs`, formData, { headers: { "Content-Type": "multipart/form-data" } });

    dispatch({ type: BLOG_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: BLOG_FAIL, payload: err.response?.data?.message || err.message });
  }
};

// Fetch all blogs
export const fetchBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LIST_REQUEST });
    const res = await axios.get("/api/blogs");
    dispatch({ type: BLOG_LIST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: BLOG_LIST_FAIL, payload: err.response?.data?.message || err.message });
  }
};

// Delete blog
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DELETE_REQUEST });
    await axios.delete(`/api/blogs/${id}`);
    dispatch({ type: BLOG_DELETE_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: BLOG_DELETE_FAIL, payload: err.response?.data?.message || err.message });
  }
};
