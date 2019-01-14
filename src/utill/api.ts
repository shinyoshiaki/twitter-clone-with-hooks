import axios from "axios";
import { Dispatch } from "redux";

export const req = axios.create({ baseURL: "http://localhost:1323" });

const START = "_start",
  FAIL = "_fail";

export const apiAction = async (
  request: { dir: string; data: object },
  type: string,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    dispatch({ type: type + START });
    console.log(request.data);
    const res = await req.post(request.dir, request.data).catch(console.log);
    if (res) {
      dispatch({ type, payload: { ...res.data } });
      resolve(true);
    } else {
      dispatch({ type: type + FAIL });
      reject("fail");
    }
  });
};
