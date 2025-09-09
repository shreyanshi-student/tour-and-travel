import axios from "axios";
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

export const basename =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000/"          
    : "https://login2kashi.onrender.com/"; 

// CREATE or UPDATE Offer
export const createOrUpdateOffer = (formData, id = null) => async (dispatch) => {
  // alert(formData)
  try {
    dispatch({ type: OFFER_REQUEST });

    const res = id
      ? await axios.put(`${basename}api/auth/offer/${id}`, formData, { headers: { "Content-Type": "application/json" } })
      : await axios.post(`${basename}api/auth/offer`, formData, { headers: { "Content-Type": "application/json" } });

    dispatch({ type: OFFER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: OFFER_FAIL, payload: err.response?.data?.message || err.message });
  }
};

// FETCH ALL OFFERS
export const fetchOffers = () => async (dispatch) => {
  try {
    dispatch({ type: OFFER_LIST_REQUEST });
    const res = await axios.get("/api/offer");
    dispatch({ type: OFFER_LIST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: OFFER_LIST_FAIL, payload: err.response?.data?.message || err.message });
  }
};

// DELETE OFFER
export const deleteOffer = (id) => async (dispatch) => {
  try {
    dispatch({ type: OFFER_DELETE_REQUEST });
    await axios.delete(`/api/offer/${id}`);
    dispatch({ type: OFFER_DELETE_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: OFFER_DELETE_FAIL, payload: err.response?.data?.message || err.message });
  }
};
