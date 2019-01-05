import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createHistory from "history/createBrowserHistory";
import user, { UserState } from "./user";

const history = createHistory();

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({ user }),
    applyMiddleware(thunk, logger)
  );
  return { store, history };
}

export interface ReduxState {
  user: UserState;
}
