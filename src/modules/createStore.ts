import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createHistory from "history/createBrowserHistory";
import user, { UserState } from "./user";
import tweet, { TweetState } from "./tweet";

const history = createHistory();

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({ user, tweet }),
    applyMiddleware(thunk, logger)
  );
  return { store, history };
}

export interface ReduxState {
  user: UserState;
  tweet: TweetState;
}
