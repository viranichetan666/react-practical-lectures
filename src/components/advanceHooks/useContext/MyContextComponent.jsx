import React, { useContext } from 'react'
import { MyContext } from './MyProvider';
import useCustomHook from './useCustomHook'

const MyComponent = () => {

    const [state, setState] = useContext(MyContext);
    const { methodA, methodB, methodC } = useCustomHook();

    const { data } = state;

    const changeContextState = () => {
        const newData =  { 
            data: [
                {
                    name: 'Change state in context',
                },
            ] 
        }
        setState(newData)
    }

    return (
        <div>
             <div className="an-18 bold-text redcolor--text py15 text-center">
                UseContext Demo
            </div>
            {
                data && data.length &&
                data.map((e,i) => {
                    return (
                        <div key={i} className="pa10 ma10 text-center dark light--text an-15 medium-text">
                            { e.name }
                        </div>
                    )
                })
            }
            <div className="text-center">
                <button onClick={changeContextState} className="pa10 ma10 an-15 bold-text">
                    Change Context State
                </button>
            </div>
            <div className="text-center">
                <button onClick={methodA} className="pa10 ma10 an-15 bold-text">
                    Call Method A
                </button>
            </div>
            <div className="text-center">
                <button onClick={methodB} className="pa10 ma10 an-15 bold-text">
                Call Method B
                </button>
            </div>
            <div className="text-center">
                <button onClick={methodC} className="pa10 ma10 an-15 bold-text">
                    Call Method C
                </button>
            </div>
        </div>
    )
}

export default MyComponent