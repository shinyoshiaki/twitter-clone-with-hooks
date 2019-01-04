import { useState } from "react";

function useObject<T>(obj: T) {
  const [state, setObj] = useState(obj);

  const setState = (next: Partial<T>) => {
    setObj(Object.assign({}, state, next));
  };

  return { state, setState };
}
export { useObject };
