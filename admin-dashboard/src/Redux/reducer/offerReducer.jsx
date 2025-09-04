import {
  OFFER_REQUEST,
  OFFER_SUCCESS,
  OFFER_FAIL,
  OFFER_LIST_REQUEST,
  OFFER_LIST_SUCCESS,
  OFFER_LIST_FAIL,
  OFFER_DELETE_REQUEST,
  OFFER_DELETE_SUCCESS,
  OFFER_DELETE_FAIL,
} from "../constants/offerconstant";

const initialState = {
  loading: false,
  success: false,
  error: null,
  offer: null,
  offers: [],
  deleteSuccess: false,
};

export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFER_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case OFFER_SUCCESS:
      return { ...state, loading: false, success: true, offer: action.payload };
    case OFFER_FAIL:
      return { ...state, loading: false, error: action.payload };

    case OFFER_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case OFFER_LIST_SUCCESS:
      return { ...state, loading: false, offers: action.payload };
    case OFFER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case OFFER_DELETE_REQUEST:
      return { ...state, loading: true, deleteSuccess: false };
    case OFFER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteSuccess: true,
        offers: state.offers.filter((o) => o._id !== action.payload),
      };
    case OFFER_DELETE_FAIL:
      return { ...state, loading: false, deleteSuccess: false, error: action.payload };

    default:
      return state;
  }
};
