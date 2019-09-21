import React, { useState } from 'react';
import PropsAndStateChild from 'components/propsandatatechild/PropsAndStateChild';

const PropsAndStateDemo = props => {
    const [state1, setState1] = useState(200);
    const [state2, setState2] = useState('chetan virani');
    const [state3, setState3] = useState(true);

    const changeStateMethod = () => {
        setState1(300);
        setState2('Dhruvesh Soni');
        setState3(false);
    }

    return (
        <div className="center-of-screen">
            <div>
                <div className="an-20 bold-text">
                    Demostration of State and Props
                </div>
                <PropsAndStateChild
                    state1={state1}
                    state2={state2}
                    state3={state3}
                />
                <button onClick={ changeStateMethod } className="demo-button an-14 demi-bold-text mt20">
                    click here to state change
                </button>
            </div>
        </div>
    );
};

export default PropsAndStateDemo;