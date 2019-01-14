import { Action, Dispatch } from "redux";
import { ITweet } from "../const/index";
import { apiAction } from "../utill/api";

export interface UserState {
  timeline: ITweet[];
  ui: { post: boolean };
}

const initialUserState: UserState = {
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
  payload: { tweet: ITweet };
}

export const postTweet = async (
  code: string,
  session: string,
  tweet: ITweet,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    await apiAction(
      { dir: "/timeline/post", data: { code, session, tweet } },
      ActionName.POST,
      dispatch
    ).catch(() => reject("fail"));
    resolve(true);
  });
};

export default function reducer(state = initialUserState, action: Actions) {
  switch (action.type) {
    case ActionName.POST + START: {
      return { ...state, ui: { ...state.ui, post: true } } as UserState;
    }
    case ActionName.POST + FAIL: {
      return { ...state, ui: { ...state.ui, post: false } } as UserState;
    }
    case ActionName.POST: {
      return {
        ...state,
        timeline: state.timeline.concat(action.payload.tweet),
        ui: { ...state.ui, post: false }
      } as UserState;
    }
    default:
      return state;
  }
}
