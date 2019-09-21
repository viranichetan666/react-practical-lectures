import React, { useState, useEffect } from "react";

const FunctionalComponent = (props) => {
    const [test, setTest] = useState(1);

    useEffect(() => {
        console.log('Functional Component Mounted')
    }, [])

    useEffect(() => {
        console.log('Functional Component updated when state change');
        return () => {
            console.log('Functional Component Unmount')
        }
    }, [test])

    return(
        <div className="center-of-screen">
            <div>
                <div className="an-20 bold-text">
                    It is your Simple Functional Component;
                </div>

                <div className="pt20 an-16 medium-text">
                    Your State Value is <span className="redcolor--text ml10">{ test }</span>
                </div>

                <button onClick={ () => setTest(test + 1) } className="demo-button an-14 demi-bold-text mt20">
                    click here to state change
                </button>
            </div>
        </div>
    )
}

export default FunctionalComponent;