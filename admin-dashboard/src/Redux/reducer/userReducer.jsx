import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";


const initialState = {
  user: JSON.parse(localStorage.getItem("adminUser")) || null,
  token: localStorage.getItem("adminToken") || null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };

    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    case USER_LOGOUT:
      return { user: null, token: null, loading: false, error: null };

    default:
      return state;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("adminUser");
  localStorage.removeItem("adminToken");
  dispatch({ type: USER_LOGOUT });
}