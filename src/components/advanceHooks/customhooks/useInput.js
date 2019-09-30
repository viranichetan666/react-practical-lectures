import { useState } from "react";

export default function useInput(initialState) {
  const [state, setState] = useState(initialState);

  const dispatch = e => {
    setState(e.target.value);
  };

  return [state, dispatch];
}
