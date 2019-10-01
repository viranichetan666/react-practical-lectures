import React,{ useRef } from 'react'
import MyChildComponent from './MyChildComponent'

const UseImperativeHandleDemo = () => {
    const ref = useRef();
    const callFromParent = () => {
        // console.log('ref', ref)
        ref.current.methodOfChildHandler();
    }
    
    return (
        <div>
             <div className="an-18 bold-text redcolor--text py15 text-center">
                UseImperativeHandle Demo
            </div>
            <div>
                <MyChildComponent
                    ref={ref}
                />
                <div className="text-center">
                    <button onClick={callFromParent}  className="ma10 pa10">Call From parent</button>
                </div>
            </div>
        </div>
    )
}

export default UseImperativeHandleDemo