import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authentication, users } from "./reducers";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  authentication: authentication,
  users: users,
});

const enhancer = compose(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
