import { useState, useDebugValue } from "react";

export default function useInput(initialState) {
  const [state, setState] = useState(initialState);

  // useDebugValue(state === "" ? "NoInput" : "HasInput");

  const dispatch = e => {
    setState(e.target.value);
  };

  return [state, dispatch];
}
