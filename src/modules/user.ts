import { Action, Dispatch, AnyAction } from "redux";
import axios from "axios";

const req = axios.create({ baseURL: "http://localhost:1323" });

export interface UserState {
  name?: string;
  id?: string;
  session?: string;
  ui: { signup: boolean; login: boolean };
}

const initialUserState: UserState = {
  name: undefined,
  id: undefined,
  ui: { signup: false, login: false }
};

enum ActionName {
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  SIGNUP = "SIGNUP",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_FAIL = "SIGNUP_FAIL"
}

interface SignUpAction extends Action {
  type: ActionName.SIGNUP_SUCCESS;
  name: string;
  id: string;
}

export const signUpMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<SignUpAction | Action>
) => {
  dispatch({ type: ActionName.SIGNUP });
  const res = await req
    .post("/users/signup", { name, password })
    .catch(console.log);
  if (!res) {
    dispatch({ type: ActionName.SIGNUP_FAIL });
    return;
  }
  const data: { name: string; id: string } = res.data;
  dispatch({ type: ActionName.SIGNUP_SUCCESS, name: data.name, id: data.id });
};

interface LoginAction extends Action {
  type: ActionName.LOGIN_SUCCESS;
  name: string;
  id: string;
  session: string;
}

export const loginMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<LoginAction | Action>
) => {
  dispatch({ type: ActionName.LOGIN });
  const res = await req
    .post("/users/login", { name, password })
    .catch(console.log);
  if (!res) {
    dispatch({ type: ActionName.LOGIN_FAIL });
    return;
  }
  const data: { name: string; id: string; session: string } = res.data;
  dispatch({
    type: ActionName.LOGIN_SUCCESS,
    name: data.name,
    id: data.id,
    session: data.session
  });
};

type Actions =
  | SignUpAction
  | LoginAction
  | {
      type:
        | ActionName.SIGNUP
        | ActionName.SIGNUP_FAIL
        | ActionName.LOGIN
        | ActionName.LOGIN_FAIL;
    };

export default function reducer(prev = initialUserState, action: Actions) {
  switch (action.type) {
    case ActionName.SIGNUP: {
      const next: UserState = { ...prev, ui: { ...prev.ui, signup: true } };
      return next;
    }
    case ActionName.SIGNUP_FAIL: {
      const next: UserState = { ...prev, ui: { ...prev.ui, signup: false } };
      return next;
    }
    case ActionName.SIGNUP_SUCCESS: {
      const next: UserState = {
        ...prev,
        name: action.name,
        id: action.id,
        ui: { ...prev.ui, signup: false }
      };
      return next;
    }
    case ActionName.LOGIN: {
      const next: UserState = { ...prev, ui: { ...prev.ui, login: true } };
      return next;
    }
    case ActionName.LOGIN_FAIL: {
      const next: UserState = { ...prev, ui: { ...prev.ui, login: false } };
      return next;
    }
    case ActionName.LOGIN_SUCCESS: {
      const next: UserState = {
        ...prev,
        name: action.name,
        id: action.id,
        session: action.session,
        ui: { ...prev.ui, login: false }
      };
      return next;
    }
    default:
      return prev;
  }
}
