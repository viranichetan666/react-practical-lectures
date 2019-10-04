import React, { useCallback, useState } from 'react'

const functions: Set = new Set();

const UseCallbackDemo = () => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(0);

    // One Way
    const incrementCount1 = () => setCount1(count1 => count1 + 1);
    const incrementCount2 = () => setCount2(c => c + 1);

    // Second Way
    // const incrementCount1 = useCallback(() => setCount1(count => count + 1), []);
    // const incrementCount2 = useCallback(() => setCount2(count => count + 1), []);


    // Register the functions so we can count them
    functions.add(incrementCount1);
    functions.add(incrementCount2);

    return (
        <div>
            <div> Count1 is {count1} </div>
            <div> Counter is {count2} </div>
            <br/>
            <div>
            <button onClick={incrementCount1}>Increment Delta</button>
            <button onClick={incrementCount2}>Increment Counter</button>
            </div>
            <br/>
            <div> Newly Created Functions: {functions.size - 2} </div>
        </div>
    )
}

export default UseCallbackDemo