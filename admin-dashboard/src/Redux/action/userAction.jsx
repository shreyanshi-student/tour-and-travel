import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
   USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL
} from "../constants/userConstants";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const res = await fetch("http://localhost:5000/api/auth/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Login failed");

    // Save both user & token in Redux
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { user: data.admin, token: data.token },
    });

    // Persist in localStorage
    localStorage.setItem("adminUser", JSON.stringify(data.admin));
    localStorage.setItem("adminToken", data.token);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("adminUser");
  localStorage.removeItem("adminToken");
  dispatch({ type: USER_LOGOUT });
};


// import {
 
// } from "../constants/userConstants";

// Fetch all users
// export const listUsers = () => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LIST_REQUEST });
//     const res = await fetch("http://localhost:5000/api/auth/users");
//     const data = await res.json();
//     dispatch({ type: USER_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: USER_LIST_FAIL, payload: error.message });
//   }
// };

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });
    await fetch(`http://localhost:5000/api/auth/users/${id}`, { method: "DELETE" });
    dispatch({ type: USER_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.message });
  }
};

// Add new user
export const addUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_ADD_REQUEST" });
    const res = await fetch("http://localhost:5000/api/auth/users/register", {
      method: "POST",
      body: formData, // FormData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    dispatch({ type: "USER_ADD_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "USER_ADD_FAIL", payload: error.message });
  }
};


// Update user
export const updateUser = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const res = await fetch(`http://localhost:5000/api/auth/users/${id}`, {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to update user");

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
};

// List users
export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const res = await fetch("http://localhost:5000/api/auth/users");
    const data = await res.json();
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.message });
  }
};