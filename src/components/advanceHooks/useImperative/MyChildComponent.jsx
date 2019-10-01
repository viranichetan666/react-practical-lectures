import React,{ useImperativeHandle, forwardRef } from 'react'

const MyChildComponent = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        methodOfChildHandler: () => {
            methodOfChild();
        }
    }));

    const methodOfChild = () => {
        console.log('call method in Child')
    }
    
    return (
        <div>
            <div className="an-20 bold-text text-center">
                MyChildComponent
            </div>
            <div className="text-center">
                <button onClick={methodOfChild} className="ma10 pa10">Call From Child</button>
            </div>
        </div>
    )
})

export default MyChildComponent