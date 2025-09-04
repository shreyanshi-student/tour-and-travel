import axios from "axios";
import {
  TEAM_REQUEST,
  TEAM_SUCCESS,
  TEAM_FAIL,
  TEAM_LIST_REQUEST,
  TEAM_LIST_SUCCESS,
  TEAM_LIST_FAIL,
  TEAM_DELETE_REQUEST,
  TEAM_DELETE_SUCCESS,
  TEAM_DELETE_FAIL,
} from "../constants/teamConstants";

// CREATE or UPDATE Team Member
export const createOrUpdateTeam = (teamData, id = null) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_REQUEST });

    const formData = new FormData();
    Object.keys(teamData).forEach((key) => formData.append(key, teamData[key]));

    const res = id
      ? await axios.put(`/api/team/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      : await axios.post("/api/team", formData, { headers: { "Content-Type": "multipart/form-data" } });

    dispatch({ type: TEAM_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: TEAM_FAIL, payload: err.response?.data?.message || err.message });
  }
};

// FETCH ALL TEAM MEMBERS
export const fetchTeamMembers = () => async (dispatch) => {
  try {
    dispatch({ type: TEAM_LIST_REQUEST });
    const res = await axios.get("/api/team");
    dispatch({ type: TEAM_LIST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: TEAM_LIST_FAIL, payload: err.response?.data?.message || err.message });
  }
};

// DELETE TEAM MEMBER
export const deleteTeamMember = (id) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_DELETE_REQUEST });
    await axios.delete(`/api/team/${id}`);
    dispatch({ type: TEAM_DELETE_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: TEAM_DELETE_FAIL, payload: err.response?.data?.message || err.message });
  }
};
