
import { createStore, combineReducers, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


import { blogReducer } from "../Redux/reducer/blogReducer";
import { offerReducer } from "../Redux/reducer/offerReducer";
import { teamReducer } from "../Redux/reducer/teamReducer";
import { userReducer } from "../Redux/reducer/userReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
  offer: offerReducer,
  team: teamReducer,
  user: userReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
