import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { ReduxState } from "../../../modules/createStore";
import SignUpDes from "./template";
import { Dispatch, AnyAction } from "redux";
import { signUpMod } from "../../../modules/user";

const SignUpOrg: FunctionComponent<{ dispatch: Dispatch }> = ({ dispatch }) => {
  const signUp = (e: { name: string; pass: string }) => {
    signUpMod(e.name, e.pass, dispatch);
  };

  return (
    <div>
      <SignUpDes signUp={signUp} />
    </div>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  SignUpOrg
);
