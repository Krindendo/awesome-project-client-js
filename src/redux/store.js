import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { users, ui, todo, home, cloud } from "./reducers";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  users,
  ui,
  todo,
  home,
  cloud,
});

const enhancer = compose(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
