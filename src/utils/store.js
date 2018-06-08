import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
