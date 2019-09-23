import React, { useState, useEffect } from 'react';
const data = [
    {
        id: 1,
        name: 'Chetan Virani'
    },
    {
        id: 2,
        name: 'Dhruvesh Soni'
    },
    {
        id: 3,
        name: 'Vishwas'
    },
    {
        id: 4,
        name: 'Shekhar Raval'
    },
    {
        id: 5,
        name: 'Harsh'
    }
];

const ConditionalRendering = props => {
    const [count, setCount] = useState(0);
    const [team, setTeam] = useState([]);
    let checkMinusValue;

    useEffect(() => {
        setTeam(data)
    }, [])

    if(count < 0) {
        checkMinusValue = <div className="bluecolor--text">Minus Count</div>
    } else {
        checkMinusValue = <div className="bluecolor--text">Plus Count</div>
    }

    return (
        <div className="center-of-screen">
            <div className="text-center">
                <div className="an-20 bold-text mb30">
                    Demostration of Conditional Rendering and Loop
                </div>
                <div>
                    <div className="an-20 medium-text pt10">
                        Counter: <span className="redcolor--text">{ count }</span>
                    </div>
                </div>
                {/* Conditional Rendering */}
                <div className="an-16 medium-text mt20">
                    {
                        count === 5 &&
                        <div>
                            You can see only when count is 5.
                        </div>
                    }

                    {
                        count === 10 ?
                        <div>
                            You can see only when count is 10.
                        </div> :
                        <div>
                            Default Message
                        </div>
                    }
                </div>

                {/* Conditional Rendering */}

                <div className="an-16 medium-text mt30">
                    Check Status: 
                    { checkMinusValue }
                </div>

                <div className="pt15">
                    <button onClick={ () => setCount(count + 1) } className="demo-button an-14 demi-bold-text mb20 mr20">
                        Plus
                    </button>
                    <button onClick={ () => setCount(count - 1) } className="demo-button an-14 demi-bold-text mb20">
                        Minus
                    </button>
                </div>

                {/* Looping in jsx */}
                    Looping in JSX
                {
                    team &&
                    team.map((member, index) => {
                        return(
                            <div key={member.id} className="dark light--text pa5 ma5">
                                { member.name } 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ConditionalRendering;