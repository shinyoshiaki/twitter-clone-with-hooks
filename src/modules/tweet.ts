import { Action, Dispatch } from "redux";
import { ITweet } from "../const/index";
import { apiAction } from "../utill/api";

export interface TweetState {
  timeline: ITweet[];
  ui: { post: boolean };
}

const initialTweetState: TweetState = {
  timeline: [],
  ui: { post: false }
};

const START = "_start",
  FAIL = "_fail";

enum ActionName {
  POST = "POST"
}

type Actions = Post;

interface Post extends Action {
  type: ActionName.POST;
  payload: ITweet;
}

interface PostTweet {
  session: string;
  code: string;
  text: string;
}

export const postTweet = async (
  postTweet: PostTweet,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    await apiAction(
      { dir: "/tweet/post", data: { ...postTweet } },
      ActionName.POST,
      dispatch
    ).catch(() => reject("fail"));
    resolve(true);
  });
};

export default function reducer(state = initialTweetState, action: Actions) {
  switch (action.type) {
    case ActionName.POST + START: {
      return { ...state, ui: { ...state.ui, post: true } } as TweetState;
    }
    case ActionName.POST + FAIL: {
      return { ...state, ui: { ...state.ui, post: false } } as TweetState;
    }
    case ActionName.POST: {
      return {
        ...state,
        timeline: state.timeline.concat(action.payload),
        ui: { ...state.ui, post: false }
      } as TweetState;
    }
    default:
      return state;
  }
}
