import { useContext } from 'react';
import { MyContext } from "./MyProvider";

const useCustomHook = () => {
  const [state, setState] = useContext(MyContext);

  const methodA = () => {
    const aData = {
        name: 'call method A'
    }
    setState({data: [...state.data, aData]})
  }

  const methodB = () => {
    const bData = {
        name: 'call method A'
    }
    setState({data: [...state.data, bData]})
  }

  const methodC = () => {
    const cData = {
        name: 'call method C'
    }
    setState({data: [...state.data, cData]})
  }
  
  return {
    methodA,
    methodB,
    methodC,
  }
};

export default useCustomHook;