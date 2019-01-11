import { Action, Dispatch } from "redux";
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
  SIGNUP_FAIL = "SIGNUP_FAIL",
  UPDATE = "UPDATE",
  UPDATE_SUCCESS = "UPDATE_SUCCESS",
  UPDATE_FAIL = "UPDATE_FAIL"
}

type Actions =
  | SignUpSuccess
  | LoginSuccess
  | UpdateSuccess
  | {
      type:
        | ActionName.SIGNUP
        | ActionName.SIGNUP_FAIL
        | ActionName.LOGIN
        | ActionName.LOGIN_FAIL
        | ActionName.UPDATE
        | ActionName.UPDATE_FAIL;
    };

interface SignUpSuccess extends Action {
  type: ActionName.SIGNUP_SUCCESS;
  payload: { name: string; id: string };
}

interface LoginSuccess extends Action {
  type: ActionName.LOGIN_SUCCESS;
  payload: { name: string; id: string; session: string };
}

interface UpdateSuccess extends Action {
  type: ActionName.UPDATE_SUCCESS;
  payload: { name: string; id: string };
}

export const signUpMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<SignUpSuccess | Action>
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
  const success: Dispatch<SignUpSuccess> = dispatch;
  success({
    type: ActionName.SIGNUP_SUCCESS,
    payload: { name: data.name, id: data.id }
  });
};

export const loginMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<LoginSuccess | Action>
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
  const success: Dispatch<LoginSuccess> = dispatch;
  success({
    type: ActionName.LOGIN_SUCCESS,
    payload: { name: data.name, id: data.id, session: data.session }
  });
};

export const updateMod = async (
  name: string,
  password: string,
  session: string,
  dispatch: Dispatch<UpdateSuccess | Action>
) => {
  dispatch({ type: ActionName.UPDATE });
  const res = await req
    .post("/users/update", { name, password, session })
    .catch(console.log);
  if (!res) {
    dispatch({ type: ActionName.UPDATE_FAIL });
    return;
  }
  const data: { name: string; id: string } = res.data;
  const success: Dispatch<UpdateSuccess> = dispatch;
  success({
    type: ActionName.UPDATE_SUCCESS,
    payload: { name: data.name, id: data.id }
  });
};

export default function reducer(state = initialUserState, action: Actions) {
  switch (action.type) {
    case ActionName.SIGNUP: {
      return { ...state, ui: { ...state.ui, signup: true } } as UserState;
    }
    case ActionName.SIGNUP_FAIL: {
      return { ...state, ui: { ...state.ui, signup: false } } as UserState;
    }
    case ActionName.SIGNUP_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        ui: { ...state.ui, signup: false }
      } as UserState;
    }
    case ActionName.LOGIN: {
      return { ...state, ui: { ...state.ui, login: true } } as UserState;
    }
    case ActionName.LOGIN_FAIL: {
      return { ...state, ui: { ...state.ui, login: false } } as UserState;
    }
    case ActionName.LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        session: action.payload.session,
        ui: { ...state.ui, login: false }
      } as UserState;
    }
    case ActionName.UPDATE_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id
      } as UserState;
    }
    default:
      return state;
  }
}
