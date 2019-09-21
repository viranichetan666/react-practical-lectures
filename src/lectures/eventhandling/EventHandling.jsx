import React, { useState } from 'react';
import EventHandlingChild from 'components/eventhandlingchild/EventHandlingChild';

const EventHandling = props => {
    const [state1, setState1] = useState(200);
    const [state2, setState2] = useState('chetan virani');
    const [state3, setState3] = useState(true);
    const [mouseOver, setMouseOver] = useState(1);
    const [wheel, setWheel] = useState(1);

    const changeState1 = () => {
        setState1(300);
    }

    const changeState2 = () => {
        setState2('Dhruvesh Soni');
    }

    const changeState3 = () => {
        setState3(!state3) // type 1
        // setState3((a) => !a); // type 2
    }

    const onMouseOver = () => {
        setMouseOver(mouseOver + 1)
    }

    const onWheel = () => {
        setWheel(wheel + 1)
    }

    return (
        <div className="center-of-screen">
            <div>
                <div className="an-20 bold-text">
                    Demostration of Event Passing and handling
                </div>
                <EventHandlingChild
                    state1={state1}
                    state2={state2}
                    state3={state3}
                    changeState1={changeState1}
                    changeState2={changeState2}
                    changeState3={changeState3}
                />
                <div>
                    <div onMouseOver={onMouseOver} className="an-16 medium-text">
                        onMouseOver: <span className="redcolor--text">{ mouseOver }</span>
                    </div>

                    <div onWheel={ onWheel } className="an-16 medium-text mt20">
                        onWheel: <span className="redcolor--text">{ wheel }</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventHandling;