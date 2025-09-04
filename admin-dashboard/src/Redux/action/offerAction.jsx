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

// CREATE or UPDATE Offer
export const createOrUpdateOffer = (offerData, id = null) => async (dispatch) => {
  try {
    dispatch({ type: OFFER_REQUEST });

    const res = id
      ? await axios.put(`/api/offer/${id}`, offerData, { headers: { "Content-Type": "application/json" } })
      : await axios.post("/api/offer", offerData, { headers: { "Content-Type": "application/json" } });

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
