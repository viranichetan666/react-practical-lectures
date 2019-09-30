import React, { useState, useEffect } from 'react'
import CustomHooksDemo from 'components/advanceHooks/customhooks/CustomHooksDemo'
import UseMemoDemo from 'components/advanceHooks/usememodemo/UseMemoDemo'
import UseCallbackDemo from 'components/advanceHooks/usecallbackdemo/UseCallbackDemo'
import UseReducerDemo from 'components/advanceHooks/usereducerdemo/UseReducerDemo'

const data = [
    {
        id: 1,
        name: 'Chetan',
        created: 1569826497
    },
    {
        id: 2,
        name: 'Jyotil',
        created: 1569740097
    },
    {
        id: 3,
        name: 'Dhruvesh',
        createdsimpleText: 1569653697
    },
    {
        id: 4,
        name: 'Harsh',
        created: 1569480897
    }
]

const Hooks = () => {
    const [apiData, setApiData] = useState(null);
    const [simpleFlag, setSimpleFlag] = useState(true);

    useEffect(() => {
        setApiData(data)
    }, []);

    const changeText = () => {
        setSimpleFlag(!simpleFlag)
    }

    return (
        <div style={{maxWidth: "80%", margin: '0 auto'}}>
            <div>
                <div>
                    <CustomHooksDemo/>
                </div>
                <div>
                    {
                        apiData &&
                        <UseMemoDemo
                            apiData={apiData}
                            simpleFlag={simpleFlag}
                            changeText={changeText}
                        />
                    }
                </div>

                <div>
                    <UseCallbackDemo/>
                </div>
                
                <div>
                    <UseReducerDemo/>
                </div>
            </div>
        </div>
    )
}

export default Hooks