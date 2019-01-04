import { Action, Dispatch } from "redux";
import axios from "axios";

const req = axios.create({ baseURL: "http://localhost:1323" });

export interface UserState {
  name?: string;
  id?: string;
}

const initialUserState: UserState = { name: undefined, id: undefined };

enum ActionName {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP"
}

interface SignUpAction extends Action {
  type: ActionName.SIGNUP;
  name: string;
  id: string;
}

export const signUpMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<SignUpAction>
) => {
  const res = await req.post("/users", { name, password }).catch(console.log);
  if (!res) return;
  const data: { name: string; id: string } = res.data;
  dispatch({ type: ActionName.SIGNUP, name: data.name, id: data.id });
};

interface ILogin extends Action {
  type: ActionName.LOGIN;
  name: string;
  id: string;
}

type Actions = ILogin | SignUpAction;

export default function reducer(prev = initialUserState, action: Actions) {
  switch (action.type) {
    case ActionName.SIGNUP: {
      const next: UserState = { ...prev, name: action.name, id: action.id };
      return next;
    }
    case ActionName.LOGIN: {
      const next: UserState = { ...prev, name: action.name, id: action.id };
      return next;
    }
    default:
      return prev;
  }
}
