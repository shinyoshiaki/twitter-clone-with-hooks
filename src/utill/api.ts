import axios from "axios";
import { Dispatch } from "redux";

export const req = axios.create({ baseURL: "http://localhost:1323" });

export const apiAction = async (
  request: { dir: string; data: object },
  type: string,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    dispatch({ type: type + "_start" });
    console.log(request.data);
    const res = await req.post(request.dir, request.data).catch(console.log);
    if (!res) {
      dispatch({ type: type + "_fail" });
      reject("fail");
    } else {
      dispatch({ type, payload: { ...res.data } });
      resolve(true);
    }
  });
};
