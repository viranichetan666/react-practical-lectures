import React,{ useLayoutEffect, useEffect } from 'react'

const UseLayoutEffectDemo = () => {

    useEffect(() => {
        console.log("USE EFFECT FUNCTION TRIGGERED");
    });
    useEffect(() => {
        console.log("USE SECOND EFFECT FUNCTION TRIGGERED");
    });

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    })
    
    console.log('render life cycle')

    return (
        <div>
            <div className="an-18 bold-text redcolor--text py15 text-center">
                UseLayoutEffect Demo
            </div>
        </div>
    )
}

export default UseLayoutEffectDemo;

//Doc of Differnece Link: https://blog.logrocket.com/useeffect-vs-uselayouteffect/