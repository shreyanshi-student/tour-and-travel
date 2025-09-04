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

const initialState = {
  loading: false,
  success: false,
  error: null,
  member: null,
  members: [],
  deleteSuccess: false,
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEAM_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case TEAM_SUCCESS:
      return { ...state, loading: false, success: true, member: action.payload };
    case TEAM_FAIL:
      return { ...state, loading: false, error: action.payload };

    case TEAM_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case TEAM_LIST_SUCCESS:
      return { ...state, loading: false, members: action.payload };
    case TEAM_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case TEAM_DELETE_REQUEST:
      return { ...state, loading: true, deleteSuccess: false };
    case TEAM_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteSuccess: true,
        members: state.members.filter((m) => m._id !== action.payload),
      };
    case TEAM_DELETE_FAIL:
      return { ...state, loading: false, deleteSuccess: false, error: action.payload };

    default:
      return state;
  }
};
