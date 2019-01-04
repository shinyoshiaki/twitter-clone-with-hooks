import { useState, useEffect } from "react";
import axios from "axios";

const req = axios.create({ baseURL: "http://localhost:1323" });

const usePost = (url: string, json: object) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function run() {
    const res = await req.post(url, json);
    setData(res.data);
    setLoading(false);
  }

  useEffect(() => {
    run();
  }, []);
  return { data, loading };
};
export { usePost };
