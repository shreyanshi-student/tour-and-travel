import {
  BLOG_REQUEST, BLOG_SUCCESS, BLOG_FAIL,
  BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS, BLOG_LIST_FAIL,
  BLOG_DELETE_REQUEST, BLOG_DELETE_SUCCESS, BLOG_DELETE_FAIL,
} from "../constants/blogconstantds";

const initialState = {
  loading: false,
  success: false,
  error: null,
  blog: null,
  blogs: [],
  deleteSuccess: false,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case BLOG_SUCCESS:
      return { ...state, loading: false, success: true, blog: action.payload };
    case BLOG_FAIL:
      return { ...state, loading: false, error: action.payload };

    case BLOG_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case BLOG_LIST_SUCCESS:
      return { ...state, loading: false, blogs: action.payload };
    case BLOG_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case BLOG_DELETE_REQUEST:
      return { ...state, loading: true, deleteSuccess: false };
    case BLOG_DELETE_SUCCESS:
      return { ...state, loading: false, deleteSuccess: true, blogs: state.blogs.filter(b => b._id !== action.payload) };
    case BLOG_DELETE_FAIL:
      return { ...state, loading: false, deleteSuccess: false, error: action.payload };

    default:
      return state;
  }
};
