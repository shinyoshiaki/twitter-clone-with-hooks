import { Action, Dispatch } from "redux";
import axios from "axios";

const req = axios.create({ baseURL: "http://localhost:1323" });

export interface UserState {
  name?: string;
  id?: string;
  ui: { signup: boolean; login: boolean };
}

const initialUserState: UserState = {
  name: undefined,
  id: undefined,
  ui: { signup: false, login: false }
};

enum ActionName {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_FAIL = "SIGNUP_FAIL"
}

interface SignUpAction extends Action {
  type: ActionName;
  name: string;
  id: string;
}

export const signUpMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<SignUpAction | Action>
) => {
  dispatch({ type: ActionName.SIGNUP });
  const res = await req.post("/users", { name, password }).catch(console.log);
  if (!res) {
    dispatch({ type: ActionName.SIGNUP_FAIL });
    return;
  }
  const data: { name: string; id: string } = res.data;
  dispatch({ type: ActionName.SIGNUP_SUCCESS, name: data.name, id: data.id });
};

interface ILogin extends Action {
  type: ActionName;
  name: string;
  id: string;
}

type Actions = ILogin | SignUpAction;

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
    default:
      return prev;
  }
}
