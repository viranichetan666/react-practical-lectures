import React,{ useRef, useLayoutEffect, useEffect } from 'react'

const UseLayoutEffectDemo = () => {
    let inputRef = useRef();

    useEffect(() => {
        console.log("USE EFFECT FUNCTION TRIGGERED");
    });
    useEffect(() => {
        console.log("USE SECOND EFFECT FUNCTION TRIGGERED");
    });

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    })

    return (
        <div>
            <div className="an-18 bold-text redcolor--text py15 text-center">
                UseLayoutEffect Demo
            </div>
            <div>
                <input 
                    type="text" 
                    ref={inputRef}
                />
            </div>
        </div>
    )
}

export default UseLayoutEffectDemo;

//Doc of Differnece Link: https://blog.logrocket.com/useeffect-vs-uselayouteffect/